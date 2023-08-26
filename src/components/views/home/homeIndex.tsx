import PageLayout from "@/components/layouts/pageLayout";
import { ClientPayLoad, HomePageLoad, PostPayLoad } from "../../../../types";
import HomeBanner from "./components/homeBanner";
import RecentArticleBanner from "./components/recentBanner";
import RecentClientBanner from "./components/recentClientBanner";
import { Button, Divider, Stack } from "@chakra-ui/react";
import Header from "@/components/shared/headers/header";
import { MotionBox } from "@/components/animations/motionChakra";
import Link from "next/link";
import { MdAdsClick } from "react-icons/md";


export interface HomeIndexProps {
  home: HomePageLoad
  recentClient: ClientPayLoad;
  recentArticles: PostPayLoad[];
  loading?: boolean;
  preview?: boolean;
}

export default function HomeIndex({
  home,
  recentArticles,
  recentClient,

}:
  HomeIndexProps
) {
  return (
    <PageLayout
      title={home.title}
      description={home.description}
    >
      <HomeBanner
        heading={home.heading}
        title={home.title}
        description={home.description}
        image={home.image}
      />
      <RecentClientBanner
        name={recentClient?.name}
        description={recentClient?.description}
        image={recentClient?.image}
        publishedAt={recentClient?.publishedAt}
      />
      <Divider mt={10} mb={5} />
      <Stack
      >

        <Header>Most Recent Articles</Header>
        {recentArticles.map((article, key) => (
          <RecentArticleBanner
            key={key}
            title={article.title}
            heading={article.heading}
            description={article.description}
            publishedAt={article.publishedAt}
            href={`/blog/${article.slug}`}
          />



        ))}
        <MotionBox
          align="center"
          whileHover={{
            scale: 1.04
          }}
        >

          <Button
            as={Link}
            href={'/blog'}
            passHref
            colorScheme='purple'
            rightIcon={<MdAdsClick />}
          >
            All Articles
          </Button>

        </MotionBox>

      </Stack>
    </PageLayout>
  )
}

