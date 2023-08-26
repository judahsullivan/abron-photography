import { Stack, Divider, SimpleGrid } from "@chakra-ui/react";
import GalleryBanner from "./components/galleryBanner";
import PageLayout from "@/components/layouts/pageLayout";
import { ClientPayLoad, PageLoad } from "../../../../types";
import GalleryPhotoCard from "./components/galleryPhotos";


export interface GalleryIndexProps {
  galleryPage: PageLoad;
  client: ClientPayLoad[];
  loading?: boolean;
  preview?: boolean;
}



export default function GalleryIndex({
  galleryPage,
  client,
}:
  GalleryIndexProps
) {
  return (
    <PageLayout
      title={galleryPage.title}
      description={galleryPage.description}
    >
      <GalleryBanner
        image={galleryPage?.image}
        heading={galleryPage.heading}
        description={galleryPage.description}
      />
      <Divider
        mt={5}
      />
      {/* Image Section*/}
      <Stack
        maxW="6xl"
        align="center"
      >
        <SimpleGrid
          columns={[1, 2, 3, 4]}
          gap={2}
        >
          {client.map((client, key) => (
            <GalleryPhotoCard
              key={key}
              name={client.name}
              image={client.image}
              description={client.description}
              coverimage={client.coverimage}
              publishedAt={client.publishedAt}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </PageLayout>

  )
}
