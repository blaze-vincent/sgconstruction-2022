import Head from "next/head"
import Header from './header/header'
import Footer from './footer'

export default function Layout({children}){
  return (<div
      className="bg-neutral-300 min-h-screen flex flex-col overflow-visible"
    >
      <Head>
        <title>SG Construction</title>
        <meta name="description" content="SG Construction | Southeast Iowa General Contractors" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Header />

      <main
        className='min-h-screen'
      >{children}</main>

      <Footer />
    </div>)
}