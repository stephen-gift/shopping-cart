import { WarningTwoIcon } from "@chakra-ui/icons";
import { Flex, FlexProps, Icon, Text } from "@chakra-ui/react";

interface Props extends FlexProps {
  error: any;
}

function SCInputErrorMessage({ error, ...rest }: Props) {
  if (!error) return <></>;

  return (
    <Flex gap={1} align="center" color="error.500" {...rest}>
      <Icon as={WarningTwoIcon} w={3.5} h={3.5} />
      <Text as="span" fontSize="sm">
        {error}
      </Text>
    </Flex>
  );
}

export default SCInputErrorMessage;
