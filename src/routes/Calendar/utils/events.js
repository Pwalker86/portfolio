import localforage from "localforage";

export async function getEvents() {
  let events = await localforage.getItem("events");
  if (!events) events = [];
  return events;
}

export async function getEvent(dayId) {
  let events = await getEvents();
  const event = events.find((event) => event.date === +dayId);
  return event ?? null;
}
