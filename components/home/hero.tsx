import { Box, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import { marginX } from "@/utils/constants";

const HeroSection = () => {
  return (
    <Box
      as="section"
      pos="relative"
      bgImage="https://res.cloudinary.com/ddjlqr6qt/image/upload/v1716279275/WhatsApp-Image-2023-12-08-at-07.35.21-1_jvy65r.jpg"
      h={{ base: "fit-content", sm: "95vh", md: "100vh" }}
      w="100vw"
      bgPos={{ base: "20% 10%", sm: "right" }}
      bgSize="cover"
      backgroundRepeat="no-repeat"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.75)",
        zIndex: 999,
      }}
    >
      <Stack h="100%">
        <Stack
          flex={1}
          zIndex={999}
          overflow={"hidden"}
          mx={marginX}
          py={{ base: "2.5rem", sm: "0" }}
        >
          <Grid templateRows={{ base: "1fr", sm: "repeat(6,1fr)" }} h="100%">
            <GridItem gridRowStart={{ base: "auto", sm: 3 }}>
              <Stack gap={{ base: 5, sm: 6, md: 8 }} maxW="800px">
                <Heading
                  as="h1"
                  color="brand.white"
                  fontSize={{
                    base: "35px",
                    sm: "50px",
                    lg: "60px",
                    xl: "80px",
                  }}
                  lineHeight="1.2em"
                  fontWeight={900}
                >
                  Riding to{" "}
                  <Box as="span" color="brand.yellow">
                    “Educate for Life and Eternity”
                  </Box>
                </Heading>
                <Text maxW="90%" fontSize="lg">
                  For the first time in history African Motorcycle Riders will
                  make a historic trip around the Coastline of Africa{" "}
                  <Box as="span" color="brand.yellow">
                    (40,000Kms)
                  </Box>
                  , in 6 Months from{" "}
                  <Box as="span" color="brand.yellow">
                    December 2024 - May 2025
                  </Box>
                  .
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
        <Grid></Grid>
      </Stack>
    </Box>
  );
};

export default HeroSection;
