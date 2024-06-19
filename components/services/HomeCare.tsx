"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineHomeWork } from "react-icons/md";

const HomeCare = () => {
  return (
    <>
      <Stack mb={"3rem"} mt={"4rem"}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Prime Services</Heading>
          <Text color="greytext">
            We have been working with clients around the world
          </Text>
        </Stack>
        <Card maxW="md" paddingBottom="9rem">
          <CardBody>
            <Stack
              borderRadius="lg"
              position="relative"
              overflow="hidden"
              height="40vh"
            >
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                objectFit="cover"
                height="100%"
                width="100%"
              />
            </Stack>

            <Stack
              mt="6"
              spacing="3"
              borderRadius="lg"
              color="brand.white"
              position="absolute"
              backgroundColor="whitesmoke"
              bottom="30%"
              right="10%"
              left="15%"
              transform={["translate(-3%, 65%)"]}
              padding="1rem"
              zIndex={1}
              gap="5rem"
              sx={{
                "::before": {
                  content: '""',
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "red",
                  transition: "top 0.3s ease-in-out 0.3s",
                },
                ":hover::before": {
                  top: 0,
                },
              }}
            >
              <Stack
                backgroundColor="whitesmoke"
                position="absolute"
                top="-2"
                right="50%"
                transform="translate(50%, -50%)"
                objectFit={"cover"}
                borderRadius="full"
                boxSize="5rem"
                align="center"
                marginBottom={"2rem"}
                justify="center"
              >
                <Icon
                  as={MdOutlineHomeWork}
                  color="brand.blue"
                  boxSize="3.5rem"
                ></Icon>
              </Stack>
              <Stack justify="center" align="center" pt={5}>
                <Heading as="h5" color="brand.blue" size="md">
                  Home Care
                </Heading>
                <Text align="center" color="brand.blue">
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </>
  );
};

export default HomeCare;
