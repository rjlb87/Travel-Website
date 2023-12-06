import React from "react";
// import Footer from "./Footer";
import Navbar from "../common/NavBar";
import Splash from "../components/Splash";
import GridImages from "../components/GridImages";
import Footer from "./Footer";
import TopTravelPlaces from "../components/TopTravelPlaces";
import About from "../components/About";

// import ContactUs from "../components/ContactUs";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Splash />
      <GridImages />
      <About />
      <TopTravelPlaces />
      <Footer />
    </div>
  );
}
