import { data } from "@/data"
import Head from "next/head"
import { Footer, Header } from "@/components"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={data.slogan} />
      </Head>

      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
