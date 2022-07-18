import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

// import { Header } from "../components/Header";

export default function Create() {
  const [value, setValue] = useState("High");

  return (
    <>
      <Head>
        <title>TODO New</title>
      </Head>
      <Box h="80px" bg="green.300" />
      <Container mt="16px">
        <Center>
          <VStack>
            <Flex w="1080px">
              <Text fontSize="28px" color="blackAlpha.800">
                NEW TODO
              </Text>
              <Spacer />
              <Button
                w="112px"
                h="40px"
                mt="8px"
                p="0"
                fontSize="18px"
                bg="green.300"
                color="blackAlpha.800"
                borderWidth="1px"
                borderColor="blackAlpha.800"
                borderRadius="50px"
              >
                Back
              </Button>
            </Flex>
            <FormControl>
              <FormLabel
                m="0"
                fontSize="24px"
                lineHeight="24px"
                color="blackAlpha.800"
              >
                TITLE
              </FormLabel>
              <Input
                h="72px"
                mt="4px"
                color="blackAlpha.800"
                borderWidth="1px"
                borderColor="blackAlpha.800"
                borderRadius="10px"
              ></Input>
            </FormControl>
            <FormControl mt="24px">
              <FormLabel
                m="0"
                fontSize="24px"
                lineHeight="24px"
                color="blackAlpha.800"
              >
                DETAIL
              </FormLabel>
              <Textarea
                h="208px"
                mt="4px"
                color="blackAlpha.800"
                borderWidth="1px"
                borderColor="blackAlpha.800"
                borderRadius="10px"
              ></Textarea>
            </FormControl>
            <FormControl h="60px" mt="24px">
              <FormLabel
                m="0"
                fontSize="24px"
                lineHeight="24px"
                color="blackAlpha.800"
              >
                PRIORITY
              </FormLabel>
              <RadioGroup mt="4px" onChange={setValue} value={value}>
                <Stack h="28px" spacing="24px" direction="row">
                  <Radio value="High">
                    <Text
                      fontSize="24px"
                      lineHeight="28px"
                      color="blackAlpha.800"
                    >
                      High
                    </Text>
                  </Radio>
                  <Radio value="Middle">
                    <Text
                      fontSize="24px"
                      lineHeight="28px"
                      color="blackAlpha.800"
                    >
                      Middle
                    </Text>
                  </Radio>
                  <Radio value="Low">
                    <Text
                      fontSize="24px"
                      lineHeight="28px"
                      color="blackAlpha.800"
                    >
                      Low
                    </Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <Flex w="100%" mt="12px" flexDirection="row-reverse">
              <Button
                w="112px"
                h="40px"
                ml="8px"
                p="0"
                fontSize="18px"
                bg="green.600"
                color="green.50"
                borderWidth="1px"
                borderColor="blackAlpha.800"
                borderRadius="50px"
              >
                CREATE
              </Button>
              <Button
                w="112px"
                h="40px"
                ml="8px"
                p="0"
                fontSize="18px"
                bg="pink.100"
                color="blackAlpha.800"
                borderWidth="1px"
                borderColor="blackAlpha.800"
                borderRadius="50px"
              >
                DRAFT
              </Button>
            </Flex>
          </VStack>
        </Center>
      </Container>
    </>
  );
}
