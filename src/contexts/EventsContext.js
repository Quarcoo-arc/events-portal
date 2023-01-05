import React, { createContext, useCallback, useEffect, useState } from "react";
import events from "../data";

const EventsContext = createContext(events);

export const EventsContextProvider = ({ children }) => {
  const [data, setData] = useState(events);

  const [searchTerm, setSearchTerm] = useState("");

  const [eventTypes, setEventTypes] = useState({});

  const filterEvents = useCallback(() => {
    if (!searchTerm && !Object.keys(eventTypes).length) {
      setData(events);
    } else if (Object.keys(eventTypes).length) {
      setData(
        events.filter(
          (item) =>
            eventTypes[item.type] &&
            (item.description.includes(searchTerm) ||
              item.location.includes(searchTerm))
        )
      );
    } else {
      setData(
        events.filter(
          (item) =>
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.location.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, eventTypes]);

  useEffect(() => {
    filterEvents();
  }, [searchTerm, eventTypes, filterEvents]);

  return (
    <EventsContext.Provider
      value={{
        data,
        filterEvents,
        searchTerm,
        setSearchTerm,
        eventTypes,
        setEventTypes,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContext;
