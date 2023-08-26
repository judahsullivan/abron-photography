import App, { AppProps } from "next/app";
import AppLayout from "@/components/layouts/appLayout";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { lazy, Fragment, Suspense } from "react";
import { Box, ChakraProvider, Flex, HStack, Heading, Spinner } from "@chakra-ui/react";
import { FontsGlobal } from "@/theme/fonts";
import { theme } from "@/theme";


const PreviewProvider = lazy(() => import('@/components/sanity/preview/previewProvider'))
const Website = ({ pageProps, Component }: AppProps) => {
  const { settings, token, preview } = pageProps;
  const router = useRouter()
  const isStudioPage = router.route.startsWith("/studio") /* seperates the studio route from the appLayout*/
  return (
    <ChakraProvider
      theme={theme}
      resetCSS={true}
    >
      <Suspense
        fallback={
          <Flex
            w={"100%"}
            h={"100vh"}
            justify={'center'}
            align="center"
          >
            <HStack>
              <Heading>
                Loading...
              </Heading>
              <Spinner size={'lg'} />
            </HStack>
          </Flex>
        }
      >
        <FontsGlobal />
        {preview ? (
          <PreviewProvider
            token={token}
          >
            <Component {...pageProps} />
          </PreviewProvider>
        ) : (
          <Fragment>
            {isStudioPage ? (
              <Component {...pageProps} />
            ) : (
              <AppLayout
                settings={settings}
              >
                <AnimatePresence
                  initial={false}
                  mode="wait"
                  onExitComplete={() => scrollTo(0, 0)}
                >
                  <Box
                    key={router.route}
                  >
                    <Component {...pageProps} />
                  </Box>
                </AnimatePresence>
              </AppLayout>
            )}
          </Fragment>
        )}
      </Suspense>
    </ChakraProvider>
  )
}

Website.getInitalProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default Website
