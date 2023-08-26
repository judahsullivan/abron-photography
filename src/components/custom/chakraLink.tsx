import Link, { type LinkProps as NextLinkProps } from 'next/link';
import { chakra } from '@chakra-ui/react';

export const ChakraLink = chakra<typeof Link, NextLinkProps>(Link, {
  shouldForwardProp: (prop) => ['href', 'target', 'children', 'path'].includes(prop)
});
