import { data } from "@/data"
import { Post } from "@/types"
import { useRouter } from "next/router"
import { getPostBySlug, getAllPosts } from "@/lib/api"
import markdownToHtml from "@/lib/markdownToHtml"
import ErrorPage from "next/error"
import Head from "next/head"
import { Layout, PostBody, PostHeader } from "@/components"

export default function Post({ post }: { post: Post }) {
  const router = useRouter()
  const title = `${post.title} | ${data.author}`

  // Error 404
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  // Loading
  if (router.isFallback) {
    return <p className="m-5 text-5xl">Loading…</p>
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:description" content={post.excerpt} />
        {post.ogImage?.url && (
          <meta property="og:image" content={post.ogImage.url} />
        )}
      </Head>

      <Layout>
        <article className="Post">
          <PostHeader post={post} />
          <PostBody post={post} />
        </article>
      </Layout>
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
  ])
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
