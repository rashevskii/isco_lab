import React from "react";
import { AboutUs } from "../AboutUs/AboutUs";
import { Header } from '../Header/Header';
import { LearnMore } from "../LearnMore/LearnMore";
import { WeOnMap } from "../WeOnMap/WeOnMap";
import { News } from "../News/News";
import { Partners } from "../Partners/Partners";
import { Reviews } from "../Reviews/Reviews";
import { Services } from "../Services/Services";
import './Main.scss';
import { Footer } from "../Footer/Footer";

export const Main = () => {
  return (
    <div className="container headerContainer">
      <Header />
      {/* <AboutUs />
      <LearnMore />
      <Services />
      <News />
      <Partners />
      <Reviews />
      <WeOnMap />
      <Footer /> */}
    </div>
  )
};
