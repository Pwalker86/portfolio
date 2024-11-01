export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export type DayObject = {
  weekDay: number;
  date: number;
};

export function getDaysInMonth(month: number, year: number): DayObject[] {
  const date = new Date(year, month);
  let days: DayObject[] = [];
  while (date.getMonth() === month) {
    let day = {} as DayObject;
    day["weekDay"] = date.getDay();
    day["date"] = date.getDate();
    days.push(day);
    date.setDate(date.getDate() + 1);
  }
  return days;
}

type MonthDays = {
  [key: string]: Object[];
};

export function getDaysInYear(year: number): MonthDays {
  let yearDays: MonthDays = {};
  months.forEach((month, index) => {
    yearDays[month] = getDaysInMonth(index, year);
  });
  return yearDays;
}
