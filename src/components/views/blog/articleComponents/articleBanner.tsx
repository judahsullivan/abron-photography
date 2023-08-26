import { Box, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import { MotionBox } from '@/components/animations/motionChakra';

export default function ArticleBanner({
  image,
  heading,
}: {
  image?: string;
  heading: string;
}) {
  return (
    <Flex
      w={'full'}
      h={'100%'}
      minH="50vh"
      css={{
        background:
          `url(${image}) center/cover no-repeat`,
      }}
    >
      <MotionBox
        px={useBreakpointValue({ base: 4, md: 8 })}
        color={'white'}
        w="full"
        display={'flex'}
        flexDir="column"
        h="auto"
        justifyContent={'space-evenly'}
        alignItems="center"
        backdropFilter={'auto'}
        backdropBlur={'2px'}
      >
        <Heading
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
        >
          {heading}
        </Heading>
      </MotionBox>
    </Flex >
  )
}
