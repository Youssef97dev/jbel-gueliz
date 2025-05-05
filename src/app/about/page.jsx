import React from "react";
import Title from "./components/Title";
import Intro from "./components/Intro";
import Slides from "./components/Slides";
import Features from "./components/Features";
import Content from "./components/Content";

const page = () => {
  return (
    <div className="">
      <Title />
      <Intro />
      <Slides />
      <Features />
      <Content />
    </div>
  );
};

export default page;
