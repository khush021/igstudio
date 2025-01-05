import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import WhyChooseUs from "./components/WhyChooseUs";
import AreaOfPractice from './components/AreaOfPractice';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar isSticky={false} />
      <Hero/>
      <Introduction/>
      <WhyChooseUs/>
      <AreaOfPractice/>
    </div>
  );
}

export default App;
