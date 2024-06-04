import { Brands, CTA, HomeAbout, OurCeo } from "@/components/home";
import HeroSection from "@/components/home/hero";
import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as="main" overflow={"hidden"}>
      <Navbar />
      <HeroSection />
      <HomeAbout />
      <Brands />
      <OurCeo />
      <CTA />
    </Box>
  );
}
