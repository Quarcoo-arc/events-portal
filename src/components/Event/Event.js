import React from "react";
import { MoreVert } from "@mui/icons-material";
import "./Event.css";

const Event = ({ event }) => {
  return (
    <div id="event">
      <a href="/#">
        <div className="card">
          <img src={event.image} alt={event.location} />
          <div className="optionsWrapper">
            <MoreVert className="optionsIcon" />
          </div>
          <div className="eventDetails">
            <div className="eventInfo">
              <p className="location">{event.location}</p>
              <p className="date">{event.date}</p>
            </div>
            <div className="type">{event.type}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Event;
