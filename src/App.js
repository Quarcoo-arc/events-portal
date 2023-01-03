import "./App.css";
import { Navbar, Header, SearchBar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar selected="home" />
      <Header username="John" />
      <SearchBar />
    </div>
  );
}

export default App;
