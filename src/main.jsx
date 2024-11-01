import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactRoot, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/Contacts/ContactRoot";
import ErrorPage from "./error-page";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/Contacts/Contact";
import EditContact, {
  loader as editContactLoader,
  action as editAction,
} from "./routes/Contacts/EditContact";
import { action as destroyAction } from "./routes/Contacts/DestroyContact";
import { Home } from "./routes/Home/Home";
import "./index.css";
import ButtonDemo from "./routes/Button/ButtonDemo";
import DayDemo from "./routes/Day/DayDemo";

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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
