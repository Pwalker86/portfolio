import { FC } from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import localforage from "localforage";
import { EventType } from "@Types/index";
import Accordian from "@Components/Accordian";
import "./AccordianDemo.css";

type ContentLoaderData = {
  description: string;
};

export async function getEvents(): Promise<EventType[]> {
  let events = await localforage.getItem<EventType[]>("events");
  if (!events) events = [];
  return events;
}

export const loader: LoaderFunction = async (): Promise<ContentLoaderData> => {
  const events = await getEvents();
  let desc = "";
  if (events.length > 0 && events[0].desc) {
    desc = events[0].desc;
  }
  return { description: desc };
};

const AccordianDemo: FC = () => {
  const { description } = useLoaderData() as ContentLoaderData;

  return (
    <div className="Accordian-demo__container">
      <Accordian headerText="Event 1" content={description} />
    </div>
  );
};

export default AccordianDemo;
