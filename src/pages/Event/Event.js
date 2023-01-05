import React, { useState } from "react";
import events from "../../data";
import { Link, redirect, useParams } from "react-router-dom";
import { Navbar } from "../../components";
import {
  ArrowBack,
  CalendarMonth,
  Download,
  PinDropOutlined,
  WatchLaterOutlined,
} from "@mui/icons-material";
import "./Event.css";

const Event = () => {
  const { eventId } = useParams();
  const [seeMore, setSeeMore] = useState(false);
  if (!eventId || !(eventId > 0 && eventId <= events.length)) {
    return redirect("/");
  }
  const event = events[eventId - 1];
  const {
    type,
    location,
    image,
    date,
    description,
    startTime,
    duration,
    hashTags,
  } = event;
  return (
    <div id="eventPage">
      <Link to="/">
        <div className="backIconWrapper">
          <ArrowBack />
        </div>
      </Link>
      <div className="eventImgWrapper">
        <img className="eventImage" src={image} alt={location} />
      </div>
      <div className="textWrapper">
        <h3>{type}</h3>
        <p>
          {description.length <= 256 ? (
            description
          ) : seeMore ? (
            <>
              {description}
              <span onClick={() => setSeeMore(false)}>See less</span>
            </>
          ) : (
            <>
              {description.slice(0, 256)}...
              <span onClick={() => setSeeMore(true)}>See more</span>
            </>
          )}
        </p>
        <p className="timeInfo">Times are displayed in your local timezone</p>
        <div className="eventDetail">
          <CalendarMonth />
          <div>
            <p>{date}</p>
            <p className="startTime">Starts at: {startTime}</p>
          </div>
        </div>
        <div className="eventDetail">
          <PinDropOutlined /> <p>{location}</p>
        </div>
        <div className="eventDetail">
          <WatchLaterOutlined /> <p>Duration: {duration} Minutes</p>
        </div>
        <div className="eventDetail">
          <Download /> <p>Resouce</p>
        </div>
        <div className="hashTags">
          {hashTags.map((tag) => (
            <div key={tag} className="hashTag">
              #{tag}
            </div>
          ))}
        </div>
        <div className="buttons">
          <button>Support</button>
          <button>Join</button>
        </div>
      </div>
      <Navbar selected="home" />
    </div>
  );
};

export default Event;
