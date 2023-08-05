/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Layout = ({ user, onLogout, isLoggedin }) => {
  return (
    <div className="app">
      <Navbar user={user} onLogout={onLogout} isLoggedin={isLoggedin} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
