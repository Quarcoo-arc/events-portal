import React from "react";
import {
  Navbar,
  Header,
  SearchBar,
  EventTypes,
  EventList,
} from "../../components";

const Home = () => {
  return (
    <>
      <Navbar selected="home" />
      <Header username="John" />
      <SearchBar />
      <EventTypes />
      <EventList />
    </>
  );
};

export default Home;
