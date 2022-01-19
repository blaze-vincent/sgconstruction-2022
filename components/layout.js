import Head from "next/head"
import Header from './header/header'
import Footer from './footer'

export default function Layout({children}){

  

  return (<div
      className="bg-neutral-300 min-h-screen flex flex-col overflow-visible"
    >
      <Head>
        <title>nextjs w/ tailwindcss</title>
        <meta name="description" content="bv nextjs template with tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </div>)
}