import { data } from "@/data"
import Head from "next/head"
import { PageFooter, PageHeader } from "@/components"

type Props = {
  children: React.ReactNode
}

export default function Page({ children }: Props) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={data.slogan} />
      </Head>

      <PageHeader />
      <main className="container">{children}</main>
      <PageFooter />
    </>
  )
}
