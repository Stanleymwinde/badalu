import { extendTheme } from "@chakra-ui/react";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
});

export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        lineHeight: "1.1em",
        fontWeight: "600",
      },
    },
    Text: {
      baseStyle: {
        color: "brand.white",
        fontSize: "16px",
        fontweight: "500",
        fontStyle: "normal",
        lineHeight: "24px",
      },
    },
  },
  fonts: {
    heading: epilogue.style.fontFamily,
  },

  colors: {
    brand: {
      black: "#231F20",
      blackLight: "#3f3c3c",
      white: "#ffff",
      blue: "#1a3854",
      yellow: "#FEBE10",
      red: "#DE3830", //222, 56, 48
      green: "#92C83E", //146, 200, 62
      buttonHover: "#231F20",
      grey: "#7B7B7B",
      gradient:
        "linear-gradient(173deg, rgba(222,56,48,1) 38%, rgba(254,190,16,1) 90%)",

      bg: "#F5F5F4",
    },
    primary: {
      100: "#CEF7FC",
      200: "#9EEAF9",
      300: "#6CD0EE",
      400: "#46B2DE",
      500: "#1288C9",
      600: "#0D6AAC",
      700: "#094F90",
      800: "#053874",
      900: "#032860",
      default: "#1288C9",
    },

    secondary: {
      100: "#FEF8D5",
      200: "#FDEFAB",
      300: "#F9E181",
      400: "#F4D361",
      500: "#EEBE2F",
      600: "#CC9D22",
      700: "#AB7E17",
      800: "#8A610E",
      900: "#724C09",
      default: "#EEBE2F",
    },
  },
});
