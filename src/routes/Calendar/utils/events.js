import localforage from "localforage";

export async function getEvents() {
  let events = await localforage.getItem("events");
  if (!events) events = [];
  return events;
}

export async function getDayEvents(dayId) {
  let events = await getEvents();
  const dayEvents = events.filter((event) => event.date === dayId);
  return dayEvents ?? null;
}
