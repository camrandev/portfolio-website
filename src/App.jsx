import { useState } from "react";
import Nav from "./Nav";
import Introduction from "./Introduction";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

import "./App.css";

function App() {
  //TODO:add max width sizing and adjust everything accordingly to play nice with that.
  return (
    <>
      <Nav />
      <Introduction />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
