import React, { useRef } from "react";
import "./App.css";
import { Benefits } from "./components/Benefits/Benefits";
import { FAQcontainer } from "./components/FAQ/FAQcontainer";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { NavBar } from "./components/NavBar/NavBar";
import { Works } from "./components/Works/Works";

function App() {
  const heroRef = useRef(null);
  const howItWorksRef = useRef(null);
  const benefitsRef = useRef(null);
  const worksRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar
        scrollToHero={() => scrollToRef(heroRef)}
        scrollToHowItWorks={() => scrollToRef(howItWorksRef)}
        scrollToBenefits={() => scrollToRef(benefitsRef)}
        scrollToWorks={() => scrollToRef(worksRef)}
      />
      <Hero heroRef={heroRef} benefitsRef={benefitsRef} />
      <HowItWorks howItWorksRef={howItWorksRef} />
      <Benefits benefitsRef={benefitsRef} />
      <Works worksRef={worksRef} />
      <FAQcontainer />
      <Footer
        scrollToHero={() => scrollToRef(heroRef)}
        scrollToHowItWorks={() => scrollToRef(howItWorksRef)}
        scrollToBenefits={() => scrollToRef(benefitsRef)}
        scrollToWorks={() => scrollToRef(worksRef)}
      />
    </>
  );
}

export default App;
