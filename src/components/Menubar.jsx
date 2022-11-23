import { Link, NavLink } from "react-router-dom";

const Menubar = () => {
  let activeStyle = {
    backgroundColor: "#c9db62",
    borderRadius: "10px",
    pointerEvents: "none"
  };

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>

      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/profile/diego"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          My profile
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Products
        </NavLink>
        <NavLink
          to="/redirectPath"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Redirect to Contact
        </NavLink>
        <NavLink
          to="/lol"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          League of Legends
        </NavLink>
      </nav>
    </>
  );
};

export default Menubar;
