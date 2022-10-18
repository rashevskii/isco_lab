import React from "react";
import { AboutUs } from "../AboutUs/AboutUs";
import { Header } from '../Header/Header';
import { LearnMore } from "../LearnMore/LearnMore";
import './Main.scss';

export const Main = () => {
  return (
    <div className="container headerContainer">
      <Header />
      <AboutUs />
      <LearnMore />
    </div>
  )
};
