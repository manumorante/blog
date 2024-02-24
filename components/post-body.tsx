import { Post } from "@/types"

export default function PostBody({ post }: { post: Post }) {
  return (
    <div className="PostBody mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      <div
        className="post-body-markdown"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}
