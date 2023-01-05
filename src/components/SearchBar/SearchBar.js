import React, { useContext } from "react";
import { ReactComponent as SearchIcon } from "../../assets/svg/SearchIcon.svg";
import {
  TuneOutlined,
  CalendarMonthOutlined,
  PinDropOutlined,
} from "@mui/icons-material";
import CustomToolTip from "../CustomToolTip/CustomToolTip";
import "./SearchBar.css";
import EventsContext from "../../contexts/EventsContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, filterEvents } = useContext(EventsContext);

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
    filterEvents();
  };

  return (
    <form id="searchBar" onSubmit={filterEvents}>
      <input
        type="text"
        name="searchTerm"
        id="searchTerm"
        value={searchTerm}
        onChange={onChangeHandler}
        placeholder="Search event..."
      />
      <label htmlFor="searchTerm" className="searchIcon">
        <SearchIcon />
      </label>
      <CustomToolTip
        title={
          <>
            <button className="tooltipBtn">
              <CalendarMonthOutlined />
              <p>Date</p>
            </button>
            <button className="tooltipBtn">
              <PinDropOutlined />
              <p>Location</p>
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
