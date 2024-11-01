import React, { FC } from "react";
import "./Day.css";

export type DayProps = {
  children?: React.ReactNode;
  dayNumber: number | null;
  numberAlign?: "left" | "center" | "right";
};

const DayComp: FC<DayProps> = ({
  children,
  dayNumber,
  numberAlign = "center",
}) => {
  return (
    <div className="Day__container">
      <div className={`Day__number ${numberAlign}`}>{dayNumber}</div>
      {children}
    </div>
  );
};

export default DayComp;
