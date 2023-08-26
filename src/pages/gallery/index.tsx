import { getClientPage } from "@/lib/queries/gallery.queries";
import { getClient } from "@/lib/sanity.client";
import GalleryIndex from "@/components/views/gallery/galleryIndex";
import { ClientPayLoad, PageLoad } from "../../../types";
import { GetStaticProps } from "next";
import GalleryIndexPreview from "@/components/views/gallery/galleryIndexPreview";
import { readToken } from "@/lib/sanity.api";



interface GalleryClientProps {
  galleryPage: PageLoad;
  client: ClientPayLoad[];
  token?: string;
  draftMode?: boolean;
}




export default function Gallery(
  props
    : GalleryClientProps) {
  const { galleryPage, client, draftMode } = props;
  if (draftMode) {
    return (
      <GalleryIndexPreview client={client} galleryPage={galleryPage} />
    )
  }
  return (
    <GalleryIndex client={client} galleryPage={galleryPage} />
  )
}


export const getStaticProps: GetStaticProps<GalleryClientProps> = async (ctx) => {
  const { draftMode = false } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);

  const data = await getClientPage(client);

  return {
    props: {
      ...data, // Spread the data object to directly pass its properties to props
      draftMode: draftMode,
      token: draftMode ? readToken : '', // Use the token value directly if draftMode is true
    },
    revalidate: 10
  };
};
