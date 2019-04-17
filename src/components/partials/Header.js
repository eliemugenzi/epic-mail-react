import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const Header = ({ title }) => {
  return (
    <div>
      <Nav />
      <Sidebar />
    </div>
  );
};

export default Header;
