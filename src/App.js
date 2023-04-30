import React from "react";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Skills from "./components/Skills";
import About from "./components/About/About";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Home />
        <About />
        <Skills/>
        <Projects />
        {/* <Resume/> */}
        <Contact />
      </div>
      <p className="text-center text-gray-500 text-base">
        © 2023. All rights reserved by Nagendra Choudhary
      </p>
    </div>
  );
}

export default App;
