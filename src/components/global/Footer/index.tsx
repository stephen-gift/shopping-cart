"use client";
import { Button, Flex, Icon, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { FiSettings } from "react-icons/fi";

type Props = {};

const SCFooter = (props: Props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex justifyContent={"flex-start"} w={"full"} position="fixed" bottom={0}>
      <Button
        leftIcon={isMobile ? undefined : <Icon as={FiSettings} />}
        size="md"
        variant={'none'}
      >
        {isMobile ? <Icon as={FiSettings} /> : "Settings"}
      </Button>
    </Flex>
  );
};

export default SCFooter;
