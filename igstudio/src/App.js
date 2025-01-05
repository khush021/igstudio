import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import WhyChooseUs from "./components/WhyChooseUs";
import AreaOfPractice from './components/AreaOfPractice';
import HappyClients from './components/HappyClients';
import OurTeam from './components/OurTeam';
import FAQ from './components/FAQ';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar isSticky={false} />
      <Hero />
      <Introduction />
      <WhyChooseUs />
      <AreaOfPractice />
      <HappyClients />
      <OurTeam />
      <FAQ />
    </div>
  );
}

export default App;
