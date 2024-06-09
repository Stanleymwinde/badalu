import React from "react";
import { About, AboutServices, Aim } from "@/components/about";
import { CTA } from "@/components/home";
import HeroSection from "@/components/common/common-hero";

const AboutUS = () => {
  return (
    <>
      <HeroSection
        mainText="About"
        subText="US"
        imageUrl="https://randomfox.ca/images/45.jpg"
        bgPos="center"
        customOpacity={0.7}
      />
      <About />
      <Aim />
      <AboutServices />
      <CTA />
    </>
  );
};

export default AboutUS;

1 / 2;
