"use client";
import { socialData, contactInfo } from "@/utils/constants";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";

const TopNav = ({ color }: { color: string }) => {
  return (
    <Flex
      mx={{ base: "2%", sm: "5%", md: "10%" }}
      justify="space-between"
      align="center"
      minH="3rem"
    >
      <Flex gap={3} align="center" display={{ base: "none", md: "flex" }}>
        {contactInfo.map((data) => (
          <Link href={data.link} key={data.id} target="_blank">
            <Flex gap={1} align="center">
              <Icon color="brand.blue" as={data.icon} boxSize={5} />
              <Text color={(color = "brand.grey")}>{data.text}</Text>
            </Flex>
          </Link>
        ))}
      </Flex>
      <Flex
        gap={3}
        align="center"
        justify={{ base: "space-between", md: "normal" }}
      >
        {socialData.map((s) => (
          <Box
            key={s.id}
            cursor="pointer"
            color={(color = "band.blue")}
            _hover={{
              color: "brand.yellow",
            }}
          >
            <Icon as={s.icon} boxSize={5} />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default TopNav;
