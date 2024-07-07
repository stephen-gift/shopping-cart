import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, FormHelperText, Icon } from "@chakra-ui/react";

type Props = { helperText: React.ReactNode };

function SCInputHelperText({ helperText }: Props) {
  return (
    <Flex
      as={FormHelperText}
      gap={1}
      align="flex-start"
      fontSize={["xs", null, "sm"]}
    >
      <Icon as={InfoOutlineIcon} />
      {helperText}
    </Flex>
  );
}

export default SCInputHelperText;
