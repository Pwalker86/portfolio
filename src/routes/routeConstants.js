export const ROOT_ROUTE = "/";
export const CONTACTS_ROOT_ROUTE = "/contacts";
export const CONTACT_ROUTE = (contactId) => {
  return `/contacts/${contactId}`;
};

export const EDIT_CONTACT_ROUTE = (contactId) => {
  return `/contacts/${contactId}/edit`;
};

export const DESTROY_CONTACT_ROUTE = (contactId) => {
  return `/contacts/${contactId}/destroy`;
};
