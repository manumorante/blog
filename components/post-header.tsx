import { data } from "@/data"
import Image from "next/image"
import { DateFormatter } from "@/components"
import { Post } from "@/types"

export default function PostHeader({ post }: { post: Post }) {
  const category = post.category ? post.category : data.categoryDefault
  return (
    <>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-3">
        {post.title}
      </h1>

      <div className="opacity-60 mb-4 text-lg">
        {category} - <DateFormatter dateString={post.date} />
      </div>

      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={`Cover Image for ${post.title}`}
          className={
            "w-full h-full max-h-52 object-cover rounded-xl mb-4 sm:mb-20"
          }
          width={500}
          height={500}
        />
      )}
    </>
  )
}
