"use client";
import { Map } from "@/components/common";
import {
  contactInfo,
  marginX,
  FooterSocialData as socialData,
} from "@/utils/constants";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

const supportLinks = [
  { name: "Contact Us", link: "/contact" },
  { name: "Donate", link: "/donate" },
  { name: "Logos Fund website", link: "https://logos.nairobichapel.net/" },
  { name: "privacy policy", link: "/privacy-policy" },
  { name: "Terms & Conditions", link: "/terms-and-conditions" },
];

const TopFooter = () => {
  return (
    <Box bg="brand.blue" color="brand.white">
      <Stack gap={8} mx={marginX} py="4rem">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10}>
          <Stack gap={4}>
            <Box>
              <Image
                w={{ base: "60%", sm: "fit-content" }}
                src="/logo-colored.svg"
                alt="logo"
              />
            </Box>

            <Text>
              We invite you to be part of this Historic Adventure by Supporting
              the{" "}
              <Link href="https://logos.nairobichapel.net/" target="_blank">
                <Box
                  as="span"
                  color="brand.yellow"
                  fontWeight="semibold"
                  textDecor="underline"
                  fontSize="lg"
                >
                  LOGOS Educational Endowment Fund
                </Box>
              </Link>{" "}
              .
            </Text>
          </Stack>
          <Stack>
            <SimpleFooterHeader>Contact Information</SimpleFooterHeader>
            {contactInfo.map((data) => (
              <Link href={data.link} key={data.id} target="_blank">
                <Flex
                  gap={1}
                  align="center"
                  _hover={{
                    color: "brand.yellow",
                    textDecoration: "underline",
                    ".contact-text": {
                      color: "brand.yellow",
                    },
                  }}
                >
                  <Icon color="brand.yellow" as={data.icon} boxSize={5} />
                  <Text className="contact-text" isTruncated>
                    {data.text}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Stack>
          <Stack>
            <SimpleFooterHeader>Office Location</SimpleFooterHeader>
            <Map />
          </Stack>
          <Stack>
            <SimpleFooterHeader>Support</SimpleFooterHeader>
            {supportLinks.map((link, i) => (
              <Link href={link.link} key={i} target="_blank">
                <Text
                  transition="all .3s ease-in-out"
                  fontWeight={600}
                  _hover={{
                    color: "brand.yellow",
                    textDecoration: "underline",
                  }}
                >
                  {link.name}
                </Text>
              </Link>
            ))}
          </Stack>
        </SimpleGrid>
        <Divider />
        <Flex
          justify="space-between"
          gap={6}
          flexDir={{ base: "column", sm: "row" }}
        >
          <Stack as="form">
            <Text>Subscribe us for more update & news !!</Text>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                borderRadius="30px"
                type="email"
                py="1.5rem"
                color="brand.white"
                placeholder="Email address"
                isRequired
                _placeholder={{
                  color: "brand.white",
                  opacity: 0.8,
                }}
              />
              <InputRightElement width="fit-content" h="100%" mr=".5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  bg="brand.yellow"
                  color="brand.white"
                  borderRadius="30px"
                  _hover={{
                    bg: "brand.buttonHover",
                  }}
                >
                  subscribe
                </Button>
              </InputRightElement>
            </InputGroup>{" "}
          </Stack>
          <Stack gap={4}>
            <Flex gap={3} alignSelf={{ base: "flex-start", sm: "flex-end" }}>
              {socialData.map((item) => (
                <Flex
                  p=".4rem"
                  borderRadius="5px"
                  cursor="pointer"
                  key={item.id}
                  bg="brand.yellow"
                  _hover={{
                    bg: "brand.buttonHover",
                  }}
                >
                  <Icon as={item.icon} boxSize={5} />
                </Flex>
              ))}
            </Flex>
            <Flex gap={3} flexDir={{ base: "column", sm: "row" }}>
              <Link href="privacy-policy" target="_black">
                <Text
                  fontWeight={600}
                  _hover={{
                    color: "brand.yellow",
                    textDecoration: "underline",
                  }}
                >
                  Privacy Policy
                </Text>
              </Link>

              <Divider orientation="vertical" />
              <Link href="terms-and-conditions" target="_blank">
                <Text
                  fontWeight={600}
                  _hover={{
                    color: "brand.yellow",
                    textDecoration: "underline",
                  }}
                >
                  Terms & Conditions
                </Text>
              </Link>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default TopFooter;

function SimpleFooterHeader({ children }: { children: ReactNode }) {
  return (
    <Heading
      mb="2rem"
      pos="relative"
      _before={{
        content: `""`,
        position: "absolute",
        width: "85px",
        height: "3px",
        bottom: "-15px",
        left: 0,
        background: "brand.yellow",
      }}
      fontSize="20px"
      fontWeight={700}
    >
      {children}
    </Heading>
  );
}
