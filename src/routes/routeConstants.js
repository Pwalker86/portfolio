export const ROOT_ROUTE = "/";
export const CONTACTS = "/contacts"
export const CONTACT_ROUTE = (contactId) => {
  return `/contacts/${contactId}`
}

export const EDIT_CONTACT_ROUTE = (contactId) => {
  return `/contacts/${contactId}/edit`
}
