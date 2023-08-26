import * as React from 'react';
import {
  Flex,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { MdPhoneInTalk } from 'react-icons/md';
import { MotionText } from '@/components/animations/motionChakra';
import { BiCameraHome } from 'react-icons/bi';
import { ChakraLink } from '@/components/custom/chakraLink';

export default function HeroSection({
  title,
  heading,
  description,
  image
}: {
  title: string;
  heading: string;
  description: string;
  image: string;
}) {
  return (
    <Stack
      justify="center"
      align="center"
      maxW="6xl"
      minH={'100vh'}
      mx={'auto'}
      w="full"
      p={5}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="center"
      >
        <Stack
          w={'100%'}
          direction="column"
          spacing={6}
          justifyContent="space-evenly"
          textAlign={'left'}
        >

          <MotionText
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left">
            {title}<br />
            <MotionText
              as={'span'}
              fontSize={'6xl'}
              color="purple.600"
            >{heading}</MotionText>
          </MotionText>
          <Text
            maxW="lg"
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
            {description}
          </Text>
          <HStack
            align="center"
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: '3rem !important', sm: 0 }}
            flexWrap="wrap"
          >
            <Button
              leftIcon={<BiCameraHome />}
              colorScheme='purple'
              as={ChakraLink}
              passHref
              href="/gallery"
            >
              Check My Gallery
            </Button>
            <Button
              leftIcon={<MdPhoneInTalk />}
              as={ChakraLink}
              passHref
              target={"_blank"}
              variant={'ghost'}
              href="mailto:abronphotography@gmail.com"
              _hover={{
                variant: 'ghost',
              }}
            >
              Get In Contact
            </Button>
          </HStack>
        </Stack>
        <Box
          w={'full'}
          h="full"

          pos="relative"
        >
          <DottedBox />
          <Image
            rounded={'full'}
            w="full"
            h="full"
            objectFit="cover"
            alt={title}
            src={image}
            fallback={<Skeleton />}
          />
        </Box>
      </Flex >
    </Stack >
  );
};

function DottedBox() {
  return (
    <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

