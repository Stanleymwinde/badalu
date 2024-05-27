import { Box, StackDivider } from "@chakra-ui/react";
import MainNav from "./MainNav";
import TopNav from "./TopNav";

interface Props {
  color?: string;
  boxShadow?: string;
}

const Navbar = ({ color = "brand.white", boxShadow = "none" }: Props) => {
  return (
    <Box zIndex={999} boxShadow={boxShadow}>
      <TopNav color={color} />
      <StackDivider
        bg={(color = "brand.blue")}
        p={0}
        height="1px"
        opacity={0.4}
      />
      <MainNav color={color} />
    </Box>
  );
};

export default Navbar;
