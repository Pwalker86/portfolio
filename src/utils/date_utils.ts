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

/**
 * Returns an array of DayObject for each day in the specified month and year.
 * Each DayObject contains the day of the week and the date.
 */
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

const simpleMonths: { [key: string]: number } = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 30,
  September: 31,
  October: 30,
  November: 31,
  December: 30,
};

export function simpleGetDays(year: number) {
  if (year % 4 === 0) {
    simpleMonths["February"] = 29;
  }
  let yearDays: { [key: string]: number[] } = {};
  Object.entries(simpleMonths).map((month) => {
    const daySize = simpleMonths[month[0]];
    let dayArray = Array.from({ length: daySize }, (_, i) => i + 1);
    yearDays[month[0]] = dayArray;
  });
  return yearDays;
}
