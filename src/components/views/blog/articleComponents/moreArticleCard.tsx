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
import { PostPayLoad } from '../../../../../types';
import { Fragment } from 'react';

export default function MoreArticleCard({
  morePosts,
}: {
  morePosts: PostPayLoad[];
}) {
  return (
    <MotionBox
      maxW={'400px'}
      minH={'300px'}
      h={'full'}
      w={'full'}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      p={6}
      overflow={'hidden'}>
      {morePosts.map((post, key) => (
        <Fragment
          key={key}
        >
          <Box h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}
            overflow={'hidden'}
          >
            <MotionImage
              src={`${post.mainImage}`}
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
                {post.title}
              </Text>
              <Text
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}
              >{post.publishedAt}</Text>
            </Flex>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              {post.heading}
            </Heading>
            <Text
              fontSize={'md'}
              noOfLines={3}
              color={'gray.500'}>
              {post.description}
            </Text>
            <Flex
              width={"100%"}
              align="center"
            >
              <ChakraLink
                href={`/blog/${post.slug}`}
                passHref
              >
                <Text>
                  Read More...
                </Text>
              </ChakraLink>
            </Flex>
          </Stack>
        </Fragment>
      ))}
    </MotionBox>
  )
}

