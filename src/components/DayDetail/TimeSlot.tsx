import { FC } from "react";
import { EventType } from "@Types/index";

type TimeSlotProps = {
  events?: EventType[];
};

const TimeSlot: FC<TimeSlotProps> = ({ events = [] }) => {
  return (
    <div>
      <h1>TimeSlot</h1>
    </div>
  );
};

export default TimeSlot;
