import { FC, useState } from "react";
import DayComp from "../../components/Day/Day";
import { months, getDaysInMonth, DayObject } from "../../utils/date_utils";
import "./DayDemo.css";

const DayDemo: FC = () => {
  const [month, setMonth] = useState(0);
  const daysOfTheMonth: DayObject[] = getDaysInMonth(+month, 2024);

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
          <DayComp key={day.date} dayNumber={day.date} numberAlign="left" />
        ))}
      </div>
      <h3>Center Aligned</h3>
      <div className="calendar-grid">
        {daysOfTheMonth.map((day) => (
          <DayComp key={day.date} dayNumber={day.date} numberAlign="center" />
        ))}
      </div>
      <h3>Right Aligned</h3>
      <div className="calendar-grid">
        {daysOfTheMonth.map((day) => (
          <DayComp key={day.date} dayNumber={day.date} numberAlign="right" />
        ))}
      </div>
    </>
  );
};

export default DayDemo;
