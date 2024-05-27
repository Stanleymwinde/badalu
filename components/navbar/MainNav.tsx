import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

import ActiveLink from "./ActiveLink";
import MobileNav from "./mobileNav";
import { navItems } from "@/utils/constants";

const MainNav = ({ color }: { color: string }) => {
  return (
    <Flex
      justify="space-between"
      mx={{ base: "2%", sm: "5%", md: "10%" }}
      py={4}
      align="center"
    >
      <Link href="/">
        <Image src="/badalu-logo.png" h="70px" alt="logo" />
      </Link>

      <Flex gap={6} align="center" display={{ base: "none", lg: "flex" }}>
        {navItems.map((item, i) => (
          <ActiveLink item={item} color={"grey"} key={i} />
        ))}
      </Flex>
      <Box display={{ base: "block", lg: "none" }}>
        <MobileNav color={color} />
      </Box>
    </Flex>
  );
};

export default MainNav;
