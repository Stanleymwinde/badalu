"use client";
import { Brands, CTA, HomeAbout, OurCeo } from "@/components/home";
import HeroSection from "@/components/home/hero";
import HomeBlogs from "@/components/home/home-blogs";
import HomeServices from "@/components/home/home-services";
import Testimonials from "@/components/home/testimonials";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box as="main" overflow={"hidden"}>
        <HeroSection />
        <HomeAbout />
        <HomeServices />
        <Brands />
        <OurCeo />
        <Testimonials />
        <CTA />
        <HomeBlogs />
      </Box>
    </>
  );
}
