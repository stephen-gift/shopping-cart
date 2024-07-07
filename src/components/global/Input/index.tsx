import {
  Box,
  Input,
  InputProps,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  FormControl,
} from "@chakra-ui/react";
import SCInputLabel from "./InputLabel";
import SCInputErrorMessage from "./InputErrorMessage";
import SCInputHelperText from "./InputHelperText";

interface InputFieldProps extends InputProps {
  error?: any;
  label?: string;
  helperText?: string | React.ReactNode;
  addOnBefore?: React.ReactNode;
  addOnAfter?: React.ReactNode;
}

const SCInput = ({
  error,
  label,
  helperText,
  addOnBefore,
  addOnAfter,
  ...rest
}: InputFieldProps) => {
  return (
    <Box as={FormControl} my={4}>
      {label && <SCInputLabel label={label} />}

      <InputGroup borderColor="primary.500">
        {addOnBefore && (
          <InputLeftAddon borderRadius="10px">{addOnBefore}</InputLeftAddon>
        )}

        <Input
          onWheel={(e) => e.currentTarget.blur()}
          borderRadius="10px"
          _hover={{ borderColor: "primary.600" }}
          {...rest}
        />

        {addOnAfter && (
          <InputRightAddon borderRadius="10px">{addOnAfter}</InputRightAddon>
        )}
      </InputGroup>

      {error && <SCInputErrorMessage error={error} />}

      {helperText && <SCInputHelperText helperText={helperText} />}
    </Box>
  );
};

export default SCInput;
