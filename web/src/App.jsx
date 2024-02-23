import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
