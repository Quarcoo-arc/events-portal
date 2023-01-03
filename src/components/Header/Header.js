import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { ReactComponent as DashboardIcon } from "../../assets/svg/DashboardIcon.svg";
import "./Header.css";

const Header = ({ username }) => {
  return (
    <div id="header">
      <div className="profile">
        <AccountCircleRoundedIcon sx={{ fontSize: 50 }} />
        <div className="welcome">
          <p>Hello {username},</p>
          <p>Welcome back!</p>
        </div>
      </div>
      <DashboardIcon />
    </div>
  );
};

export default Header;
