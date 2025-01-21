import { FC, useState } from "react";
import {
  LoaderFunction,
  // useLoaderData
} from "react-router-dom";
import SmallDayComp from "@Src/components/SmallDay";
import { EventType } from "@Types/index";
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
  // TODO: These comments don't work with the v2 version of events that I came up with. This demo can still be used to show the different display options of the date numebers.
  // const { events } = useLoaderData() as EventLoaderData;
  const [month, setMonth] = useState(0);
  const daysOfTheMonth = simpleGetDays(2024)[months[month]];
  // let dayEvents: EventType[];

  const renderCalendar = (
    day: number,
    numberAlign: "left" | "center" | "right",
  ) => {
    return (
      // TODO: These comments don't work with the v2 version of events that I came up with. This demo can still be used to show the different display options of the date numebers.
      // (dayEvents = events.filter((event) => event.date === day)),
      <SmallDayComp
        key={`${numberAlign}-${day}`}
        dayNumber={day}
        numberAlign={numberAlign}
        // events={dayEvents}
      />
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
