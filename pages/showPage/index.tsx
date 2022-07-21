import { Header } from "../../components/Header";
import {Input,Textarea, Box, Flex,FormLabel, Text, Button, Stack} from  "@chakra-ui/react";

export default function ShowPage () {
  return (
    <>
    <Header />
      <Stack mt='20px' direction={["column", "row"]}>
      <Box w='800px' ml='99px' >
        <Text 
          fontSize="28px"
          fontWeight="bold"
          lineHeight="33px"
          color="blackAlpha.800"
            >
            SHOW TODO
        </Text>
        <Box borderWidth="1px"
                borderColor="blackAlpha.800"
                borderRadius="10px"
                p='10px'
                mt='15px'
                minHeight="600px">
          <Box p='10px'>
            <FormLabel
                m="16px 0 0 0"
                fontSize="24px"
                fontWeight="bold"
                lineHeight="24px"
                color="blackAlpha.800"
                bgColor="green.300"
                >
                  TITLE
            </FormLabel>
            <Input
                h="40px"
                fontSize="20px"
                fontWeight="bold"
                color="blackAlpha.800"
                border='none'
              ></Input>
      </Box>

        <Box p='10px'>
          <FormLabel
            m="16px 0 0 0"
            fontSize="24px"
            fontWeight="bold"
            lineHeight="24px"
            color="blackAlpha.800"
            bgColor="green.300"
            >
            DETAIL
          </FormLabel>
          <Textarea
                h="350px"
                mt="4px"
                fontSize="24px"
                fontWeight="bold"
                color="blackAlpha.800"
                border='none'
          ></Textarea>
        </Box>
        <Flex justifyContent="space-between" p='10px' pb='20px'>
          <Button w='112px' borderRadius='50px' bgColor="green.300" borderWidth="1px" borderColor="blackAlpha.800">Edit</Button>
          <Stack>
            <Text fontWeight='bold'>Create</Text>
            <Text fontWeight='bold' fontSize='20px'>2020-11-8 18:55</Text>
          </Stack>
          <Stack>
            <Text fontWeight='bold'>Update</Text>
            <Text fontWeight='bold' fontSize='20px'>2020-11-8 18:55</Text>
          </Stack>
          
        </Flex>
      </Box>
        </Box>

        <Box bg="red.300" w='690px'>
          <Flex justify="flex-end">
          <Button w="112px"
                h="40px"
                mt="8px"
                mr='10px'
                fontSize="18px"
                fontWeight="bold"
                bg="green.600"
                color="white"
                borderWidth="1px"
                borderColor="blackAlpha.800"
                borderRadius="50px">Comment</Button>
          <Button 
                w="112px"
                h="40px"
                mt="8px"
                fontSize="18px"
                fontWeight="bold"
                bg="green.300"
                color="blackAlpha.800"
                borderWidth="1px"
                borderColor="blackAlpha.800"
                borderRadius="50px">Back</Button>
          </Flex>
        </Box>
      </Stack>
    </>
  );
}