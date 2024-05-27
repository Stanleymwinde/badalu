"use client";

import { navItems } from "@/utils/constants";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = ({ color }: { color: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <IconButton
        aria-label="Open Menu"
        as={RxHamburgerMenu}
        onClick={onOpen}
        boxSize={9}
        color={color}
        bg="none"
        _hover={{ background: "none" }}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="brand.red">
          <DrawerCloseButton
            color="brand.black"
            w="48px"
            h="48px"
            _focus={{
              color: "brand.white",
              boxShadow: "none",
              border: "none",
              outline: "none",
            }}
          />
          <DrawerHeader></DrawerHeader>

          <DrawerBody mt={5}>
            <Stack
              direction="column"
              align="flex-start"
              fontFamily="Poppins san-serif"
              fontWeight="300"
              lineHeight="44px"
              fontSize="20px"
              color="brand.white"
              gap={6}
            >
              {navItems.map((item) => (
                <Text
                  key={item.text}
                  as="a"
                  href={item.link}
                  fontSize="2xl"
                  _hover={{
                    color: "brand.main",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    onClose();
                  }}
                >
                  {item.text}
                </Text>
              ))}

              <Button
                bg="brand.black"
                p="20px"
                borderRadius="none"
                color="brand.white"
                transition="all 0.3s ease-in-out"
                _hover={{
                  bg: "brand.buttonHover",
                }}
                fontSize="xl"
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
