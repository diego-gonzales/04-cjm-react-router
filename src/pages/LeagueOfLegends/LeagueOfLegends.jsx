import { Outlet, NavLink } from "react-router-dom";

const LeagueOfLegends = () => {
  let activeStyle = {
    backgroundColor: "#c9db62",
    borderRadius: "10px",
    pointerEvents: "none"
  };

  return (
    <div>
      <h3>League of Legends</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque,
        cupiditate consectetur nisi est debitis voluptates sunt. Tempora,
        expedita aut.
      </p>
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
