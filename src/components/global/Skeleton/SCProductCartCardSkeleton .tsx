import React from 'react';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  HStack,
  IconButton,
  Skeleton,
  SkeletonText,
  Square,
  Stack,
  Text,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

type Props = {
  disableAnimation?: boolean;
};

const SCProductCartCardSkeleton = ({ disableAnimation }: Props) => {
  return (
    <Card w={"full"} bg={"none"} borderRadius={0} shadow={0}>
      <CardBody w={"full"} bg={"none"}>
        <HStack alignItems={"center"} gap={{ base: 2, md: 5 }}>
          <Box
            width={{ base: "101px", md: "228px" }}
            height={{ base: "80px", md: "185px" }}
            gap="0px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Skeleton height="full" width="full" borderRadius="lg" speed={disableAnimation ? 0 : undefined} />
          </Box>
          <Stack spacing={1} w={"full"}>
            <Skeleton height={{ base: "15px", md: "22px" }} width="60%" speed={disableAnimation ? 0 : undefined} />
            <Flex justifyContent={"flex-start"} alignItems={"center"} gap={1} flexWrap={'wrap'}>
              <SkeletonText noOfLines={1} width="40%" speed={disableAnimation ? 0 : undefined} />
              <Text>/</Text>
              <SkeletonText noOfLines={1} width="40%" speed={disableAnimation ? 0 : undefined} />
            </Flex>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"full"}
            >
              <Flex justifyContent={"center"} alignItems={"center"}>
                <Square size="15px" bg="gray.200" mr="2px" />
                <Square size="15px" bg="gray.200" />
              </Flex>
              <Skeleton height={{ base: "15px", md: "20px" }} width="20%" speed={disableAnimation ? 0 : undefined} />
            </Flex>
          </Stack>
        </HStack>
      </CardBody>
      <Divider color={"#B7B8BC"} />
      <CardFooter>
        <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
          <Skeleton height="40px" width="100px" speed={disableAnimation ? 0 : undefined} />
          <IconButton
            aria-label="delete Product"
            icon={<DeleteIcon />}
            variant={"none"}
            isDisabled
          />
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default SCProductCartCardSkeleton;
