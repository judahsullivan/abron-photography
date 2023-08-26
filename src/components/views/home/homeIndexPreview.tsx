import { Heading } from '@chakra-ui/react'
import HomeIndex, { HomeIndexProps } from './homeIndex'

export default function HomeIndexPreview({
  home,
  recentClient,
  recentArticles,
  preview,
  loading,
}: HomeIndexProps) {
  if (preview) {
    return (
      <Heading>
        Please start editing your Home document to see the preview!
      </Heading>
    )
  }

  return (
    <HomeIndex
      home={home}
      recentClient={recentClient}
      recentArticles={recentArticles}
      loading={loading}
    />
  )
}
