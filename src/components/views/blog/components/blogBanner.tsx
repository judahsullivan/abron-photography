import {
  Box,
  Text,
  Heading,
  VStack,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icon

export default function BlogBanner({
  heading,
  description,
  image
}: {
  heading: string;
  description: string;
  image?: string;
}) {
  return (
    <Stack
      position={'relative'}
      overflow={'hidden'}
      w={'full'}
      h={'100%'}
      align="center"
      minH="50vh"
      p={6}
      boxShadow={useColorModeValue(
        '0 4px 6px rgba(160, 174, 192, 0.6)',
        '0 4px 6px rgba(9, 17, 28, 0.9)'
      )}
    >
      <Box
        w="100%"
        pos={'absolute'}
        top={0}
        bottom={0}
        right={0}
        bgImage={image}
        bgRepeat={'no-repeat'}
        bgPos={'center'}
        bgSize={'cover'}
      />
      <VStack
        align="center"
        justify={'space-around'}
        pos={'relative'}
        color={'white'}
        direction="column"
        flexGrow={3}>
        <Heading textAlign={'center'} fontSize="4xl" lineHeight={1.2} fontWeight="bold">
          {heading}
        </Heading>
        <Text
          maxW="4xl"
          textAlign="left"
          fontSize="lg"
          lineHeight={1.2}
          fontWeight="bold">
          {description}
        </Text>
      </VStack>
    </Stack>
  );
};

