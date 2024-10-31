import React, { FC } from "react";
import "./Day.css";

type DayProps = {
  children?: React.ReactNode;
  dayNumber: number;
};

const Day: FC<DayProps> = ({ children, dayNumber }) => {
  return (
    <div className="Day__container">
      <div className="Day__number">{dayNumber}</div>
      {children}
    </div>
  );
};

export default Day;
