import Head from "next/head"

const Meta = () => {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content="The blog of a web developer named Manu Morante."
      />
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
    </Head>
  )
}

export default Meta
