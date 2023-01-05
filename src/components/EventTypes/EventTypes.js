import React, { useContext } from "react";
import { ReactComponent as SeminarIcon } from "../../assets/svg/SeminarIcon.svg";
import { ReactComponent as OutreachIcon } from "../../assets/svg/OutreachIcon.svg";
import { ReactComponent as VirtualIcon } from "../../assets/svg/VirtualIcon.svg";
import { CalendarMonthOutlined } from "@mui/icons-material";
import "./EventTypes.css";
import EventsContext from "../../contexts/EventsContext";

const EventTypes = () => {
  const { filterEvents, eventTypes, setEventTypes } = useContext(EventsContext);

  const selectEventType = (event) => {
    let clickedItem =
      event.target.closest(".eventType").lastElementChild.textContent;

    if (eventTypes[clickedItem]) {
      let newSelection = { ...eventTypes };
      delete newSelection[clickedItem];
      setEventTypes(newSelection);
    } else {
      setEventTypes((prev) => ({ ...prev, [clickedItem]: true }));
    }
    filterEvents(eventTypes);
  };

  return (
    <div id="eventTypes">
      <h3>Popular Events</h3>
      <div className="eventsTypeList">
        <div
          className={`eventType ${
            eventTypes["Upcoming"] ? "selectedType" : ""
          }`}
          onClick={selectEventType}
        >
          <div className="circle green">
            <CalendarMonthOutlined className="eventTypeIcon" />
          </div>
          <p>Upcoming</p>
        </div>
        <div
          className={`eventType ${eventTypes["Seminar"] ? "selectedType" : ""}`}
          onClick={selectEventType}
        >
          <div className="circle orange">
            <SeminarIcon className="eventTypeIcon" />
          </div>
          <p>Seminar</p>
        </div>
        <div
          className={`eventType ${
            eventTypes["Outreach"] ? "selectedType" : ""
          }`}
          onClick={selectEventType}
        >
          <div className="circle red">
            <OutreachIcon className="eventTypeIcon" />
          </div>
          <p>Outreach</p>
        </div>
        <div
          className={`eventType ${eventTypes["Virtual"] ? "selectedType" : ""}`}
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
