import { useState } from "react";
import SmallDayComp from "@Src/components/SmallDay";
import { EventType } from "@Types/index";
import "./Calendar.css";

function Calendar({
  events,
  handleDayClick,
}: {
  events: EventType[];
  handleDayClick: (day: string) => void;
}) {
  const [sDate, setsDate] = useState(new Date());

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
          styleVariants={`${isSelected ? "selected" : ""}`}
          handleClick={() => handleDayClick(eventDate)}
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

export default Calendar;
