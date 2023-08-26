import { Heading } from "@chakra-ui/react";
import GalleryIndex, { GalleryIndexProps } from "./galleryIndex";






export default function GalleryIndexPreview({
  galleryPage,
  client,
  loading,
  preview
}:
  GalleryIndexProps
) {
  if (preview) {
    return (
      <Heading>
        Please start editing your Home document to see the preview!
      </Heading>
    )
  }
  return (

    <GalleryIndex
      client={client}
      galleryPage={galleryPage}
      loading={loading}
      preview
    />
  )
}
