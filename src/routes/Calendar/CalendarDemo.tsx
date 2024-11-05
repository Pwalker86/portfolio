import { FC, useState } from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import DayComp from "@Components/Day";
import { EventType } from "@Src/main";
import { months, simpleGetDays } from "../../utils/date_utils";
import { getEvents } from "./utils/events";
import "./CalendarDemo.css";

type EventLoaderData = {
  events: EventType[];
};

export const loader: LoaderFunction = async (): Promise<EventLoaderData> => {
  const events = await getEvents();
  return { events };
};

export const CalendarDemo: FC = () => {
  const { events } = useLoaderData() as EventLoaderData;
  const [month, setMonth] = useState(0);
  const daysOfTheMonth = simpleGetDays(2024)[months[month]];
  let dayEvents: EventType[];

  const renderCalendar = (
    day: number,
    numberAlign: "left" | "center" | "right",
  ) => {
    return (
      (dayEvents = events.filter((event) => event.date === day)),
      (
        <DayComp
          key={`${numberAlign}-${day}`}
          dayNumber={day}
          numberAlign={numberAlign}
          events={dayEvents}
        />
      )
    );
  };

  return (
    <>
      <select
        name="month"
        id="month"
        onChange={(e) => setMonth(+e.target.value)}
      >
        {months.map((month, index) => (
          <option key={month} value={index}>
            {month}
          </option>
        ))}
      </select>
      <h3>Left Aligned</h3>
      <div className="calendar-grid">
        {daysOfTheMonth.map((day) => renderCalendar(day, "left"))}
      </div>
      <h3>Center Aligned</h3>
      <div className="calendar-grid">
        {daysOfTheMonth.map((day) => renderCalendar(day, "center"))}
      </div>
      <h3>Right Aligned</h3>
      <div className="calendar-grid">
        {daysOfTheMonth.map((day) => renderCalendar(day, "right"))}
      </div>
    </>
  );
};

export default CalendarDemo;
