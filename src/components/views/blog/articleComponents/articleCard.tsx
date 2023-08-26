import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react'
import { MotionBox, MotionImage } from '@/components/animations/motionChakra';
import { ChakraLink } from '@/components/custom/chakraLink';

export default function ArticleCard({
  title,
  heading,
  description,
  publishedAt,
  mainImage,
  href,
}: {
  title: string;
  heading: string;
  description: string;
  publishedAt: string;
  mainImage?: string;
  href: string;

}) {
  return (
    <MotionBox
      maxW={'400px'}
      minH={'300px'}
      h={'full'}
      w={'full'}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}>
      <Box h={'210px'}
        bg={'gray.100'}
        mt={-6}
        mx={-6}
        mb={6}
        pos={'relative'}
        overflow={'hidden'}
      >
        <MotionImage
          src={`${mainImage}`}
          whileHover={{
            scale: 1.1,
          }}
          fill
          alt="Example"
        />
      </Box>
      <Stack
        textAlign={'left'}
      >
        <Flex
          w="100%"
          justify="space-between"
          color={'purple.500'}
        >
          <Text
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {title}
          </Text>
          <Text
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >{publishedAt}</Text>
        </Flex>
        <Heading
          // eslint-disable-next-line react-hooks/rules-of-hooks
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}>
          {heading}
        </Heading>
        <Text
          fontSize={'md'}
          noOfLines={3}
          color={'gray.500'}>
          {description}
        </Text>
        <Flex
          width={"100%"}
          justify={'space-between'}
          align="center"
        >
          <ChakraLink
            href={href}
            passHref
          >
            <Text>
              Read More...
            </Text>
          </ChakraLink>

        </Flex>
      </Stack>
    </MotionBox>
  )
}
