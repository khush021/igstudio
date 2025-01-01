import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar isSticky={false} />
      <Hero/>
    </div>
  );
}

export default App;
