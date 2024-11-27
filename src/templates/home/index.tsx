"use client";

import { type FC } from "react";
import Header from "./header";
import Services from "./services";
import AboutUs from "./about-us";
import WhyChooseUs from "./why-choose-us";
import Contact from "@/shared/contact";
import Content from "./content";
import SayAboutUs from "./say-about-us";

export const HomeTemplate: FC = () => {
  return (
    <>
      <Header />
      <WhyChooseUs />
      <Services />
      <Content />
      <SayAboutUs />
      <AboutUs />
      <Contact />
    </>
  );
};
