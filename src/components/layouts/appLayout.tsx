import { Fragment, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '../settings/navbar'
import { SettingsPayload } from '../../../types'
import Footer from '../settings/footer'


export default function AppLayout({
  settings,
  children
}: {
  children: ReactNode
  settings?: SettingsPayload // Make settings optional
}) {
  console.log(settings)
  return (
    <Fragment>
      {settings && <Navbar ogImage={settings?.image} pageLinks={settings?.pageLinks} />}
      <Box
        fontSize="xl"
        textAlign={'center'}
        w="100%"
        mx="auto"
      >
        <Box
          pt={'4rem'}
          pb={10}
        >
          {children}
        </Box>
      </Box>

      {settings && <Footer externalLinks={settings?.externalLinks} ogImage={settings?.image} pageLinks={settings?.pageLinks} />}
    </Fragment>
  )
}
