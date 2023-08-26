import {
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function Header({
  children
}: {
  children: ReactNode
}) {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={800}
          fontFamily={'heading'}
          fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: "purple.600"
              ,
              zIndex: -1,
            }}>
            {children}
          </Text>
        </Heading>
      </Stack>
    </Stack>
  )
} 
