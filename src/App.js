import React from "react";
import {
  Nav,
  HeroBanner,
  About,
  Services,
  Portfolio,
  Footer,
  Skills,
  Contact,
} from "./components";

function App() {
  return (
    <div className="w-full min-h-screen bg-primary">
      <Nav />
      <HeroBanner />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
