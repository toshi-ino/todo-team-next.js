import { Header } from "../../components/Header";
import { Center, Container, Box, Flex, HStack, VStack, Text, Button, Stack} from  "@chakra-ui/react";
import Head from "next/head";

export default function ShowPage () {
  return (
    <>
    <Header />
      <Stack mt='30px' direction={["column", "row"]}>
      <Box w='50%' ml='99px' mt='10px'>
        <Text 
          fontSize="28px"
          fontWeight="bold"
          lineHeight="33px"
          color="blackAlpha.800"
            >
            SHOW TODO
        </Text>
        <Box p='10px'>
          <Text bgColor="green.300">TITLE</Text>
          <Text>Github上に静的サイトをホスティングする</Text>
        </Box>

        <Box p='10px'>
          <Text bgColor="green.300">DETAIL</Text>
          <Text>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </Text>
        </Box>
        <Flex>
          <Button>Edit</Button>
        </Flex>
      </Box>

        <Box bg="red.300" w='690px'>
          <Flex justify="flex-end">
          <Button mr='10px' borderRadius='50px'>Comment</Button>
          <Button  borderRadius='50px' bgColor="green.300" borderWidth="1px" borderColor="blackAlpha.800">Back</Button>
          </Flex>
        </Box>
      </Stack>
    </>
  );
}