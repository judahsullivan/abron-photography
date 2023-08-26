import { ChakraLink } from '@/components/custom/chakraLink';
import {
  useColorModeValue
} from '@chakra-ui/react';



// NavLink Component
interface NavLinkProps {
  title: string;
  href: string;
  onClose: () => void;
}

export default function NavLink({ title, href, onClose }: NavLinkProps) {
  const link = {
    bg: useColorModeValue('purple.200', 'purple.700'),
    color: useColorModeValue('purple.500', 'purple.200')
  };
  return (
    <ChakraLink
      href={href}
      px={3}
      py={1}
      lineHeight="inherit"
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: link.bg,
        color: link.color
      }}
      onClick={() => onClose()}
      passHref
    >
      {title}
    </ChakraLink>
  );
};




