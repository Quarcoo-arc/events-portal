import "./App.css";
import { Navbar, Header, SearchBar, EventTypes, EventList } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar selected="home" />
      <Header username="John" />
      <SearchBar />
      <EventTypes />
      <EventList />
    </div>
  );
}

export default App;
