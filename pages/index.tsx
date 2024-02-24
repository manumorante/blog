import { getAllPosts } from "@/lib/api"
import Head from "next/head"
import Layout from "@/components/layout"
import PostPreview from "@/components/post-preview"
import { Post } from "@/types"

export default function Index({ allPosts }: { allPosts: Post[] }) {
  if (!allPosts) return <div>loading...</div>

  return (
    <>
      <Head>
        <title>The dev stories of Manu Morante</title>
      </Head>

      <Layout>
        <section className="flex flex-col gap-24">
          {allPosts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </section>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ])

  return {
    props: { allPosts },
  }
}
