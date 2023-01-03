import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/svg/SearchIcon.svg";
import {
  TuneOutlined,
  CalendarMonthOutlined,
  PinDropOutlined,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import "./SearchBar.css";

const SearchBar = () => {
  const search = (e) => {
    e.preventDefault();
  };

  const CustomToolTip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));

  return (
    <form id="searchBar" onSubmit={search}>
      <input
        type="text"
        name="searchTerm"
        id="searchTerm"
        placeholder="Search event..."
      />
      <label htmlFor="searchTerm" className="searchIcon">
        <SearchIcon />
      </label>
      <CustomToolTip
        title={
          <>
            <button className="tooltipBtn">
              <CalendarMonthOutlined /> Date
            </button>
            <button className="tooltipBtn">
              <PinDropOutlined /> Location
            </button>
          </>
        }
      >
        <TuneOutlined className="filterIcon" />
      </CustomToolTip>
    </form>
  );
};

export default SearchBar;
