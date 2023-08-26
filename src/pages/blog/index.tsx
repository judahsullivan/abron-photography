import BlogIndex from "@/components/views/blog/blogIndex"
import { getBlogPage } from "@/lib/queries/blog.queries"
import { getClient } from "@/lib/sanity.client"
import { PageLoad, PostPayLoad } from "../../../types"
import { GetStaticProps } from "next"
import { readToken } from "@/lib/sanity.api"
import BlogIndexPreview from "@/components/views/blog/blogIndexPreview"


interface BlogProps {
  blog: PageLoad
  post: PostPayLoad[]
  token?: string;
  draftMode: boolean;
}

interface Query {
  [key: string]: string;
}

export default function Blog(props: BlogProps) {
  const { blog, post, draftMode } = props;
  if (draftMode) {
    return (
      <BlogIndexPreview
        blog={blog}
        post={post}
      />
    )
  }
  return (
    <BlogIndex
      blog={blog}
      post={post}
    />
  )
}


export const getStaticProps: GetStaticProps<BlogProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const data = await getBlogPage(client)
  return {
    props: {
      ...data,
      draftMode: draftMode,
      token: draftMode ? readToken : '',
    },
    revalidate: 10,
  }
}
