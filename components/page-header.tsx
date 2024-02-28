import { config } from "@/config"
import Link from "next/link"

export default function LayoutHeader() {
  return (
    <section className="container flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/">
          <span className="opacity-60">{config.author.a}</span>
          <span>{config.author.b}</span>
        </Link>
      </h1>
      <h4 className="text-center md:text-left text-lg opacity-60 mt-5 md:pl-8">
        {config.slogan}
      </h4>
    </section>
  )
}
