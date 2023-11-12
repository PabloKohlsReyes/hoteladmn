import React from "./widget.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BalanceIcon from "@mui/icons-material/Balance";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonIcon className="icon" style={{ color: "crimson", backgroundColor:"rgba(255,0,0,0.2)" 
      }} />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        inMoney: false,
        link: "View all ORDERS",
        icon: <ShoppingCartIcon className="icon" style={{ color: "goldenrod", backgroundColor:"rgba(218,165,32,0.2)" 
      }}  />,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        inMoney: false,
        link: "View net earnings",
        icon: <MonetizationOnIcon className="icon" style={{ color: "green", backgroundColor:"rgba(0,128,0,0.2)" 
      }}  />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        inMoney: false,
        link: "See DEATILS",
        icon: <BalanceIcon className="icon" style={{ color: "purple", backgroundColor:"rgba(128,0,128,0.2)" 
      }} />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positibe">
          <ArrowUpwardIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
