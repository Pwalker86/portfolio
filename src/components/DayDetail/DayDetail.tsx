import { FC } from "react";
import { EventType } from "@Types/index";
import { generateTimeSlots } from "./utils";
import Accordian from "@Components/Accordian";
import Button from "@Components/Button";
import "./DayDetail.css";

type DayDetailProps = {
  events?: EventType[];
};

const DayDetail: FC<DayDetailProps> = ({ events = [] }) => {
  const timeSlots = generateTimeSlots();

  const populateTimeSlots = (event: EventType) => {
    if (event.time) {
      timeSlots[event.time].push(event);
    }
  };

  events.forEach(populateTimeSlots);

  const renderTimeSlots = (timeSlots: Record<string, any[]> = {}) => {
    return Object.keys(timeSlots).map((timeSlot) => (
      <>
        <h4>{timeSlot}</h4>
        <ul>{renderEvents(timeSlots[timeSlot])}</ul>
      </>
    ));
  };

  const renderEvents = (timeSlot: EventType[]) => {
    if (timeSlot.length > 0) {
      console.log("renderEvents: ", timeSlot);
    }
    return timeSlot.map((event) => {
      return (
        <li>
          <Accordian headerText={event.name}>
            {event.description}
            <Button onClick={() => console.log("Event clicked")}>View</Button>
          </Accordian>
        </li>
      );
    });
  };

  console.log("populated TimeSlots: ", timeSlots);

  return (
    <>
      <h3>Events for day</h3>
      <hr />
      <ul className="DayDetail__event-list">{renderTimeSlots(timeSlots)}</ul>
    </>
  );
};

export default DayDetail;
