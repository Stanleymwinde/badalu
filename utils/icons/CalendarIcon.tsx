"use client";

import { ChakraProps, Icon } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa6";
const CalendarIcon = (props: ChakraProps) => {
  return <Icon as={FaFacebookF} {...props} />;
};

export default CalendarIcon;
