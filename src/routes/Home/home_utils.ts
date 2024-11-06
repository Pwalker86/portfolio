type NavItem = {
  [key: string]: { path: string };
};

export const NavItems: NavItem = {
  Home: {
    path: "/",
  },
  Button: {
    path: "/button",
  },
  Calendar: {
    path: "/calendar",
  },
  // DayComp: {
  //   path: "/day",
  // },
  Contacts: {
    path: "/contacts",
  },
};
