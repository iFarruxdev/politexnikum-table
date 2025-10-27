import "./Layout.css";
import Dashboard from "../components/Dashboard/Dashboard";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useState } from "react";

const Layout = () => {
  let [toggleBar, setToggleBar] = useState(false);
  return (
    <div className="index-layout">
      <Dashboard toggleBar={toggleBar} setToggleBar={setToggleBar} />
      <div className="layout-content">
        <Header setToggleBar={setToggleBar} toggleBar={toggleBar} />
        <main className="main-section">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
