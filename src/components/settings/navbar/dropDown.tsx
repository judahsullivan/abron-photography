import { ChakraLink } from "@/components/custom/chakraLink";
import { useColorModeValue } from "@chakra-ui/react";
import { MenuItem, Text } from "@chakra-ui/react";

// Dropdown MenuLink Component
interface MenuLinkProps {
  title: string;
  href: string;
  onClose: () => void;
}

export default function MenuLink(props: MenuLinkProps) {
  const { title, href, onClose } = props;
  return (
    <ChakraLink href={href} onClick={() => onClose()}>
      <MenuItem _hover={{ color: 'blue.400', bg: useColorModeValue('gray.200', 'gray.700') }}>
        <Text>{title}</Text>
      </MenuItem>
    </ChakraLink>
  );
};

