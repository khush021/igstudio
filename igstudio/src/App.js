import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import WhyChooseUs from "./components/WhyChooseUs";
import AreaOfPractice from './components/AreaOfPractice';
import HappyClients from './components/HappyClients';
import OurTeam from './components/OurTeam';
import FAQ from './components/FAQ';
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
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
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
