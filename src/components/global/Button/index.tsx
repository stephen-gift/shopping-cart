import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

type Props = {};

const SCButton = ({ children, ...rest }: ButtonProps) => {
  const styles: ButtonProps = {
    width: "200px",
    height: "50px",
    // top: "394px",
    // left: "559px",
    gap: "0px",
    borderRadius: "10px 0px 0px 0px",
    border: "1px solid #5A2C17", // Adjust the border as per your needs
    backgroundColor: "#FFFFFF", // Background color set to white
    opacity: "0", // Adjust the opacity value as per your needs
    p: "16px 14px",
    fontWeight: "700",
    fontSize: "sm",
    textTransform: "uppercase",
  };
  return (
    <Button textTransform="uppercase" {...styles} {...rest}>
      {children}
    </Button>
  );
};

export default SCButton;
