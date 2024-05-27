"use client";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  color: string;
  item: {
    id: number;
    link: string;
    text: string;
  };
}

const ActiveLink = ({ item, color }: Props) => {
  const pathname = usePathname();
  return (
    <Link href={item.link} key={item.id}>
      <Box
        as="span"
        textTransform="uppercase"
        fontWeight={500}
        fontSize="0.9rem"
        color={pathname === item.link ? "brand.grey" : color}
        _hover={{
          color: "brand.yellow",
        }}
      >
        {item.text}
      </Box>
    </Link>
  );
};

export default ActiveLink;
