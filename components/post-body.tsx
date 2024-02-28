import { Post } from "@/types"

export default function PostBody({ post }: { post: Post }) {
  return (
    <div className="PostBody">
      <div
        className="post-body-markdown"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}
