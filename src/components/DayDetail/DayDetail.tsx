import { FC } from "react";
import { EventType } from "@Src/main";

type DayDetailProps = {
  events?: EventType[];
};

const DayDetail: FC<DayDetailProps> = ({ events = [] }) => {
  return (
    <div>
      <h3>Events for day</h3>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DayDetail;
