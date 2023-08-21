import Footer from "./footer"
import Header from "./header"
import Head from "next/head"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta
          name="description"
          content="The blog of a web developer named Manu Morante."
        />
      </Head>

      <Header />
      <main className="Container">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
