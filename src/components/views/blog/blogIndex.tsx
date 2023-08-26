import { PageLoad, PostPayLoad } from "../../../../types"
import PageLayout from "@/components/layouts/pageLayout";
import ArticleCard from "./articleComponents/articleCard";
import BlogBanner from "./components/blogBanner";
import { SimpleGrid, Divider, Container } from "@chakra-ui/react";



export interface BlogIndexProps {
  blog: PageLoad
  post: PostPayLoad[]
  preview?: boolean;
  loading?: boolean;
}

export default function BlogIndex(props: BlogIndexProps) {
  const { blog, post } = props;
  return (
    <PageLayout
      title={blog.title}
      description={blog.heading}
    >
      <BlogBanner
        heading={blog.heading}
        image={blog.image}
        description={blog.description}
      />
      <Divider
        py={5}
      />
      <Container
        maxW="6xl">
        <SimpleGrid
          columns={[1, 2, 3]}
          p={5}
        >
          {post.map((article, key) => (
            <ArticleCard
              key={key}
              title={article.title}
              mainImage={article.mainImage}
              heading={article.heading}
              description={article.description}
              publishedAt={article.publishedAt}
              href={`/blog/${article.slug}`}
            />
          ))}
        </SimpleGrid>
      </Container>
    </PageLayout>
  )
}
