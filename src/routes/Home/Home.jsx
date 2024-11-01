import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { NavItems } from "./home_utils";

export function Home() {
  return (
    <>
      <Sidebar headerText="Phil Walker Portfolio">
        <nav>
          <ul>
            {Object.keys(NavItems).map((key) => (
              <li key={NavItems[key].path}>
                <NavLink to={NavItems[key].path}>{key}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Sidebar>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
