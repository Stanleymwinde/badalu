import { brandsData } from "@/utils/constants";
import { Box, Image, Stack, Heading } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <Box my={10} mx={{ base: "2%", sm: "5%", md: "10%" }}>
      <Heading
        as="h1"
        textAlign="center"
        fontSize={{ base: "30px", sm: "40px", md: "50px" }}
        color="brand.black"
        paddingBottom={"20px"}
      >
        Our Partners
      </Heading>
      <Marquee
        className="organizations-marquee"
        autoFill={true}
        pauseOnHover={true}
      >
        {brandsData.map((b) => (
          <Stack
            mx={6}
            w={{ base: "50vw", sm: "40vw", md: "30vw" }}
            key={b.id}
            gap={4}
            align="center"
          >
            <Stack minH="70px" align="center">
              <Image
                boxSize={"70px"}
                w="100%"
                objectFit="cover"
                src={b.image}
                alt={b.label}
              />
            </Stack>
          </Stack>
        ))}
      </Marquee>
    </Box>
  );
};

export default Brands;
