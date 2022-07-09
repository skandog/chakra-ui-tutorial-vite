import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Box, Button, Flex, Spacer } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { Text, Heading } from "@chakra-ui/react"

function App() {

  return (
    <div className="App">
      <header>
        <Heading>I am playing with Chakra Headings</Heading>
      </header>
      <Flex justify={"space-between"} align="centre">

        <Box as='section' bg='green' w='100px' h='100px' >item1</Box>
        <Box as='section' bg='blue' w='100px' h='100px' >item2</Box>
        <Box as='section' bg='orange' w='100px' h='100px' >item3</Box>
        <Box as='section' bg='yellow' w='100px' h='100px' >item4</Box>
      </Flex>
      <HStack spacing="even" >

        <Box as='section' bg='green' w='100px' h='100px' ><Text as='i' color="tomato">item1</Text></Box>
        <Box as='section' bg='blue' w='100px' h='100px' ><Text as="s">item2</Text></Box>
        <Box as='section' bg='orange' w='100px' h='100px' ><Text as="samp" fontSize="lg">item3</Text></Box>
        <Box as='section' bg='yellow' w='100px' h='100px' >item4</Box>
      </HStack>
      <Box bg="salmon" h="20vh" w="20%" margin="auto"><Text>This is a styled box</Text>
        <Button mt="32px" colorScheme="blue" _hover={{ background: 'red' }} _focus={{ background: 'yellow', color: 'black' }}>Click me til i explode</Button>
      </Box>
    </div >
  )
}

export default App
