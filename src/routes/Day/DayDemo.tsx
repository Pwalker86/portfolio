import { FC, useState } from "react";
import DayComp from "@Components/Day";
import { months, simpleGetDays } from "../../utils/date_utils";
import "./DayDemo.css";

export const DayDemo: FC = () => {
  const [month, setMonth] = useState(0);
  const daysOfTheMonth = simpleGetDays(2024)[months[month]];
  debugger;
  return (
    <>
      <select
        name="month"
        id="month"
        onChange={(e) => setMonth(+e.target.value)}
      >
        {months.map((month, index) => (
          <option key={month} value={index}>
            {month}
          </option>
        ))}
      </select>
      <h3>Left Aligned</h3>
      <div className="calendar-grid">
        {daysOfTheMonth.map((day) => (
          <DayComp key={`left-${day}`} dayNumber={day} numberAlign="left" />
        ))}
      </div>
      <h3>Center Aligned</h3>
      <div className="calendar-grid">
        {daysOfTheMonth.map((day) => (
          <DayComp key={`center-${day}`} dayNumber={day} numberAlign="center" />
        ))}
      </div>
      <h3>Right Aligned</h3>
      <div className="calendar-grid">
        {daysOfTheMonth.map((day) => (
          <DayComp key={`right-${day}`} dayNumber={day} numberAlign="right" />
        ))}
      </div>
    </>
  );
};
