import HomeIndex from "@/components/views/home/homeIndex";
import { getHomePage } from "@/lib/queries/home.queries";
import { getClient } from "@/lib/sanity.client";
import { GetStaticProps } from "next";
import { readToken } from "@/lib/sanity.api";
import { ClientPayLoad, HomePageLoad, PostPayLoad } from "../../types";
import HomeIndexPreview from "@/components/views/home/homeIndexPreview";

interface HomeProps {
  home: HomePageLoad;
  recentArticles: PostPayLoad[];
  recentClient: ClientPayLoad;
  token?: string;
  draftMode?: boolean;
}

interface Query {
  [key: string]: string;
}

export default function Home({
  home,
  recentArticles,
  recentClient,
  draftMode,
}:
  HomeProps
) {
  if (draftMode) {
    return (
      <HomeIndexPreview home={home} recentArticles={recentArticles} recentClient={recentClient} />
    )
  }
  return (
    <HomeIndex home={home} recentArticles={recentArticles} recentClient={recentClient} />
  )
}


export const getStaticProps: GetStaticProps<HomeProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const data = await getHomePage(client)


  return {
    props: {
      ...data,
      draftMode: draftMode,
      token: draftMode ? readToken : '',
    },
    revalidate: 10,
  }
}
