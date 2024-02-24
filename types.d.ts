export type Post = {
  slug: string
  title: string
  date: string
  category?: string
  coverImage?: string
  excerpt?: string
  ogImage?: {
    url: string
  }
  content: string
}
