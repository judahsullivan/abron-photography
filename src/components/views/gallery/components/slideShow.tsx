import { useState } from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

interface SlideShowProps {
  image: string[];
  publishedAt: string;
  name: string;
  description: string
}
export default function SlideShow(props: SlideShowProps) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  const { image, name, publishedAt, description } = props;

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <VStack
        w={'100%'}
        align="start"
        spacing={0}
      >
        <Heading
          textAlign={'center'}
          lineHeight={1.2}
        >
          {name}
        </Heading>
        <Text
          fontSize={'sm'}
          as={'span'}
        >{publishedAt}</Text>
        <Text
          fontSize={'md'}
        >{description}</Text>
      </VStack>
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {image.map((image, key) => (
          <Box
            key={key}
            height={'100vh'}
            width={"100%"}
            position="relative"
            display="flex"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={`url(${image})`}
          />
        ))}
      </Slider>
    </Box >
  )
}
