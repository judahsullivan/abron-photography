export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case 'home':
      return '/'
    case 'about':
      return '/about'
    case 'blog':
      return '/blog'
    case 'article':
      return slug ? `/blog/${slug}` : undefined
    case 'gallery':
      return '/gallery'
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
