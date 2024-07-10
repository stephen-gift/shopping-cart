import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import SCHeader from "../Header";
import SCFooter from "../Footer";
import SCMainFooter from "../Footer/SCMainFooter";

type Props = {
  children: React.ReactNode;
};

const SCMainLayout = ({ children }: Props) => {
  return (
    <Box>
      <SCHeader />
      <Box as="main" padding={1} mt={'76px'}>
        {children}
      </Box>

      <SCMainFooter />
    </Box>
  );
};

export default SCMainLayout;
