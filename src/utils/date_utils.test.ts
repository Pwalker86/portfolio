import { expect, test } from "vitest";
import { months, getDaysInMonth, getDaysInYear } from "./date_utils";

test("months array is correct", () => {
  expect(months.length).toBe(12);
  expect(months[0]).toBe("January");
  expect(months[1]).toBe("February");
  expect(months[2]).toBe("March");
  expect(months[3]).toBe("April");
  expect(months[4]).toBe("May");
  expect(months[5]).toBe("June");
  expect(months[6]).toBe("July");
  expect(months[7]).toBe("August");
  expect(months[8]).toBe("September");
  expect(months[9]).toBe("October");
  expect(months[10]).toBe("November");
  expect(months[11]).toBe("December");
});

test("getDaysInMonth returns correct number of days", () => {
  const febDays = getDaysInMonth(1, 2022);
  const februaryLeapYearDays = getDaysInMonth(1, 2024);
  expect(februaryLeapYearDays.length).toBe(29);
  expect(febDays.length).toBe(28);
});

test("getDaysInYear returns correct number of days", () => {
  const year2024 = getDaysInYear(2024);
  expect(Object.keys(year2024).length).toBe(12);
  expect(year2024["February"].length).toBe(29);
});
