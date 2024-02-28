import Image from "next/image"
import { Post } from "@/types"

export default function PostHeader({ post }: { post: Post }) {
  return (
    <>
      {post.cover && (
        <Image
          src={post.cover}
          alt={`Cover Image for ${post.title}`}
          className={"w-full h-full object-cover rounded-xl mb-4 sm:mb-10"}
          width={2000}
          height={1250}
        />
      )}

      <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-none mb-3">
        {post.title}
      </h1>

      {post.summary && (
        <div className="text-2xl lg:text-3xl opacity-60 font-normal leading-none mb-3">
          {post.summary}
        </div>
      )}
    </>
  )
}
