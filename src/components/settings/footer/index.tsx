import { Text, Stack, Button, HStack, Link, Divider, Box, IconButton, LinkProps, Avatar, Heading, Tooltip } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { ExternalLinks, PageLinks } from '../../../../types';
import { resolveHref } from '@/lib/sanity.links';
import { ChakraLink } from '@/components/custom/chakraLink';
import { BiLogoGmail } from 'react-icons/bi';
import { MotionBox } from '@/components/animations/motionChakra';
import { Label } from '@sanity/ui';
import { motion } from 'framer-motion';

export default function Footer({
  pageLinks,
  externalLinks,
  ogImage,

}: {
  pageLinks: PageLinks[];
  externalLinks: ExternalLinks[];
  ogImage: any;
}) {
  const appLinks = pageLinks.filter(link => link._type !== 'home')
  const homeLink = pageLinks.find(link => link._type === 'home')
  return (
    <Stack
      justify="center"
      p={5}
    >
      <Stack
        align="center"
        justify={'space-between'}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack
          align="center"
          direction={{ base: 'column', md: 'row' }}
        >
          {homeLink && ((() => {
            const href = resolveHref(homeLink._type)

            if (!href) {
              return null
            }
            return (
              <HStack
                href={href}
                passHref
                as={ChakraLink}

              >
                <Avatar src={ogImage} />
                <Heading>
                  {homeLink.title}
                </Heading>
              </HStack>
            )
          })()
          )}
        </Stack>
        <Text
          fontSize={'sm'}
          fontWeight={600}
        >Copyright {new Date().getFullYear()}. All Rights Reserved.</Text>
        <Stack
          direction="row"
          spacing={5}
          pt={{ base: 4, md: 0 }}
          alignItems="center">
          {externalLinks.map((link, key) => (
            <Link
              key={key}
              href={link.link}
              isExternal
              _hover={{ textDecoration: "none" }} // Optional: Remove link underline on hover
            >
              <MotionBox
                whileHover={{
                  scale: 1.05
                }}
              >
                <Tooltip label={link.title} placement="top" hasArrow>
                  <IconButton
                    icon={<Avatar size="xs" objectFit={'contain'} src={link.image} />}
                    colorScheme="purple"
                    aria-label={link.title}
                  />
                </Tooltip>

              </MotionBox>
            </Link>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};


