import React, { useState } from "react";
import { ReactComponent as SeminarIcon } from "../../assets/svg/SeminarIcon.svg";
import { ReactComponent as OutreachIcon } from "../../assets/svg/OutreachIcon.svg";
import { ReactComponent as VirtualIcon } from "../../assets/svg/VirtualIcon.svg";
import { CalendarMonthOutlined } from "@mui/icons-material";
import "./EventTypes.css";

const EventTypes = () => {
  const [selected, setSelected] = useState({});

  const selectEventType = (event) => {
    let clickedItem =
      event.target.closest(".eventType").lastElementChild.textContent;

    if (selected[clickedItem]) {
      let newSelection = { ...selected };
      delete newSelection[clickedItem];
      setSelected(newSelection);
    } else {
      setSelected((prev) => ({ ...prev, [clickedItem]: true }));
    }
    console.log(selected, clickedItem);
  };

  return (
    <div id="eventTypes">
      <h3>Popular Events</h3>
      <div className="eventsTypeList">
        <div
          className={`eventType ${selected["Upcoming"] ? "selectedType" : ""}`}
          onClick={selectEventType}
        >
          <div className="circle green">
            <CalendarMonthOutlined className="eventTypeIcon" />
          </div>
          <p>Upcoming</p>
        </div>
        <div
          className={`eventType ${selected["Seminar"] ? "selectedType" : ""}`}
          onClick={selectEventType}
        >
          <div className="circle orange">
            <SeminarIcon className="eventTypeIcon" />
          </div>
          <p>Seminar</p>
        </div>
        <div
          className={`eventType ${selected["Outreach"] ? "selectedType" : ""}`}
          onClick={selectEventType}
        >
          <div className="circle red">
            <OutreachIcon className="eventTypeIcon" />
          </div>
          <p>Outreach</p>
        </div>
        <div
          className={`eventType ${selected["Virtual"] ? "selectedType" : ""}`}
          onClick={selectEventType}
        >
          <div className="circle blue">
            <VirtualIcon className="eventTypeIcon" />
          </div>
          <p>Virtual</p>
        </div>
      </div>
    </div>
  );
};

export default EventTypes;
