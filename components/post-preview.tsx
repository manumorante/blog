import DateFormatter from "./date-formatter"
import Link from "next/link"
import Image from "next/image"

type Props = {
  title: string
  coverImage?: string
  date: string
  excerpt: string
  slug: string
}

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <div>
      <div className="sm:grid grid-cols-2 gap-20">
        <div>
          <h3 className="text-5xl lg:text-5xl font-bold tracking-tighter leading-none mb-3">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="sm:hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="text-lg opacity-60 mb-4">
            <DateFormatter dateString={date} />
          </div>
          {/* <p className="text-xl leading-relaxed mb-4">{excerpt}</p> */}
        </div>

        <div className="bg-neutral-800/50 rounded-xl">
          {coverImage && (
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <Image
                src={coverImage}
                alt={`Cover Image for ${title}`}
                className={"w-full h-full max-h-52 object-cover rounded-xl"}
                width={500}
                height={500}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
