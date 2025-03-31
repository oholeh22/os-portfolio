import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import BackToTop from "./components/BackToTop/BackToTop";
import Contacts from "./components/Contacts/Contacts";
import CosmosBackground from "./components/CosmosBackground/CosmosBackground";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MyProjects from "./components/Projects/Projects";
import SoftSkills from "./components/SoftSkills/SoftSkills";
import TechSkills from "./components/TechSkills/TechSkills";

function App() {
  return (
    <>
      <CosmosBackground />
      <Header />
      <HeroSection />
      <AboutMe />
      <SoftSkills />
      <TechSkills />
      <MyProjects />
      <Contacts />
      <BackToTop />
    </>
  );
}

export default App;
