import { FC, useState } from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import DayComp from "@Components/Day";
import { EventType } from "@Src/main";
import { months, simpleGetDays } from "../../utils/date_utils";
import { getEvents } from "./utils/events";
import "./DayDemo.css";

type EventLoaderData = {
  events: EventType[];
};

export const loader: LoaderFunction = async (): Promise<EventLoaderData> => {
  const events = await getEvents();
  return { events };
};

export const DayDemo: FC = () => {
  const { events } = useLoaderData() as EventLoaderData;
  const [month, setMonth] = useState(0);
  const daysOfTheMonth = simpleGetDays(2024)[months[month]];
  let dayEvents: EventType[];
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
        {daysOfTheMonth.map(
          (day) => (
            (dayEvents = events.filter((event) => event.date === day)),
            (
              <DayComp
                key={`left-${day}`}
                dayNumber={day}
                numberAlign="left"
                events={dayEvents}
              />
            )
          ),
        )}
      </div>
      <h3>Center Aligned</h3>
      <div className="calendar-grid">
        {daysOfTheMonth.map(
          (day) => (
            (dayEvents = events.filter((event) => event.date === day)),
            (
              <DayComp
                key={`center-${day}`}
                dayNumber={day}
                numberAlign="center"
                events={dayEvents}
              />
            )
          ),
        )}
      </div>
      <h3>Right Aligned</h3>
      <div className="calendar-grid">
        {daysOfTheMonth.map(
          (day) => (
            (dayEvents = events.filter((event) => event.date === day)),
            (
              <DayComp
                key={`right-${day}`}
                dayNumber={day}
                numberAlign="right"
                events={dayEvents}
              />
            )
          ),
        )}
      </div>
    </>
  );
};

export default DayDemo;
