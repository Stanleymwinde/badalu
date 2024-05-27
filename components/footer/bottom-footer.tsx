import { marginX } from "@/utils/constants";
import { Box, Flex } from "@chakra-ui/react";

const BottomFooter = () => {
  return (
    <Flex
      justify="center"
      px={marginX}
      py="1rem"
      bg="#423f3f"
      color="brand.white"
      fontSize={{ base: "sm", sm: "md" }}
    >
      Copyright © {new Date().getFullYear()}{" "}
      <Box as="span" color="brand.yellow" mx=".2rem" fontWeight="bold">
        Badalu.
      </Box>
      All rights reserved.
    </Flex>
  );
};

export default BottomFooter;
