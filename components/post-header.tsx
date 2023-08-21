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
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-3">
        {title}
      </h1>

      <div className="opacity-60 mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div>

      {coverImage && (
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
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
