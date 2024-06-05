import { CalendarIcon, UserIcon } from "@/utils/icons";
import {
  Box,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <Stack borderRadius="xl" overflow="hidden" boxShadow="md">
      <Box maxH="20rem">
        <Image
          src="https://randomfox.ca/images/22.jpg"
          width={400}
          height={200}
          alt="blog-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Stack p=".5rem .7rem">
        <Text fontSize="lg" fontWeight={600} color="secondary.default">
          #Women
        </Text>
        <Heading
          fontSize="xl"
          _hover={{
            color: "primary.default",
            cursor: "pointer",
          }}
        >
          Teresa Njoroge meets up with civil rights advocate Susan Burton
        </Heading>
        <Text color="brand.blue">
          While in New York earlier this year, Clean Start Founder and CEO
          Teresa Njoroge met with Clean Start friend and partner Susan Burton.
          Ms. Burton is the founder of...
        </Text>
        <StackDivider h=".04rem" bg="gray" />
        <Flex justify="space-between">
          <Flex gap={2} align="center">
            <Stack bg="secondary.100" p=".4rem" borderRadius="full">
              <CalendarIcon boxSize={5} />
            </Stack>

            <Stack gap={1}>
              <Text fontWeight="600" color="brand.blue" fontSize="lg">
                Date:
              </Text>
              <Text color="GrayText">20 Dec, 2021</Text>
            </Stack>
          </Flex>
          <Flex gap={2} align="center">
            <Stack bg="secondary.100" p=".4rem" borderRadius="full">
              <UserIcon boxSize={5} />
            </Stack>

            <Stack gap={1}>
              <Text fontWeight="600" color="brand.blue" fontSize="lg">
                By:
              </Text>
              <Text color="GrayText">Admin</Text>
            </Stack>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default BlogCard;
