import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import {AiOutlineSend, AiFillInstagram, AiFillYoutube, AiFillFacebook, AiFillTwitterCircle} from 'react-icons/ai';


const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={"16"} color={'white'}>
    <Stack direction={['column', 'row']}>
    <VStack alignItems={'stretch'} w={'full'} px={'4'}>
        <Heading size={"md"} textTransform={'uppercase'} textAlign={['center', 'left']}>
            Subscribe to get updates
        </Heading>
        <HStack borderBottom={'2px solid white'} py={'2'}>
        <Input placeholder='Enter Email here' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
            <Button
            p={'0'}
            colorScheme='purple'
            variant={'ghost'}
            borderRadius={"0 20px 20px 0"}
            >
                <AiOutlineSend size={20}/>
            </Button>
        </HStack>
    </VStack>
    <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>

    <Heading textTransform={'uppercase'} textAlign={'center'}>
        VIDEO HUB
    </Heading>
    <Text>All rights reserved</Text>
    </VStack>

    <VStack w={'full'} >
    <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
    <Button variant={'link'} colorScheme='whiteAlpha' >
        <a href="https://youtube.com"> <AiFillYoutube color='white'/></a>
        <a href="https://facebook.com"> <AiFillFacebook color='white'/></a>
        <a href="https://instagram.com"> <AiFillInstagram color='white'/></a>
        <a href="https://twitter.com"> <AiFillTwitterCircle color='white'/></a>
    </Button>
</VStack>

    </Stack>

    </Box>
  )
}

export default Footer