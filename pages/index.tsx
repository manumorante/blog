import { config } from "@/config"
import { Post } from "@/types"
import { getAllPosts, getAllCategories } from "@/lib/api"
import Head from "next/head"
import { Page, PostPreview } from "@/components"

export default function Index({
  allPosts,
  allCategories,
}: {
  allPosts: Post[]
  allCategories: string[]
}) {
  if (!allPosts) return <div>loading...</div>

  return (
    <>
      <Head>
        <title>{`${config.author.name} - ${config.slogan}`}</title>
      </Head>

      <Page>
        <div className="PostList flex flex-col gap-20">
          {allPosts.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}

          <div className="opacity-40">
            <h4 className="text-xl font-medium">Todas las categorias</h4>
            <div className="divide-x space-x-4">
              {allCategories.map((category) => (
                <span className="" key={category}>
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}

export const getStaticProps = async () => {
  const allCategories = getAllCategories()
  const allPosts = getAllPosts([
    "title",
    "date",
    "category",
    "slug",
    "cover",
    "summary",
  ])

  return {
    props: { allPosts, allCategories },
  }
}
