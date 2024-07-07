import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputProps,
  InputRightAddon,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import SCInputLabel from "./InputLabel";
import { SearchIcon } from "@chakra-ui/icons";
import SCInputErrorMessage from "./InputErrorMessage";
import SCInputHelperText from "./InputHelperText";

interface CustomSearchInputProps extends InputProps {
  error?: any;
  label?: string;
  helperText?: string | React.ReactNode;
  addOnBefore?: React.ReactNode;
  addOnAfter?: React.ReactNode;
}

const SCCustomSearchInput = ({
  error,
  label,
  helperText,
  addOnBefore,
  addOnAfter,
  ...rest
}: CustomSearchInputProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as={FormControl} my={4}>
      {label && <SCInputLabel label={label} />}

      <InputGroup borderColor="primary.500">
        {addOnBefore && (
          <InputLeftAddon borderRadius="10px">{addOnBefore}</InputLeftAddon>
        )}

        <Input
          onWheel={(e) => e.currentTarget.blur()}
          borderRadius={isMobile ? "10px" : "10px 0px 0px 10px"}
          _hover={{ borderColor: "primary.600" }}
          {...rest}
        />

        {isMobile ? (
          <InputRightAddon>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              borderRadius={isMobile ? "10px" : "0px 10px 10px 0px"}
              colorScheme="primary"
              variant="ghost"
            />
          </InputRightAddon>
        ) : (
          <InputRightAddon borderRadius="10px">
            {addOnAfter ? addOnAfter : <SearchIcon />}
          </InputRightAddon>
        )}
      </InputGroup>

      {error && <SCInputErrorMessage error={error} />}

      {helperText && <SCInputHelperText helperText={helperText} />}
    </Box>
  );
};

export default SCCustomSearchInput;
