import {
  Box,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

interface Props {
  imageUrl: string;
  heading: string;
  excerpt: string;
}

const ServiceCard = ({ service }: { service: Props }) => {
  const { imageUrl, heading, excerpt } = service;
  return (
    <Stack gap={3} boxShadow="lg" borderBottomRadius="lg">
      <Box
        h={{ base: "18rem", md: "25rem" }}
        overflow="hidden"
        borderTopRadius="xl"
        _hover={{
          "& img": {
            transform: "scale(1.1)",
            transition: "transform 0.5s ease-in-out",
          },
        }}
      >
        <Image
          src={imageUrl}
          alt={heading + " " + excerpt}
          width={500}
          height={500}
          style={{
            transition: "transform 0.5s ease-in-out",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Stack px={{ base: ".5rem", sm: ".8rem" }} py=".6rem" gap={3}>
        <HStack
          divider={<StackDivider borderColor="gray.400" />}
          fontSize={{ base: "md", sm: "lg" }}
        >
          {/* <Text>By: {by}</Text> <Text>Sep 27,2022</Text> */}
          <Text textAlign="center" color="secondary.default">
            #Beneficiaries, Services
          </Text>
        </HStack>
        <Heading
          as="h4"
          fontSize={{ base: "xl", sm: "2xl" }}
          _hover={{
            color: "primary.default",
            cursor: "pointer",
          }}
          textAlign="center"
        >
          {heading}
        </Heading>
        <Text
          fontSize={{ base: "md", sm: "lg" }}
          fontWeight="500"
          color="GrayText"
        >
          {excerpt}...
        </Text>
      </Stack>
    </Stack>
  );
};

export default ServiceCard;
