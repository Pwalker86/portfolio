import { FC } from "react";
import { useLoaderData, LoaderFunction, useParams } from "react-router-dom";
import { getEvent } from "../Calendar/utils/events";
import { EventType } from "@Src/main";

type EventLoaderData = {
  events: EventType[];
};

export const loader: LoaderFunction = async ({
  params,
}): Promise<EventLoaderData> => {
  const dayId = params.dayId;
  const events = await getEvent(dayId);
  return { events };
};

export const DayDetailDemo: FC = () => {
  const { events } = useLoaderData() as EventLoaderData;

  console.log("events: ", events);

  return (
    <>
      <div>hello!</div>
    </>
  );
};

export default DayDetailDemo;
