import React, { FC } from "react";
import { EventType } from "@Types/index";
import "./SmallDay.css";

export type SmallDayProps = {
  children?: React.ReactNode;
  dayNumber: number | null;
  longDate?: string;
  events?: EventType[];
  styleVariants?: string;
  handleClick?: () => void;
  numberAlign?: "left" | "center" | "right";
};

const SmallDayComp: FC<SmallDayProps> = ({
  children,
  dayNumber,
  events,
  styleVariants,
  handleClick = () => {},
  numberAlign = "center",
}) => {
  return (
    <div
      className={`Day__container ${styleVariants}`}
      onClick={() => handleClick()}
    >
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

export default SmallDayComp;
