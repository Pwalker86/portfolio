import localforage from "localforage";

export async function getEvents() {
  let events = await localforage.getItem("events");
  if (!events) events = [];
  return events;
}
