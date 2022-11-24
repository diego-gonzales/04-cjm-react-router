import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error404 from "./Error404";
import Menubar from "../components/Menubar";
import Profile from "./Profile";
import Products from "./Products";
import LeagueOfLegends from "./LeagueOfLegends/LeagueOfLegends";
import Characters from "./LeagueOfLegends/components/Characters";
import Builds from "./LeagueOfLegends/components/Builds";
import Runes from "./LeagueOfLegends/components/Runes";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

const Main = () => {
  return (
    <div>
      <h2>Main Page</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi hic
        dicta vero exercitationem quos, quisquam possimus nostrum magnam aperiam
        sequi soluta ullam quaerat nesciunt numquam.
      </p>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/products" element={<Products />} />

        {/* This path redirects to contact path */}
        <Route path="/redirectPath" element={<Navigate to="/contact" />} />
        {/* */}

        {/* Nested Routes */}
        <Route path="/lol" element={<LeagueOfLegends />}>
          <Route path="characters" element={<Characters />} />
          <Route path="builds" element={<Builds />} />
          <Route path="runes" element={<Runes />} />
          {/* <Route path="" element={<Navigate to="characters" />} /> */}
        </Route>
        {/* End nested routes */}

        {/* Client does not return a 404 status, the server should do it (Midudev tutorial) */}
        <Route path="*" element={<Error404 />} />
        {/*  */}

        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute redirectPath="/login">
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default Main;
