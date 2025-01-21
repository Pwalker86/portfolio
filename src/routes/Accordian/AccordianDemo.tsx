import { FC } from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import localforage from "localforage";
import { EventType } from "@Types/index";
import Accordian from "@Components/Accordian";
import "./AccordianDemo.css";
import Button from "@Src/components/Button";

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
  let description = "";
  if (events.length > 0 && events[0].description) {
    description = events[0].description;
  }
  return { description: description };
};

const AccordianDemo: FC = () => {
  const { description } = useLoaderData() as ContentLoaderData;

  return (
    <div className="Accordian-demo__container">
      <Accordian headerText="Event 1" content={description}>
        <div>{description}</div>
        <Button onClick={() => alert("Good job!")}>Click Me!</Button>
        <Button corners="square" color="secondary">
          Secondary
        </Button>
      </Accordian>
    </div>
  );
};

export default AccordianDemo;
