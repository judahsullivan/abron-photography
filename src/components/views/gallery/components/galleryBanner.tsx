import { Box, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react'

export default function GalleryBanner({
  image,
  heading,
  description,
}: {
  image?: string;
  heading: string;
  description: string;
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
      <Box
        px={useBreakpointValue({ base: 4, md: 8 })}
        color={'white'}
        w="full"
        display={'flex'}
        flexDir="column"
        h="auto"
        justifyContent={'space-evenly'}
        alignItems="center"
        backdropFilter={'auto'}
        backdropBlur={'3px'}
      >
        <Heading
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
        >
          {heading}
        </Heading>
        <Text
          textAlign="start"
          lineHeight={1.1}
          fontWeight={600}
          p={2}
        >
          {description}
        </Text>
      </Box>
    </Flex >
  )
}
