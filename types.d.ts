export type Post = {
  slug: string
  title: string
  date: string
  category?: string
  cover?: string
  summary?: string
  ogImage?: {
    url: string
  }
  content: string
}
