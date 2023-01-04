import React, { useState } from "react";
import events from "../../data";
import Event from "../Event/Event";
import "./EventList.css";

const EventList = () => {
  const [data, setData] = useState(events);
  return (
    <div id="eventlist">
      {data.map((event) => (
        <Event event={event} />
      ))}
    </div>
  );
};

export default EventList;
