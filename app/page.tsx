import { Brands, CTA, HomeAbout, OurCeo } from "@/components/home";
import HeroSection from "@/components/home/hero";
import HomeBlogs from "@/components/home/home-blogs";
import HomeServices from "@/components/home/home-services";
import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as="main" overflow={"hidden"}>
      <Navbar />
      <HeroSection />
      <HomeAbout />
      <HomeServices />
      <Brands />
      <OurCeo />
      <CTA />
      <HomeBlogs />
    </Box>
  );
}
