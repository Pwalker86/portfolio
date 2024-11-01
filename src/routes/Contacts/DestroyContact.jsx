import { redirect } from "react-router-dom";
import { deleteContact } from "./utils/contacts";
import { CONTACTS_ROOT_ROUTE } from "../routeConstants";

export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect(CONTACTS_ROOT_ROUTE);
}
