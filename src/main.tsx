import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import localforage from "localforage";
import ContactRoot, {
  loader as rootLoader,
  action as rootAction,
} from "@Routes/Contacts/ContactRoot";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "@Routes/Contacts/Contact";
import EditContact, {
  loader as editContactLoader,
  action as editAction,
} from "@Routes/Contacts/EditContact";
import { action as destroyAction } from "@Routes/Contacts/DestroyContact";
import ButtonDemo from "@Routes/Button";
import { Home } from "@Routes/Home";
import { DayDemo } from "@Routes/Day";
import ErrorPage from "./error-page";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "button", element: <ButtonDemo /> },
      {
        path: "day",
        element: <DayDemo />,
      },
    ],
  },
  {
    path: "/contacts",
    element: <ContactRoot />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: ":contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: ":contactId/edit",
        element: <EditContact />,
        loader: editContactLoader,
        action: editAction,
      },
      {
        path: ":contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! there was an error.</div>,
      },
    ],
  },
]);

type EventType = {
  id: string;
  name: string;
  date: number;
};

let events: EventType[] = [];

const seedEvents: any = (event: EventType): void => {
  localforage.setItem("events", event);
};

for (let i = 0; i < 10; i++) {
  let id = Math.random().toString(36).substring(2, 9);
  const event = {
    id: id,
    name: "test Event",
    date: Math.floor(Math.random() * (29 - 0) + 0),
  };
  events.push(event);
  console.log("seeded event");
}
seedEvents(events);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}
