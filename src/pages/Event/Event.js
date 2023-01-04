import React from "react";
import events from "../../data";
import { redirect, useParams } from "react-router-dom";

const Event = () => {
  const { eventId } = useParams();
  if (!eventId || !(eventId > 0 && eventId <= events.length)) {
    return redirect("/");
  }
  return <div>Event</div>;
};

export default Event;
