import { FormLabel } from "@chakra-ui/react";

type Props = { label: string };

function SCInputLabel({ label }: Props) {
  return (
    <FormLabel fontSize="sm" fontWeight={500} mb={1}>
      {label}
    </FormLabel>
  );
}

export default SCInputLabel;
