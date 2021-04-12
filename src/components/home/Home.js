import React from "react";
import Dividers from "./Dividers";
import Hero from "./Hero";
import Partners from "./Partners";
import Perfect from "./Perfect";
import Services from "./Services";
import HomeHeader from "./HomeHeader";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Hero />
      <Services />
      <Dividers />
      <Partners />
      <Dividers />
      <Perfect />
    </div>
  );
};

export default Home;
