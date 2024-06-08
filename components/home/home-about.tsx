import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const HomeAbout = () => {
  return (
    <Box bgImage="/home/wave.svg" bgRepeat="no-repeat" bgSize="cover">
      <Stack
        py={{ base: "8", sm: "16" }}
        gap={10}
        mx={{ base: "2%", sm: "5%", md: "10%" }}
      >
        <Stack gap={3}>
          <Box
            as="h2"
            fontWeight="600"
            fontSize="16px"
            textAlign="center"
            color="brand.red"
          >
            CAUSE
          </Box>
          <Heading
            as="h1"
            textAlign="center"
            fontSize={{ base: "30px", md: "50px" }}
            color="brand.black"
          >
            Badalu Education
          </Heading>{" "}
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Image
              borderRadius="lg"
              border=".5rem solid var(--chakra-colors-brand-white)"
              boxShadow=".2rem .2rem 2rem var(--chakra-colors-brand-black)"
              src="https://randomfox.ca/images/35.jpg"
              alt="badalu cover"
              objectFit="cover"
              height={{ base: "300px", md: "500px" }}
              w="100%"
              transition="all 0.3s ease-in-out"
              cursor="pointer"
              _hover={{
                transform: "scale(1.05) rotate(-2deg)",
              }}
            />
          </Box>
          <Stack justify="center">
            <Stack gap={3}>
              <Text color="brand.black" fontSize={{ base: "md", sm: "lg" }}>
                <Box as="span" color="brand.red" fontWeight="semibold">
                  The LOGOS Educational Endowment Fund
                </Box>{" "}
                is designed to{" "}
                <Box as="span" fontWeight="semibold" color="brand.red">
                  “Educate for life and Eternity”
                </Box>{" "}
                . It hopes to break the vicious cycle of poverty through
                Transformational Education.
                <br /> <br /> The program is designed to support students in
                their pursuit of academic excellence and leadership development.
                The LOGOS Educational Endowment Fund is a scholarship program
                that provides financial assistance to students in need.
                <br /> <br /> The program is designed to support students in
                their pursuit of academic excellence and leadership development.
              </Text>
              <Text
                color="brand.black"
                fontSize={{ base: "lg", sm: "xl" }}
                fontFamily='"Open Sans", san-serif'
                fontWeight="semibold"
              >
                &quot;The trip aims to raise funds for the establishment of the
                LOGOS Educational Endowment Fund to support{" "}
                <Box as="span" color="brand.red" fontWeight="semibold">
                  500 Students
                </Box>{" "}
                who are currently on scholarship with the LOGOS Scholarship Fund
                in different High Schools in Kenya &quot;.
              </Text>{" "}
              <Button
                mt=".5rem"
                p="25px 20px"
                bg="brand.red"
                borderRadius="25px"
                color="brand.white"
                transition="all 0.3s ease-in-out"
                fontSize="xl"
                _hover={{
                  bg: "brand.buttonHover",
                }}
                w={{ base: "100%", sm: "fit-content" }}
              >
                <Link href="/cause">Read more</Link>
              </Button>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default HomeAbout;
