import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import ThemeToggleButton from './themetoggle';
import NavLink from './nLink';
import { MotionBox } from '@/components/animations/motionChakra';
import { ChakraLink } from '@/components/custom/chakraLink';
import Hamburger from 'hamburger-react';
import { resolveHref } from '@/lib/sanity.links';
import { PageLinks } from '../../../../types';



interface NavbarProps {
  pageLinks: PageLinks[];
  ogImage: any;
}

export default function Navbar(props: NavbarProps) {
  const { pageLinks, ogImage } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const homeLink = pageLinks.find(link => link._type === 'home');
  const appLinks = pageLinks.filter(link => link._type !== 'home');




  return (
    <>
      <Box
        px={4}
        boxShadow={'lg'}
        position="fixed"
        width="100%"
        zIndex="55"
        css={{
          backdropFilter: 'saturate(180%) blur(2px)',
          backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
        }}
      >
        <Flex
          h={16}
          align={'center'}
          justify={'space-between'}
          w={'100%'}
          mx="auto"
        >
          <Box
            display={{ md: "none" }}
          >
            <Hamburger
              toggled={isOpen}
              toggle={isOpen ? onClose : onOpen}
            />
          </Box>
          <MotionBox whileHover={{ scale: 1.2 }} shadow="md" rounded="full">
            {homeLink && (
              (() => {
                const href = resolveHref(homeLink._type);
                if (!href) {
                  return null;
                }

                return (
                  <ChakraLink href={href} passHref>
                    <Avatar src={ogImage} />
                  </ChakraLink>
                );
              })()
            )}
          </MotionBox>
          <HStack as={'nav'} spacing={3} display={{ base: 'none', md: 'flex' }}>
            {appLinks.map((link, index) => {
              const href = resolveHref(link._type)
              if (!href) {
                return null
              } return (
                <NavLink
                  key={index}
                  title={link.title}
                  href={href}
                  onClose={onClose}
                />

              )
            })}
          </HStack>
          <ThemeToggleButton />
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            w={['100%', '100%', '80%']}
            maxW={800}
            display={['inherit', 'inherit', 'none']}
          >
            <Stack as={'nav'} spacing={4}>
              {appLinks.map((link, index) => {
                const href = resolveHref(link._type)
                if (!href) {
                  return null

                } return (
                  <NavLink
                    key={index}
                    title={link.title}
                    href={href}
                    onClose={onClose}
                  />

                )
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
