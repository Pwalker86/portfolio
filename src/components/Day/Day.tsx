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
  const [modalData, setModalData] = useState({ visible: false, events: null });
  const handleClick = () => {
    console.log("clicked");
    setModalData({ ...modalData, visible: true, events: events });
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
      {modalData.visible && <Modal visible={modalData.visible} />}
      {children}
    </div>
  );
};

export default DayComp;
