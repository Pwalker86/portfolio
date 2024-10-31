const months = [
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

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month);
  let days = [];
  while (date.getMonth().toLocaleString() === month) {
    debugger;
    days.push(new Date(date).getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
}
