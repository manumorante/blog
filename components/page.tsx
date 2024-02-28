import { config } from "@/config"
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
        <meta name="description" content={config.slogan} />
      </Head>

      <PageHeader />
      <main className="container">{children}</main>
      <PageFooter />
    </>
  )
}
