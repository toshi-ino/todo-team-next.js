import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
  Stack,
} from "@chakra-ui/react";
// tests

export const ViewModal = () => {
  return (
    <>
      <VStack mt="230px">
        <Container maxW="330px" border="1px solid black" borderRadius="10px">
          <Text fontSize="40px">Comment</Text>
          <Box>
            <FormLabel>Name</FormLabel>
            <Input borderColor="blackAlpha.800" />
          </Box>
          <Box>
            <FormLabel>Your Comment</FormLabel>
            <Textarea mb="10px" borderColor="blackAlpha.800" h="130px" />
          </Box>
          <Button
            p="0 120px"
            mb="15px"
            bgColor="green.500"
            color="white"
            fontSize="18px"
            border="1px solid black"
          >
            Create
          </Button>
        </Container>
      </VStack>
    </>
  );
};
