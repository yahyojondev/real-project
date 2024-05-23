import React from "react";
import Hero from "../../components/hero/Hero";
import ClassRoom from "../../components/classRoom/ClassRoom";
import Fanlar from "../../components/fanlar/Fanlar";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <ClassRoom />
      <Fanlar />
    </div>
  );
};

export default Home;
