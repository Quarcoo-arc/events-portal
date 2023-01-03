import "./App.css";
import { Navbar, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar selected="home" />
      <Header username="John" />
    </div>
  );
}

export default App;
