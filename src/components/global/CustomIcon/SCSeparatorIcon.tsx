import { Icon } from "@chakra-ui/react";
import React from "react";

type Props = {};

const SCSeparatorIcon = (props: Props) => {
  return (
    <Icon viewBox="0 0 84 1" w="84px" h="1px">
      <line
        x1="0"
        y1="0"
        x2="84"
        y2="0"
        stroke="currentColor"
        strokeWidth="1"
      />
    </Icon>
  );
};

export default SCSeparatorIcon;
