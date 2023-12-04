import React from "react";
import About from "../components/About";
// import Contact from "../components/Contact";
// import Experience from "../components/Experience";
// import Footer from "./Footer";
// import Skills from "../components/Skills";
import Navbar from "../common/NavBar";
import Splash from "../components/Splash";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Splash />
      <About />
      {/* <Experience />
      <Skills />
      <Contact />
      <Footer />  */}
    </div>
  );
}
