import React from "react";
import { Flex, Heading, Spacer, Text } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Flex h="80px" bgColor="green.300" alignItems="center">
      <Heading ml="99px" fontSize="48px">TODO</Heading>
      <Spacer />
      <Text mr="100px" fontSize="16px">2022/01/01</Text>
    </Flex>
  )
}