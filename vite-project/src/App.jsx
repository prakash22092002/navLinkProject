import { Link, NavLink, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Users from "./components/users/User";
import SingleUser from "./components/singleUser/SingleUser";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="navLinks">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "isActive" : "notActive")}
        >
          <h2>Home</h2>
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "isActive" : "notActive")}
        >
          <h2>About</h2>
        </NavLink>

        <NavLink
          to={"/users"}
          className={({ isActive }) => (isActive ? "isActive" : "notActive")}
        >
          <h2>Users</h2>
        </NavLink>

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users/>} />
        <Route path="/singleUser/:user_id" element={<SingleUser/>}/>
      </Routes>
    </>
  );
};

export default App;
