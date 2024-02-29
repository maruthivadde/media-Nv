import { LuLayoutDashboard } from "react-icons/lu";

import "./index.css";

const SideBar = () => (
  <div className="side-bar">
    <div className="logo-container">
      <div className="logo-icon"></div>
      <h1 className="logo-name">LOGO</h1>
    </div>

    <div className="sidebar-top-bottom-options">
      <div className="sidebar-top-options">
        <button className="sidebar-option">
          <span className="active-option">
            <LuLayoutDashboard size={22} />{" "}
            <span className="sidebar-bid">Bid</span>{" "}
          </span>{" "}
        </button>
        <button className="sidebar-normal-options">
          <LuLayoutDashboard size={22} style={{ marginRight: "10" }} /> POD
        </button>
        <button className="sidebar-normal-options">
          <LuLayoutDashboard size={22} style={{ marginRight: "10" }} /> Vendor
        </button>
        <button className="sidebar-normal-options">
          <LuLayoutDashboard size={22} style={{ marginRight: "10" }} /> User
        </button>
      </div>

      <div>
        <button className="sidebar-normal-options">
          <LuLayoutDashboard size={22} style={{ marginRight: "10" }} /> Settings
        </button>
        <button className="sidebar-normal-options">
          <LuLayoutDashboard size={22} style={{ marginRight: "10" }} /> Profile
        </button>
        <button className="sidebar-normal-options">
          <LuLayoutDashboard size={22} style={{ marginRight: "10" }} /> Contact
          Us
        </button>
        <button className="sidebar-normal-options">
          <LuLayoutDashboard size={22} style={{ marginRight: "10" }} /> Logout
        </button>
      </div>
    </div>
  </div>
);

export default SideBar;
