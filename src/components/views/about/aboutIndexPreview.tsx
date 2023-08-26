import { Heading } from "@chakra-ui/react";
import AboutIndex, { AboutIndexProps } from "./aboutIndex";


export default function AboutIndexPreview({
  aboutPage,
  preview,
  loading
}:
  AboutIndexProps
) {
  if (preview) {
    <Heading>
      Add Some Content to the About page to preview
    </Heading>
  }
  return (
    <AboutIndex
      aboutPage={aboutPage}
      loading={loading}
      preview
    />

  )
}
