import * as React from 'react';
import { Heading, useBreakpointValue, Stack, Image, Text, Skeleton } from '@chakra-ui/react';
import PageLayout from '@/components/layouts/pageLayout';
import { PageLoad } from '../../../../types';
// Here we have used react-icons package for the icons


export interface AboutIndexProps {
  aboutPage: PageLoad;
  preview?: boolean;
  loading?: boolean;
}

export default function AboutIndex({
  aboutPage
}: AboutIndexProps) {
  return (
    <PageLayout
      title={aboutPage.title}
      description={aboutPage.title}
    >
      <Stack p={{ base: 8, sm: 14 }} direction="column" spacing={6} alignItems="center">
        <Heading w={"100%"}>
          <Heading
            fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
            fontFamily={'heading'}
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: useBreakpointValue({ base: '20%', md: '30%' }),
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'purple.400',
              zIndex: -1,
            }}>
            {aboutPage.title}
          </Heading>
          <br />{' '}
          <Heading color={'purple.400'}
            fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
            as={'span'}>
            {aboutPage.heading}
          </Heading>{' '}
        </Heading>

        <Image
          src={aboutPage.image}
          rounded={"lg"}
          fallback={<Skeleton />}
        />
        <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.500">
          {aboutPage.description}
        </Text>
      </Stack>
    </PageLayout>
  );
};

