import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import Contact from "./Components/contato/Contact";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Projects from "./Components/projetos/Projects";

import SobreMim from "./Components/sobreMim/SobreMim";

function App() {
  return (
    <>
      <Header />
      <Main />
      <SobreMim />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
