import { config } from "@/config"
import Link from "next/link"
import Image from "next/image"
import { DateFormatter } from "@/components"
import { Post } from "@/types"

export default function PostPreview({ post }: { post: Post }) {
  const title = post.title
  const cover = post.cover
  const date = post.date
  const category = post.category ? post.category : config.categoryDefault
  const summary = post.summary
  const url = `/posts/${post.slug}`

  return (
    <div className="PostPreview md:grid grid-cols-2 gap-20">
      <div className="PostPreview-Body">
        <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-none mb-3">
          <Link as={url} href="/posts/[slug]" className="sm:hover:underline">
            {title}
          </Link>
        </h3>

        <div className="text-lg opacity-60 my-3">
          {category} - <DateFormatter dateString={date} />
        </div>

        <p className="text-xl leading-relaxed">{summary}</p>
      </div>

      {cover && (
        <div className="hidden md:block bg-neutral-400/50 rounded-xl max-h-52">
          <Link as={url} href="/posts/[slug]">
            <Image
              src={cover}
              alt={`Cover Image for ${title}`}
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
