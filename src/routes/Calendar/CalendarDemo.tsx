import { LoaderFunction, useLoaderData, useNavigate } from "react-router-dom";
import Calendar from "@Src/components/Calendar";
import { getEvents } from "./utils/events";
import { EventType } from "@Types/index";
import "./CalendarDemo.css";

type EventLoaderData = {
  events: EventType[];
};

export const loader: LoaderFunction = async (): Promise<EventLoaderData> => {
  const events = await getEvents();
  return { events };
};

function CalendarDemo() {
  const navigate = useNavigate();
  const { events } = useLoaderData() as EventLoaderData;
  const goToDay = (day: string) => {
    navigate(`/day/${encodeURIComponent(day)}`);
  };
  return (
    <Calendar events={events} handleDayClick={(day: string) => goToDay(day)} />
  );
}

export default CalendarDemo;
