import { useRouter } from "next/router"
import ErrorPage from "next/error"
import PostBody from "../../components/post-body"
import PostHeader from "../../components/post-header"
import Layout from "../../components/layout"
import { getPostBySlug, getAllPosts } from "../../lib/api"
import Head from "next/head"
import markdownToHtml from "../../lib/markdownToHtml"
import { Post } from "../../types"

export default function Post({ post }: { post: Post }) {
  const router = useRouter()
  const title = `${post.title} | Manu Morante`

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
        {post.ogImage?.url && (
          <meta property="og:image" content={post.ogImage.url} />
        )}
      </Head>

      <Layout>
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
          />
          <PostBody content={post.content} />
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
