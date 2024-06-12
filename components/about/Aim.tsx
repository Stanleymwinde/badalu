"use client";
import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { marginX } from "@/utils/constants";
import { FaArrowsToDot } from "react-icons/fa6";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";

const Aim = () => {
  return (
    <>
      <Stack
        spacing={4}
        direction="column"
        align="center"
        backgroundColor={"#1a3854"}
        maxWidth={"100%"}
      >
        <SimpleGrid columns={2} spacing={14} alignItems="center">
          <Grid pb={"0.7rem"} marginX={marginX} margin="auto">
            <Heading as="h4" fontSize="md" textColor={"brand.yellow"} pb={5}>
              Who we Are
            </Heading>
            <Heading as="h1" size="xl" color="brand.white" pb={5}>
              20 Years of Experience in Home Care & Private Nursing
            </Heading>
            <Text
              color="white"
              fontSize={{ base: "sm", md: "lg" }}
              fontWeight="100"
            >
              Around Africa On Motorcycle is a historic endeavor aiming to raise
              funds for the LOGOS Educational Endowment Fund. This trip will see
              the first ever motorcycle rides around the entire coastline of
              Africa, covering 35,000 km in six months. Comprising of five core
              riders, the crew will be joined by bikers from various African
              countries.
            </Text>

            <Flex justify="space-between" align="center" gap={9} p={[5, 5]}>
              <Stack>
                <Icon as={FaArrowsToDot} boxSize={10} color="red" />
                <Text color={"brand.yellow"}>Our Mission</Text>
                <Text color={"brand.white"} fontSize="md">
                  Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do
                  eiusmod tempor incididunt
                </Text>
              </Stack>
              <Stack>
                <Icon as={FaArrowsToDot} boxSize={10} color="red" />
                <Text color={"brand.yellow"}>Our Mission</Text>
                <Text color={"brand.white"} fontSize="md">
                  Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do
                  eiusmod tempor incididunt
                </Text>
              </Stack>
            </Flex>

            <Button
              color="brand.yellow"
              variant="outline"
              borderRadius="xl"
              size="lg"
              mt={5}
            >
              Get Started
            </Button>
          </Grid>

          <Grid h="75vh" maxWidth={"100vh"} maxHeight="100vh" gap={4}>
            <GridItem objectFit={"cover"} overflow="hidden" position="relative">
              <Image
                src="https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/2021/12/portrait-of-happy-asian-disabled-senior-elderly-male-on-wheelchair-enjoy-stay-home-nursing-care--e1638524820916.jpg"
                width={1920}
                height={1280}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Stack
                p={3}
                backgroundColor={"brand.white"}
                position="absolute"
                width="fit-content"
                borderRadius="xl"
                bottom={20}
                left={20}
              >
                <Text fontSize="sm" color="brand.blue">
                  If You Need Help or Have Some Question, Consultation with Us
                </Text>
                <Flex direction={"row"} align={"center"}>
                  <Box
                    backgroundColor="brand.blue"
                    borderRadius={"50%"}
                    boxSize={10}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Icon
                      as={FaPhone}
                      width="fit-content"
                      height="fit-content"
                      color="white"
                    ></Icon>
                  </Box>

                  <Text color="grey" pl={2}>
                    (+254)70 123 6548
                  </Text>
                </Flex>
              </Stack>
            </GridItem>
          </Grid>
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default Aim;
