import "./navbar.scss";
import SearchlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ListIcon from "@mui/icons-material/List";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" onClick={()=> dispatch({type:"TOGGLE"})} />
          </div>
          <div className="item">
            <FullscreenIcon className="icon" />
          </div>
          <div className="item">
            <CircleNotificationsIcon className="icon" />
            <div className="counter">1</div>

          </div>
          <div className="item">
            <ChatBubbleIcon className="icon" />
            <div className="counter">2</div>

          </div>
          <div className="item">
            <ListIcon className="icon" />
          </div>
          <div className="item">
            <img src="data:image/png;base64,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"
            alt=""
            className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
