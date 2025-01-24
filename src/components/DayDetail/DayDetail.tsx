import { FC } from "react";
import { EventType } from "@Types/index";
import { timeSlots } from "./utils";
import "./DayDetail.css";

type DayDetailProps = {
  events?: EventType[];
};

const DayDetail: FC<DayDetailProps> = ({ events = [] }) => {
  const renderTimeSlots = (timeSlots: Record<string, any[]> = {}) => {
    return Object.keys(timeSlots).map((timeSlot) => (
      <>
        <h4>{timeSlot}</h4>
        <ul>{renderEvent(timeSlots[timeSlot])}</ul>
      </>
    ));
  };
  const renderEvent = (timeSlot: EventType[]) => {
    debugger;
    timeSlot.map((event) => (
      <>
        <li>{event.name}</li>
        <hr />
      </>
    ));
  };

  const populateTimeSlots = (event: EventType) => {
    if (event.time) {
      timeSlots[event.time].push(event);
    }
  };

  events.forEach(populateTimeSlots);
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
