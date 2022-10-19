import React from "react";
import { AboutUs } from "../AboutUs/AboutUs";
import { Header } from '../Header/Header';
import { LearnMore } from "../LearnMore/LearnMore";
import { News } from "../News/News";
import { Services } from "../Services/Services";
import './Main.scss';

export const Main = () => {
  return (
    <div className="container headerContainer">
      <Header />
      <AboutUs />
      <LearnMore />
      <Services />
      <News />
    </div>
  )
};
