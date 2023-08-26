import {
  Box,
  Text,
  Link as ChakraLink,
  List,
} from '@chakra-ui/react';
import { SanityImage } from '../sanity/image/sanityImage';



export const ChakraRichText = {
  types: {
    image: ({ value }: any) => {
      // Convert ImageUrlBuilder to a string URL
      return (
        <SanityImage  {...value} />
      );
    },
    code: ({ value }: any) => {
      return (
        <Box as="pre">
          <code>{value.code}</code>
        </Box>
      );
    }
  },
  list: {
    bullet: ({ children }: any) => (
      <List as="ul" textAlign={'start'} ml={10} py={5} listStyleType="disc" spacing={5}>
        {children}
      </List>
    ),
    number: ({ children }: any) => (
      <List as="ol" textAlign={'start'} mt="lg" listStyleType="decimal">
        {children}
      </List>
    )
  },
  block: {
    normal: ({ children }: any) => (
      <Text textAlign={'start'} maxW="5xl" width={'100%'} fontSize="lg" fontWeight="900">
        {children}
      </Text>
    ),
    h1: ({ children }: any) => (
      <Box textAlign={'start'} as="h1" width={'100%'} fontSize="5xl" fontWeight="900">
        {children}
      </Box>
    ),
    h2: ({ children }: any) => (
      <Box textAlign={'start'} as="h2" fontSize="4xl" width={'100%'} py={10} fontWeight="800">
        {children}
      </Box>
    ),
    h3: ({ children }: any) => (
      <Box as="h3" fontSize="3xl" textAlign={'start'} py={10} fontWeight="700" width={'100%'}>
        {children}
      </Box>
    ),
    h4: ({ children }: any) => (
      <Box as="h4" fontSize="2xl" py={10} textAlign={'start'} fontWeight="600" width={'100%'}>
        {children}
      </Box>
    ),
    blockquote: ({ children }: any) => (
      <Box as="blockquote" borderLeft="4px" borderLeftColor="#f7ab0a">
        {children}
      </Box>
    )
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <ChakraLink
          href={value.href}
          rel={rel}
          textDecoration="underline"
          color="#f7ab0a"
          _hover={{ textDecoration: 'black' }}
        >
          {children}
        </ChakraLink>
      );
    }
  }
};
