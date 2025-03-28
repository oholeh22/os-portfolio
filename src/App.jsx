import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import CosmosBackground from "./components/CosmosBackground/CosmosBackground";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SoftSkills from "./components/SoftSkills/SoftSkills";


function App() {
  return (
    <>
    <CosmosBackground />
    <Header />
    <HeroSection />
    <AboutMe />
    <SoftSkills />
    </>
  )
}

export default App;