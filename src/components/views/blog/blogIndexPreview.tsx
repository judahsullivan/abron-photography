import React from 'react';
import BlogIndex, { BlogIndexProps } from './blogIndex';
import { Heading } from '@chakra-ui/react';



export default function BlogIndexPreview({ blog, post, preview, loading }: BlogIndexProps) {
  if (preview) {
    <Heading>
      Start Writing Content
    </Heading>
  }
  return (
    <BlogIndex
      blog={blog}
      preview
      post={post || []}
      loading={loading}
    />
  );
}
