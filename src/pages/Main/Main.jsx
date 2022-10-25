import React from "react";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Header } from "../../components/Header/Header";
import { LearnMoreMain } from "../../components/LearnMoreMain/LearnMoreMain";
import { WeOnMap } from "../../components/WeOnMap/WeOnMap";
import { News } from "../../components/News/News";
import { Partners } from "../../components/Partners/Partners";
import { Reviews } from "../../components/Reviews/Reviews";
import { Services } from "../../components/Services/Services";
import "./Main.scss";
import { Footer } from "../../components/Footer/Footer";
import pic from "../../assets/images/modelling.png";

export const Main = () => {
  return (
    <div className="container headerContainer">
      <Header
        title={"Моделирование"}
        text={
          "Являясь всего лишь частью общей картины, независимые государства."
        }
        btn={{ title: "Подробнее" }}
        img={pic}
      />
      <AboutUs />
      <LearnMoreMain />
      <Services />
      <News />
      <Partners />
      <Reviews />
      <WeOnMap />
      <Footer />
    </div>
  );
};
