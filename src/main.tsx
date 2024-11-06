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
import { Home, HomeDetail } from "@Routes/Home";
// import CalendarDemo, {
//   loader as CalendarDemoLoader,
// } from "@Routes/Calendar/CalendarDemo";
import DayDetailDemo, {
  loader as DayDetailDemoLoader,
} from "@Routes/DayDetailDemo/DayDetailDemo";
import CalendarV2, {
  loader as CalendarV2Loader,
} from "./routes/Calendar/v2/Calendar";
import ErrorPage from "./error-page";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <HomeDetail /> },
      { path: "button", element: <ButtonDemo /> },
      {
        path: "calendar",
        element: <CalendarV2 />,
        loader: CalendarV2Loader,
      },
      // {
      //   path: "day",
      //   element: <CalendarDemo />,
      //   loader: CalendarDemoLoader,
      // },
      {
        path: "day/:dayId",
        element: <DayDetailDemo />,
        loader: DayDetailDemoLoader,
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

// ****************** Seed Event Data ******************
export type EventType = {
  id: string;
  name: string;
  date: string;
};

let events: EventType[] = [];

const seedEvents = (events: EventType[]): void => {
  for (let i = 0; i < 10; i++) {
    for (let m = 0; m < 12; m++) {
      let id = Math.random().toString(36).substring(2, 9);
      const randomDay = Math.floor(Math.random() * (29 - 0) + 0);
      const eventDate: string = new Date(
        `2024/${m + 1}/${randomDay}`,
      ).toLocaleString();
      const dateDelimiter = ",";
      const event = {
        id: id,
        name: "test Event " + m,
        date: eventDate.slice(0, eventDate.indexOf(dateDelimiter)),
      };
      events.push(event);
      console.log("seeded event");
    }
  }

  localforage.setItem("events", events);
};

localforage.getItem("events").then((value) => {
  if (value) {
    console.log(value);
    console.log("events already seeded");
  } else {
    seedEvents(events);
  }
});

// ****************** Render App ******************

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
