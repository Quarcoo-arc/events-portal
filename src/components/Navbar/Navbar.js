import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { ReactComponent as ResourcesIcon } from "../../assets/svg/ResourcesIcon.svg";
import "./Navbar.css";

const Navbar = ({ selected }) => {
  return (
    <div id="navbar">
      <a href="/#">
        <HomeOutlinedIcon className={selected === "home" ? "selected" : ""} />
        <p className={selected === "home" ? "selected" : ""}>Home</p>
      </a>
      <a href="/#">
        <HomeRepairServiceOutlinedIcon
          className={selected === "services" ? "selected" : ""}
        />
        <p className={selected === "services" ? "selected" : ""}>Services</p>
      </a>
      <a href="/#">
        <ResourcesIcon
          height={"24px"}
          className={selected === "resources" ? "selected" : "icon"}
        />
        <p className={selected === "resources" ? "selected" : ""}>Resources</p>
      </a>
      <a href="/#">
        <Inventory2OutlinedIcon
          className={selected === "archives" ? "selected" : ""}
        />
        <p className={selected === "archives" ? "selected" : ""}>Archives</p>
      </a>
    </div>
  );
};

export default Navbar;
