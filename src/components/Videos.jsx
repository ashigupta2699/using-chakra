import { Button, Heading, Stack, Text, VStack, AspectRatio, Box } from '@chakra-ui/react'
import React, { useState } from 'react';

const Videos = () => {
    const videoArr =[
       
        'https://www.youtube.com/embed/aSZMO4qiyhc?si=Yp4byTxRWYaU6IIy'
    ]
    const [videoSrc, setVideoSrc]= useState(videoArr[0]);
  return (
   <Stack direction={['column', 'row']} h={'100vh'}>
   <VStack w={'full'}
   >
   <Box w={'100%'} h={'100%'} as={'iframe'}
   src={videoSrc} allowFullScreen />
    {/* <video controls
    controlsList='nodownload'
    src={videoSrc}
    style={{
        width: '100%',
    }}>

    </video> */}

   <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'} >
    <Heading>Sample Video 1</Heading>
    <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat doloremque quisquam ullam hic a. Voluptatem.
    </Text>
   </VStack>
   </VStack>

   <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflow={'auto'}>
 {
    videoArr.map((item, index) => (
        <Button  variant={'ghost'} colorScheme='purple' onClick={()=>setVideoSrc(item)}>Lecture {index+1}</Button>
    ))
 }
   </VStack>

   </Stack>
  )
}

export default Videos