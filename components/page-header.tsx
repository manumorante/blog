import { config } from "@/config"
import Link from "next/link"

export default function LayoutHeader() {
  return (
    <section className="container flex-col lg:flex-row flex items-center lg:justify-between my-10 mb-16 lg:mb-12">
      <h1 className="text-4xl font-bold tracking-tighter leading-tight lg:pr-8">
        <Link href="/">
          <span className="opacity-60">{config.author.a}</span>
          <span>{config.author.b}</span>
        </Link>
      </h1>
      <h4 className="text-center lg:text-left text-lg opacity-60 mt-5 lg:pl-8">
        {config.slogan}
      </h4>
    </section>
  )
}
