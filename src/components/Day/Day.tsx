import React, { FC, useState } from "react";
import { EventType } from "@Src/main";
import "./Day.css";
import Modal from "../Modal/Modal";

export type DayProps = {
  children?: React.ReactNode;
  dayNumber: number | null;
  events?: EventType[];
  numberAlign?: "left" | "center" | "right";
};

const DayComp: FC<DayProps> = ({
  children,
  dayNumber,
  events,
  numberAlign = "center",
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalEvents, setModalEvents] = useState<EventType[]>([]);

  const handleClick = () => {
    setIsModalVisible(!isModalVisible);
    setModalEvents(events || []);
  };

  return (
    <div className="Day__container" onClick={() => handleClick()}>
      <div className={`Day__number ${numberAlign}`}>{dayNumber}</div>
      {events && events.length > 0 && (
        <div className="Day__events">
          {events.map((event) => (
            <div key={event.id} className="Day__event" />
          ))}
        </div>
      )}
      {isModalVisible && (
        <Modal visible={isModalVisible}>
          <div>
            <h3>Events for {dayNumber}</h3>
            <ul>
              {modalEvents.map((event) => (
                <li key={event.id}>{event.name}</li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
      {children}
    </div>
  );
};

export default DayComp;
