import { Box } from "@chakra-ui/react";
import React from "react";
import SCHeader from "../Header";
import SCFooter from "../Footer";

type Props = {
  children: React.ReactNode;
};

const SCMainLayout = ({ children }: Props) => {
  return (
    <Box>
      <SCHeader />
      <Box as="main" padding={1}>
        {children}
      </Box>
      <SCFooter />
    </Box>
  );
};

export default SCMainLayout;
