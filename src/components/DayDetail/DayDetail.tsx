import { FC, useMemo } from "react";
import { EventType } from "@Types/index";
import { generateTimeSlots } from "./utils";
import Accordian from "@Components/Accordian";
import Button from "@Components/Button";
import "./DayDetail.css";

type DayDetailProps = {
  events?: EventType[];
};

const DayDetail: FC<DayDetailProps> = ({ events = [] }) => {
  const timeSlots = useMemo(() => {
    const slots = generateTimeSlots();
    events.forEach((event) => {
      if (event.time) {
        slots[event.time].push(event);
      }
    });
    return slots;
  }, [events]);

  const renderTimeSlots = (timeSlots: Record<string, any[]> = {}) => {
    return Object.keys(timeSlots).map((timeSlot) => (
      <>
        <h4>{timeSlot}</h4>
        <ul>{renderEvents(timeSlots[timeSlot])}</ul>
      </>
    ));
  };

  const renderEvents = (timeSlot: EventType[]) => {
    return timeSlot.map((event) => {
      return (
        <li>
          <Accordian headerText={event.name}>{event.description}</Accordian>
          <Button size="tiny" corners="square">
            View More
          </Button>
        </li>
      );
    });
  };

  return (
    <>
      <h3>Events for day</h3>
      <hr />
      <ul className="DayDetail__event-list">{renderTimeSlots(timeSlots)}</ul>
    </>
  );
};

export default DayDetail;
