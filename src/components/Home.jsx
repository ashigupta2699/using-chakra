import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import pic1 from '../assets/pict1.jpg';
import pic2 from '../assets/pict2.jpg';
import pic3 from '../assets/pexels-stas-knop-1579240.jpg';
import pic4 from '../assets/pict4.jpg';
import pic5 from '../assets/illustrated-paparazzi_23-2147533354.jpg';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxWidth={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image borderRadius={'500'} src={pic5} h={['40', '400']} filter={'hue-rotate(65deg)'} 
 />
          <Text letterSpacing={"widest"} lineHeight={"190%"} p={['4', '16']} textAlign={'center'}>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sit doloribus dolorum vitae voluptatum facilis rem possimus, architecto et consequatur sunt sed obcaecati praesentium cum at, est porro deleniti corrupti id, aperiam delectus dolore totam aspernatur. Ullam impedit repudiandae, illo, architecto minima facilis est vero tenetur debitis laborum aliquam velit nihil! Ipsum quam eveniet cupiditate voluptates! Porro asperiores laboriosam dolorem aperiam libero corrupti facere magni aliquam ex aut temporibus officiis, tempore, distinctio eius beatae in voluptates ipsum minima ipsam, quam aliquid! Incidunt sapiente necessitatibus nam debitis inventore impedit, veritatis vel, quia vero ipsum quam error numquam ducimus iste hic. 
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image h={'full'} w={'full'} objectFit={'cover'} src={pic1} />
      <Heading bgColor={'blackAlpha.900'} color={'white'} {...headingOptions}>
        Watch The Futrue{' '}
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image h={'full'} w={'full'} objectFit={'cover'} src={pic2} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Futrue Is Gaming{' '}
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image h={'full'} w={'full'} objectFit={'cover'} src={pic3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming On Console{' '}
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image h={'full'} w={'full'} objectFit={'cover'} src={pic4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night Life Is Cool{' '}
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
