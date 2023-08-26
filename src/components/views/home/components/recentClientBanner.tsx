import { useState } from 'react'
import {
  Image,
  IconButton,
  useBreakpointValue,
  Heading,
  Text,
  Stack,
  Container,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import Header from '@/components/shared/headers/header'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
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
export default function RecentClientBanner(props: SlideShowProps) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  const { image, name, publishedAt } = props;

  return (
    <Container
      maxW="6xl"
      p={5}
      position={'relative'} width={'full'} overflow={'hidden'}>
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
      <Stack
        w={'100%'}
        align={'start'}
      >
        <Header>
          Most Recent Client
        </Header>
        <Heading
        >{name}</Heading>
        <Text
          fontSize={'sm'}
          as={'span'}
        >{publishedAt}</Text>
      </Stack>
      {/* Left Icon */}
      <IconButton
        display={{ base: 'none', md: 'block' }}
        aria-label="left-arrow"
        position="absolute"
        colorScheme='purple'
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
        colorScheme='purple'
        display={{ base: 'none', md: 'block' }}
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
          <Image
            key={key}
            src={image}
            alt={name}
            position="relative"
            maxW={'4xl'}
            maxH={'lg'}
            display="flex"
            objectFit={'contain'}
          />
        ))}
      </Slider>
    </Container >
  )
}
