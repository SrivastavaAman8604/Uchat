import React from 'react'
import { Box, Button , Input , Container , VStack , HStack , Avatar, Heading ,Text} from '@chakra-ui/react'
import { FcBusinessman} from "react-icons/fc";

const SideChat = () => {
  return (
    <>
      <Button w={"full"} p={"25"} >
        <HStack w={"full"} >
          <Heading><FcBusinessman/></Heading>
          <VStack>
            <Text textAlign={"left"}>SampleName 1</Text>
            <Text>Hi there I'm using Uchat</Text>
          </VStack>
        </HStack>
      </Button>
      <Button w={"full"} p={"25"}>
        <HStack w={"full"} >
          <Heading><FcBusinessman/></Heading>
          <VStack>
            <Text textAlign={"left"}>SampleName 2</Text>
            <Text>Hi there I'm using Uchat</Text>
          </VStack>
        </HStack>
      </Button>
      <Button w={"full"} p={"25"}>
        <HStack w={"full"} >
          <Heading><FcBusinessman/></Heading>
          <VStack>
            <Text textAlign={"left"}>SampleName 3</Text>
            <Text>Hi there I'm using Uchat</Text>
          </VStack>
        </HStack>
      </Button>
      <Button w={"full"} p={"25"}>
        <HStack w={"full"} >
          <Heading><FcBusinessman/></Heading>
          <VStack>
            <Text textAlign={"left"}>SampleName 4</Text>
            <Text>Hi there I'm using Uchat</Text>
          </VStack>
        </HStack>
      </Button>
      <Button w={"full"} p={"25"}>
        <HStack w={"full"} >
          <Heading><FcBusinessman/></Heading>
          <VStack>
            <Text textAlign={"left"}>SampleName 5</Text>
            <Text>Hi there I'm using Uchat</Text>
          </VStack>
        </HStack>
      </Button>
      <Button w={"full"} p={"25"}>
        <HStack w={"full"} >
          <Heading><FcBusinessman/></Heading>
          <VStack>
            <Text textAlign={"left"}>SampleName 6</Text>
            <Text>Hi there I'm using Uchat</Text>
          </VStack>
        </HStack>
      </Button>
      <Button w={"full"} p={"25"}>
        <HStack w={"full"} >
          <Heading><FcBusinessman/></Heading>
          <VStack>
            <Text textAlign={"left"}>SampleName 7</Text>
            <Text>Hi there I'm using Uchat</Text>
          </VStack>
        </HStack>
      </Button>
    </>
  )
}

export default SideChat
