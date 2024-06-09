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

const Aim = () => {
  return (
    <>
      <Stack
        spacing={4}
        direction="column"
        align="center"
        backgroundColor={"#1a3854"}
        p={5}
      >
        <SimpleGrid
          columns={2}
          spacing={14}
          alignItems="center"
          marginX={marginX}
        >
          <Grid pb={"0.7rem"}>
            <Heading as="h4" fontSize="md" textColor={"brand.yellow"}>
              Who we Are
            </Heading>
            <Heading as="h1" size="xl" color="brand.white">
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

            <Flex justify="space-between" align="center">
              <Stack align="center">
                <Icon as={FaArrowsToDot} boxSize={10} color="red" />
                <Text color={"brand.yellow"}>Our Mission</Text>
                <Text color={"brand.white"}>Badalu Home Care</Text>
              </Stack>
              <Box>
                <FaArrowsToDot
                  style={{
                    fontSize: "2rem",
                    color: "red",
                  }}
                />
                <Text color={"brand.yellow"}>Our Mission</Text>
                <Text color={"brand.white"}>Badalu Home Care</Text>
              </Box>
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

          <Grid
            h="65vh"
            gridTemplateRows="repeat(2, 1fr)"
            gridTemplateColumns="auto 35%"
            gap={4}
          >
            <GridItem
              rowSpan={2}
              objectFit={"cover"}
              borderRadius={"xl"}
              overflow="hidden"
            >
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
            </GridItem>

            <GridItem
              bgImage={
                "https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/elementor/thumbs/female-nurse-posing-in-clinic-pgx1ontlkk2n61u1uivv20t6bn9t8z805xxpccd1qa.jpg"
              }
              borderRadius={"xl"}
            />
            <GridItem
              bgImage={
                "https://templatekit.jegtheme.com/nursera/wp-content/uploads/sites/216/elementor/thumbs/female-nurse-talking-with-an-old-woman-e1638524560913-pgyr3cgr5ac0qeox03s9a5wi7f38hzhirtci86k3r6.jpg"
              }
              borderRadius={"xl"}
            />
          </Grid>
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default Aim;
