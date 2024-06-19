import HeroSection from "@/components/common/common-hero";
import { CTA } from "@/components/home";
import { HomeCare } from "@/components/services";
import { marginX } from "@/utils/constants";
import { Stack } from "@chakra-ui/react";

import React from "react";

const Services = () => {
  return (
    <>
      <HeroSection
        mainText="Our"
        subText="Services"
        imageUrl="https://randomfox.ca/images/49.jpg"
        bgPos="center"
        customOpacity={0.7}
      />
      <Stack marginX={marginX}>
        <HomeCare />
      </Stack>
      <CTA />
    </>
  );
};

export default Services;
