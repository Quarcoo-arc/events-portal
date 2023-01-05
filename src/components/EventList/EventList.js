import React, { useContext } from "react";
import EventsContext from "../../contexts/EventsContext";
import Event from "../Event/Event";
import "./EventList.css";

const EventList = () => {
  const { data } = useContext(EventsContext);
  return (
    <div id="eventlist">
      {data.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
