import React from "react";
import {
  BookmarkBorderOutlined,
  CalendarMonth,
  GroupsOutlined,
  MoreVert,
  ShareOutlined,
} from "@mui/icons-material";
import CustomToolTip from "../CustomToolTip/CustomToolTip";
import "./Event.css";

const Event = ({ event }) => {
  return (
    <div id="event">
      <a href="/#">
        <div className="card">
          <img src={event.image} alt={event.location} />
          <CustomToolTip
            title={
              <>
                <button className="tooltipBtn">
                  <ShareOutlined />
                  <p>Invite</p>
                </button>
                <button className="tooltipBtn">
                  <BookmarkBorderOutlined />
                  <p>Save</p>
                </button>
                <button className="tooltipBtn">
                  <CalendarMonth />
                  <p>Add to Calendar</p>
                </button>
                <button className="tooltipBtn">
                  <GroupsOutlined />
                  <p>Attending ({event.attending})</p>
                </button>
              </>
            }
          >
            <div className="optionsWrapper">
              <MoreVert className="optionsIcon" />
            </div>
          </CustomToolTip>
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
