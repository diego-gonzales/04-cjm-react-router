import { Outlet, NavLink } from "react-router-dom";

const LeagueOfLegends = () => {
  let activeStyle = {
    backgroundColor: "#c9db62",
    borderRadius: "10px",
  };

  return (
    <div>
      <h3>League of Legends</h3>
      <p>This is the main page of League of Legends</p>
      <nav>
        <ul>
          <li>
            <NavLink
              to="characters"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="builds"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Builds
            </NavLink>
          </li>
          <li>
            <NavLink
              to="runes"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Runes
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default LeagueOfLegends;
