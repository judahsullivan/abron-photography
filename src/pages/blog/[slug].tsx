import { GetStaticProps } from 'next';
import { getClient } from '@/lib/sanity.client';
import { readToken } from '@/lib/sanity.api';
import { PostPayLoad, Slug } from '../../../types';
import { getAllPostsSlugs, getPostAndMoreStories } from '@/lib/queries/blog.queries';
import ArticleIndex from '@/components/views/blog/articleIndex';
import ArticleIndexPreview from '@/components/views/blog/articleIndexPreview';

interface BlogProps {
  article: PostPayLoad;
  morePosts: PostPayLoad[];
  draftMode: boolean;
  token: string | null;
}

interface Query {
  [key: string]: string
}

export default function Article(props: BlogProps) {
  const { article, morePosts, draftMode } = props;
  if (draftMode) {
    return (
      <ArticleIndexPreview article={article} morePosts={morePosts} />
    )
  }
  return (
    <ArticleIndex article={article} morePosts={morePosts} />
  );
}
export const getStaticProps: GetStaticProps<BlogProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const data = await getPostAndMoreStories(client, params.slug)

  return {
    props: {
      ...data,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}




export async function getStaticPaths() {
  const slugs: Slug[] = await getAllPostsSlugs();

  const paths = slugs.map((slug) => ({
    params: {
      slug: slug.current
    }
  }));

  return {
    paths,
    fallback: false
  };
} 
