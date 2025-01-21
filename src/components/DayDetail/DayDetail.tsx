import { FC } from "react";
import { EventType } from "@Types/index";

type DayDetailProps = {
  events?: EventType[];
};

const DayDetail: FC<DayDetailProps> = ({ events = [] }) => {
  const renderEvent = (dayEvent: EventType, index: number) => {
    return (
      <>
        <hr />
        <li key={dayEvent.id}>{dayEvent.name}</li>
        <hr />
      </>
    );
  };

  return (
    <>
      <h3>Events for day</h3>
      <ul>{events.map((event, index) => renderEvent(event, index))}</ul>
    </>
  );
};

export default DayDetail;
