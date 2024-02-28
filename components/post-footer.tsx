import { config } from "@/config"
import { DateFormatter } from "@/components"
import { Post } from "@/types"

export default function PostHeader({ post }: { post: Post }) {
  const category = post.category ? post.category : config.categoryDefault
  return (
    <>
      <div className="opacity-50 my-10 text-lg">
        {category} - <DateFormatter dateString={post.date} />
      </div>
    </>
  )
}
