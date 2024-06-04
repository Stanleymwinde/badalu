import { Button, ButtonProps } from "@chakra-ui/react";
import Link from "next/link";
import { FaBabyCarriage } from "react-icons/fa";

const CtaButton = ({ ...props }: ButtonProps) => {
  return (
    <Link href="https://badalu.clouderp.ke/worker-request/new">
      <Button
        borderRadius="xl"
        colorScheme={props.colorScheme || "primary"}
        {...props}
        rightIcon={<FaBabyCarriage />}
      >
        Need a Nanny?
      </Button>
    </Link>
  );
};

export default CtaButton;
