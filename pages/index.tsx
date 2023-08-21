import { getAllPosts } from "../lib/api"
import Layout from "../components/layout"
import Head from "next/head"
import PostPreview from "../components/post-preview"
import { Post } from "../types"
import Container from "../components/container"

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  if (!allPosts) return <div>loading...</div>

  return (
    <Layout>
      <Head>
        <title>The dev stories of Manu Morante</title>
      </Head>
      <Container>
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
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
      </Container>
    </Layout>
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
