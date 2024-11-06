import React, { useState } from "react";
import { LoaderFunction, useLoaderData, useNavigate } from "react-router-dom";
import SmallDayComp from "@Src/components/SmallDay";
import { getEvents } from "../utils/events";
import { EventType } from "@Src/main";
import "./Calendar.css";

type EventLoaderData = {
  events: EventType[];
};

export const loader: LoaderFunction = async (): Promise<EventLoaderData> => {
  const events = await getEvents();
  return { events };
};

function CalendarV2() {
  const navigate = useNavigate();
  const [sDate, setsDate] = useState(new Date());
  const { events } = useLoaderData() as EventLoaderData;

  const findMonthDays = (y: number, m: number) => {
    // 0 as the 3rd argument gets the total number of days in the given month
    return new Date(y, m + 1, 0).getDate();
  };

  const findFirstDay = (y: number, m: number) => {
    return new Date(y, m, 1).getDay();
  };

  const changeToPrevMonth = () => {
    setsDate((pDate) => {
      const pMonth = pDate.getMonth() - 1;
      const pYear = pDate.getFullYear();
      return new Date(pYear, pMonth);
    });
  };

  const changeToNextMonth = () => {
    setsDate((pDate) => {
      const nMonth = pDate.getMonth() + 1;
      const nYear = pDate.getFullYear();
      return new Date(nYear, nMonth);
    });
  };

  const handleDateClick = (date: React.SetStateAction<Date>) => {
    setsDate(date);
  };

  const goToDay = (day: string) => {
    navigate(`/day/${encodeURIComponent(day)}`);
  };

  const showCalendar = () => {
    const y = sDate.getFullYear();
    const m = sDate.getMonth();
    const mDays = findMonthDays(y, m);
    const fDay = findFirstDay(y, m);

    const allDays = [];

    // For empty cells at the beginning of the month
    for (let p = 0; p < fDay; p++) {
      allDays.push(<div key={`em-${p}`} className="empty"></div>);
    }

    // Show actual days
    for (let d = 1; d <= mDays; d++) {
      const date = new Date(y, m, d);
      const isSelected = sDate && date.toDateString() === sDate.toDateString();
      const eventDate = `${m + 1}/${d}/${y}`;
      const dayEvents = events.filter((event) => event.date === eventDate);

      allDays.push(
        <SmallDayComp
          key={eventDate}
          dayNumber={d}
          longDate={date.toDateString()}
          styleVariants={`${isSelected ? "selected" : ""}`}
          handleClick={() => goToDay(eventDate)}
          events={dayEvents}
        />,
      );
    }

    // Add empty cells to the end of the month
    if (allDays.length < 42) {
      const remainder = allDays.length % 7;
      const daysToAdd = remainder === 0 ? 0 : 7 - remainder;
      for (let p = 0; p < daysToAdd; p++) {
        allDays.push(
          <div key={`em-${allDays.length + p}`} className="empty"></div>,
        );
      }
    }

    return allDays;
  };

  return (
    <div>
      <div className="main">
        <div className="header">
          <button onClick={changeToPrevMonth}>&lt;</button>
          <h2>
            {sDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <button onClick={changeToNextMonth}>&gt;</button>
        </div>
        <div className="body">{showCalendar()} </div>
        {sDate && (
          <div className="selected-date">
            Selected Date: {sDate.toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  );
}

export default CalendarV2;
