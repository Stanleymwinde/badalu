import React from "react";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { marginX } from "@/utils/constants";

const OurCEO = () => {
  return (
    <Box
      bgImage="/wave.svg"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="50% 30%"
    >
      <Box marginX={marginX} py="2rem">
        <Stack
          maxW={{ base: "97vw", sm: "70vw", md: "60vw" }}
          mx="auto"
          align="center"
          mt="1rem"
          gap={4}
          textAlign="center"
        >
          <Box
            overflow="hidden"
            border="7px solid var(--chakra-colors-secondary-400)"
            borderRadius="full"
            boxSize={{ base: "18rem", md: "25rem" }}
            pos="relative"
            _hover={{
              "& img": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Image
              src="/global/cleo.jpeg"
              alt="CEO"
              width={500}
              height={500}
              style={{
                transition: "transform 0.2s ease",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Heading fontSize={{ base: "xl", md: "2xl" }} color="brand.yellow">
            Founder and CEO Teresa Njoroge
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="semibold">
            <Box as="span" color="secondary.300">
              “I am motivated to leave behind a legacy of a bold contributor who
              streamlined social change, breaking the high rates of recidivism
              in Africa and one that contributed to growing Kenya’s restorative
              justice programs and a more equitable, inclusive and just world.”{" "}
            </Box>
            <br /> <br /> After being falsely accused of, maliciously
            prosecuted, and sentenced for a crime she didn’t commit,
            <Box as="span" fontWeight="bold">
              {" "}
              Clean Start Founder and CEO Teresa Njoroge{" "}
            </Box>
            served a one-year sentence at the Langata Women Maximum Security
            Prison, Nairobi, Kenya. She was accompanied by her then
            three-month-old daughter. <br /> <br /> This experience however,
            inspired the
            <Box as="span" fontWeight="bold">
              {" "}
              Inaugural Ford Foundation Global Fellow and TED Women 2017 Speaker{" "}
            </Box>
            , to devote her life to equipping and empowering imprisoned and
            formerly imprisoned women for the precarious journey of
            reintegration back into society.
          </Text>
          <Button colorScheme="secondary">
            The story that changed our lives
          </Button>
        </Stack>
      </Box>{" "}
    </Box>
  );
};

export default OurCEO;
