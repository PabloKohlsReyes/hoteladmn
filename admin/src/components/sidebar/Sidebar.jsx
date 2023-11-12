import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import WarningIcon from "@mui/icons-material/Warning";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">hoteladmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
          <li>
            <ProductionQuantityLimitsIcon className="icon" />
            <span>Hotels</span>
          </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
          <li>
            <BorderColorIcon className="icon" />
            <span>Rooms</span>
          </li>
          </Link>
          <li>
            <DeliveryDiningIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <LeaderboardIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <WarningIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <BorderColorIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AssignmentIndIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type: "DARK"})}></div>
      </div>
    </div>
  );
};

export default Sidebar;
