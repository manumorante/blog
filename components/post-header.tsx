import DateFormatter from "./date-formatter"
import Image from "next/image"

type Props = {
  title: string
  coverImage?: string
  date: string
}

export default function PostHeader({ title, coverImage, date }: Props) {
  return (
    <>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>

      {coverImage && (
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
          className={"w-full h-full max-h-52 object-cover rounded-xl mb-20"}
          width={500}
          height={500}
        />
      )}

      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
