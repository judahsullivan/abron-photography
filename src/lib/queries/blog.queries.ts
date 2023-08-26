import { groq } from "next-sanity"
import { SanityClient } from "next-sanity"
import { pageFieldsWithImage, postFields, settings } from "./fields"
import { PageLoad, PostPayLoad, SettingsPayload, Slug } from "../../../types"
import { getClient } from "../sanity.client"


export const blogPageQuery = groq`
{
"blog": *[_type == "blog"][0]{
${pageFieldsWithImage}
  },
"post": *[_type == "post"]{
    ${postFields}
  },
"settings": *[_type == "settings"][0]{
    ${settings}
  }
}`

export const postAndMoreStoriesQuery = groq`
{
  "article": *[_type == "post" && slug.current == $slug] | order(publishedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current == $slug] | order(pusblishedAt desc)[0...2]{
    content,
    ${postFields}
  },
  "settings": *[_type == "settings"][0]{
    ${settings}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`



export async function getBlogPage(client: SanityClient): Promise<{
  blog: PageLoad
  settings: SettingsPayload
  post: PostPayLoad[]
}> {
  const data = await client.fetch(blogPageQuery);
  return data
}


export async function getAllPostsSlugs(): Promise<Slug[]> {

  const client = getClient();
  const slugs = (await client.fetch<string[]>(postSlugsQuery)) || [];
  return slugs.map((slug) => ({ _type: 'slug', current: slug }));
}


export async function getPostBySlug(
  client: SanityClient,
  slug: Slug,
): Promise<PostPayLoad> {
  return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
}

export async function getPostAndMoreStories(
  client: SanityClient,
  slug: string
): Promise<{
  article: PostPayLoad;
  morePosts: PostPayLoad[];
  settings: SettingsPayload;
}> {
  const data = await client.fetch(postAndMoreStoriesQuery, { slug })
  return data
}
