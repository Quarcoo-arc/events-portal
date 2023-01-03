import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/svg/SearchIcon.svg";
import {
  TuneOutlined,
  CalendarMonthOutlined,
  PinDropOutlined,
} from "@mui/icons-material";
import CustomToolTip from "../CustomToolTip/CustomToolTip";
import "./SearchBar.css";

const SearchBar = () => {
  const search = (e) => {
    e.preventDefault();
  };

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
