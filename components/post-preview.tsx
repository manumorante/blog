import DateFormatter from "./date-formatter"
import CoverImage from "./cover-image"
import Link from "next/link"

type Props = {
  title: string
  coverImage?: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <div>
      {coverImage && (
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      )}
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
      <p className="text-xl leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default PostPreview
