import { FC } from "react";
import { useLoaderData, LoaderFunction } from "react-router-dom";
import { getDayEvents } from "../Calendar/utils/events";
import { EventType } from "@Src/main";
import "./DayDetailDemo.css";

type EventLoaderData = {
  events: EventType[];
  dayId?: string;
};

export const loader: LoaderFunction = async ({
  params,
}): Promise<EventLoaderData> => {
  const dayId = params.dayId;
  const events = await getDayEvents(dayId);
  return { events, dayId };
};

export const DayDetailDemo: FC = () => {
  const { events, dayId } = useLoaderData() as EventLoaderData;

  return (
    <div className="DayDetailDemo__container">
      <h1>{dayId}</h1>
      <ul className="DayDetailDemo__eventList">
        {events.map((event) => (
          <li className="DayDetailDemo__eventListItem" key={event.id}>
            {event.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayDetailDemo;
