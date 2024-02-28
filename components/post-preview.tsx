import Link from "next/link"
import Image from "next/image"
import { Post } from "@/types"

export default function PostPreview({ post }: { post: Post }) {
  const url = `/posts/${post.slug}`

  return (
    <div className="PostPreview md:grid grid-cols-2 gap-20">
      <div className="PostPreview-Body">
        <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-none mb-3">
          <Link as={url} href="/posts/[slug]" className="sm:hover:underline">
            {post.title}
          </Link>
        </h3>

        {post.summary && (
          <p className="text-xl leading-relaxed">{post.summary}</p>
        )}
      </div>

      {post.cover && (
        <div className="hidden md:block bg-neutral-400/50 rounded-xl max-h-52">
          <Link as={url} href="/posts/[slug]">
            <Image
              src={post.cover}
              alt={`Cover Image for ${post.title}`}
              className={"w-full h-full object-cover rounded-xl"}
              width={500}
              height={500}
            />
          </Link>
        </div>
      )}
    </div>
  )
}
