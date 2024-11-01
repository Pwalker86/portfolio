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

export function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month);
  let days: number[] = [];
  while (date.getMonth() === month) {
    days.push(new Date(date).getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
}

type MonthDays = {
  [key: string]: number[];
};

export function getDaysInYear(year: number) {
  let yearDays: MonthDays = {};
  months.forEach((month, index) => {
    yearDays[month] = getDaysInMonth(index, year);
  });
  return yearDays;
}
