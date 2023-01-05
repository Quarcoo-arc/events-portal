import React from "react";
import {
  Navbar,
  Header,
  SearchBar,
  EventTypes,
  EventList,
} from "../../components";
import { EventsContextProvider } from "../../contexts/EventsContext";

const Home = () => {
  return (
    <EventsContextProvider>
      <Navbar selected="home" />
      <Header username="John" />
      <SearchBar />
      <EventTypes />
      <EventList />
    </EventsContextProvider>
  );
};

export default Home;
