import { FC } from "react";
import { useLoaderData, LoaderFunction } from "react-router-dom";
import { getDayEvents } from "../Calendar/utils/events";
import { EventType } from "@Types/index";
import DayDetail from "@Components/DayDetail";
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
  const { events } = useLoaderData() as EventLoaderData;

  return (
    <div className="DayDetailDemo__container">
      <DayDetail events={events} />
    </div>
  );
};

export default DayDetailDemo;
