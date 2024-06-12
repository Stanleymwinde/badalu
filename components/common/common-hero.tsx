import { Box, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";

const CommonHero = ({
  mainText,
  subText = "US",
  imageUrl = "https://randomfox.ca/images/45.jpg",
  customOpacity = 0.7,
  bgPos = "center",
}: {
  mainText: string;
  subText?: string;
  imageUrl?: string;
  customOpacity?: number;
  bgPos?: string;
}) => {
  return (
    <Box
      as="section"
      pos="relative"
      bgImage={imageUrl}
      h={{ base: "45vh", sm: "40vh" }}
      bgPos={bgPos}
      bgSize="cover"
      backgroundRepeat="no-repeat"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `rgba(0,0,0,${customOpacity})`,
        zIndex: 999,
      }}
    >
      <Stack h="100%">
        <Stack
          flex={1}
          zIndex={999}
          overflow={"hidden"}
          mx={{ base: "2%", sm: "5%", md: "10%" }}
        >
          <Grid h="100%" gridTemplateRows="repeat(5,1fr)">
            <GridItem
              gridRow={2}
              placeSelf="left"
              display="flex"
              justifyContent="space-between"
            >
              <Heading
                as="h1"
                color="brand.white"
                fontSize={{
                  base: "40px",
                  sm: "50px",
                  lg: "60px",
                  xl: "70px",
                }}
                lineHeight="1.2em"
                fontWeight={900}
              >
                {mainText}{" "}
                <Box as="span" color="brand.yellow">
                  {subText}
                </Box>
              </Heading>
              <Text>Hello / about</Text>
            </GridItem>
          </Grid>
        </Stack>
        <Grid></Grid>
      </Stack>
    </Box>
  );
};

export default CommonHero;
