import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Cheading from "../common/c-heading";
import { marginX } from "@/utils/constants";
import { FaArrowsToDot } from "react-icons/fa6";

const AboutServices = () => {
  return (
    <Stack marginX={marginX} mb={"3rem"} mt={"4rem"}>
      <Cheading h="Easy Steps To get Our Services" />
      <SimpleGrid spacing={4} columns={{ base: 1, md: 3 }}>
        <Card>
          <CardHeader>
            <FaArrowsToDot
              style={{
                margin: "0 auto",
              }}
            />
          </CardHeader>
          <CardBody>
            <Heading size="md"> Customer dashboard</Heading>
            <Text color={"brand.blue"}>
              Lorem ipsum dolor sit amet consecte adipiscin elit sed eiusmod
              tempor incididunt depisum
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text color={"brand.blue"}>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text color={"brand.blue"}>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Stack>
  );
};

export default AboutServices;
