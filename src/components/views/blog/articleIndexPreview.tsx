import { Heading } from "@chakra-ui/react";
import ArticleIndex, { ArticleIndexProps } from "./articleIndex";





export default function ArticleIndexPreview({
  article,
  morePosts,
  preview,
  loading
}: ArticleIndexProps) {
  if (preview) {
    <Heading>
      Make a Blog Post to Preview!
    </Heading>
  }
  return (
    <ArticleIndex
      article={article}
      morePosts={morePosts || []}
      loading={loading}
      preview
    />
  )
}
