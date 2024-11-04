import React, { FC } from "react";
import { EventType } from "@Src/main";
import "./Day.css";

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
  console.log(events);
  return (
    <div className="Day__container">
      <div className={`Day__number ${numberAlign}`}>{dayNumber}</div>
      {events && events.length > 0 && (
        <div className="Day__events">
          {events.map((event) => (
            <div key={event.id} className="Day__event" />
          ))}
        </div>
      )}
      {children}
    </div>
  );
};

export default DayComp;
