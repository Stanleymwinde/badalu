import { Heading, Stack, Text } from "@chakra-ui/react";
import DonateButton from "../common/cta-btn";

const CTA = () => {
  return (
    <Stack
      bgImage="/global/cta.jpeg"
      h="75vh"
      bgSize="cover"
      pt="3rem"
      bgPos={{ base: "40% 50%", sm: "50% 30%" }}
      justify="center"
      align="center"
      pos="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "rgba(0,0,0,0.8)",
        zIndex: 1,
      }}
    >
      <Stack
        color="brand.white"
        maxW="2xl"
        align="center"
        textAlign="center"
        zIndex={2}
        gap="1.3rem"
      >
        <Text fontSize="lg" fontWeight="semibold">
          We are here to Help Women
        </Text>
        <Heading fontSize={{ base: "2rem", md: "3rem" }}>
          Help us have an even bigger impact on the women, girls and children.
        </Heading>
        <DonateButton colorScheme="secondary" fontSize="xl" />
      </Stack>
    </Stack>
  );
};

export default CTA;
