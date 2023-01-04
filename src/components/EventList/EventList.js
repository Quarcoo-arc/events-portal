import React, { useState } from "react";
import events from "../../data";
import Event from "../Event/Event";
import "./EventList.css";

const EventList = () => {
  const [data] = useState(events);
  return (
    <div id="eventlist">
      {data.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
