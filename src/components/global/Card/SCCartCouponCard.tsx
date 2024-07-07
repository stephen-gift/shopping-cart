'use client'
import { CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {};

const SCCartCouponCard = (props: Props) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);
  return (
    <Card>
      <CardHeader>
        <Heading>Apply coupon</Heading>
      </CardHeader>
      <CardBody>
        <InputGroup size="md">
          <Input pr="4.5rem" type={"text"} placeholder="Coupon code" />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick} color={'red'} p={1}>
              {clicked ? (
                <Text>
                  Applied <CheckIcon />
                </Text>
              ) : (
                <Text>Apply</Text>
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
      </CardBody>
    </Card>
  );
};

export default SCCartCouponCard;
