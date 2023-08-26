import React, { Fragment } from 'react';
import {
  Flex,
  Box,
  HStack,
  Stack,
  Text,
  Icon,
  Divider,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoChevronRight } from 'react-icons/go';
import { ChakraLink } from '@/components/custom/chakraLink';

export default function RecentArticleBanner({ title, description, publishedAt, href }: {
  title: string;
  heading: string;
  description: string;
  publishedAt: string;
  href: string;

}) {
  return (
    <Stack
      textAlign={'start'}
      as={Stack}
      justify="center"
      w="full"
      p={{ base: 5, md: 10 }}
      mx="auto"
    >
      <Flex
        direction="column" gap={4} p={4}>
        <Flex
          justify="space-between"
        >
          <Heading fontSize="xl" fontWeight="bold">
            {title}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {publishedAt}
          </Text>
        </Flex>
        <Box textAlign="left">
          <Text fontSize="md" color="gray.500" noOfLines={2} lineHeight="normal">
            {description}
          </Text>
        </Box>
        <Box>
          <Stack justify="space-between" direction={{ base: 'column', sm: 'row' }}>
            <HStack
              as={ChakraLink}
              href={href}
              passHref
              spacing={1}
              p={1}
              alignItems="center"
              height="2rem"
              w="max-content"
              margin="auto 0"
              rounded="md"
              color="blue.400"
              _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
            >
              <Text fontSize="sm"> Read more</Text>
              <Icon as={GoChevronRight} w={4} h={4} />
            </HStack>
          </Stack>
        </Box>
      </Flex>
      <Divider />
    </Stack>
  );
};

