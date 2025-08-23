import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Pillars from "../components/Pillars";
import About from "../components/About";
import Visuals from "../components/Visuals";
import Story from "../components/Story";
import Community from "../components/Community";
import LastBanner from "../components/LastBanner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Pillars/>
      <About/>
      <Story/>
      <Visuals/>
      <Community/>
      <LastBanner/>
      <Footer/>
    </>
  );
};

export default Home;
