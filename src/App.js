import "./App.css";
import { Navbar, Header, SearchBar, EventTypes, Event } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar selected="home" />
      <Header username="John" />
      <SearchBar />
      <EventTypes />
      <Event />
    </div>
  );
}

export default App;
