import Header from './header/header'
import Footer from './footer'

export default function Layout({children}){
  return (<div
      className="bg-neutral-300 min-h-screen flex flex-col overflow-visible"
    >
      <Header />
      <main
        className='min-h-screen'
      >{children}</main>

      <Footer />
    </div>)
}