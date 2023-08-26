import { Heading, Container, SimpleGrid, Box } from "@chakra-ui/react";
import { PostPayLoad } from "../../../../types";
import { PortableText } from '@portabletext/react'
import PageLayout from "@/components/layouts/pageLayout";
import ArticleBanner from "./articleComponents/articleBanner";
import MoreArticleCard from "./articleComponents/moreArticleCard";


export interface ArticleIndexProps {
  article: PostPayLoad;
  morePosts: PostPayLoad[]
  preview?: boolean;
  loading?: boolean;
}


export default function ArticleIndex({
  article,
  morePosts
}:
  ArticleIndexProps
) {
  return (
    <PageLayout
      title={article.title}
      description={article.description}
    >
      <ArticleBanner
        heading={article.heading}
        image={article?.mainImage}
      />
      <PortableText
        value={article.content}
      />
      <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 8 }}>
        <Box
          mt={'2rem'}
        >
          <Heading
            textAlign={'start'}
            fontSize="5xl"
          >More Post</Heading>
          <SimpleGrid
            py={'4rem'}
            columns={{ base: 1, md: 2 }} spacing={5}
          >
            {morePosts.length > 0 && (
              <MoreArticleCard
                morePosts={morePosts}
              />
            )}
          </SimpleGrid>
        </Box>
      </Container>
    </PageLayout>
  )
}
