import React from "react";
import Sidebar from "./Sidebar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <header className="navbar">Dashboard</header>
        <main className="page-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
