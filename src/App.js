import "./App.css";
import { Navbar, Header, SearchBar, EventTypes } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar selected="home" />
      <Header username="John" />
      <SearchBar />
      <EventTypes />
    </div>
  );
}

export default App;
