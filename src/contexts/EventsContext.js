import React, { createContext, useState } from "react";
import events from "../data";

const EventsContext = createContext(events);

export const EventsContextProvider = ({ children }) => {
  const [data, setData] = useState(events);

  const [searchTerm, setSearchTerm] = useState("");

  const filterEvents = (eventTypes) => {
    if (eventTypes) {
      setData(
        events.filter(
          (item) =>
            eventTypes[item.type] &&
            (item.description.includes(searchTerm) ||
              item.location.includes(searchTerm))
        )
      );
    } else {
      setData((prev) =>
        prev.filter(
          (item) =>
            item.description.includes(searchTerm) ||
            item.location.includes(searchTerm)
        )
      );
    }
  };
  return (
    <EventsContext.Provider value={{ data, filterEvents, setSearchTerm }}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContext;
