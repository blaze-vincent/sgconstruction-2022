import Navbar from "./navbar/navbar"
import { useRef, useEffect, useState } from "react"
import HamburgerButton from "./navbar/hamburgerMenu/hamburgerButton";
import { useRouter } from "next/router"
import HamburgerMenu from "./navbar/hamburgerMenu/hamburgerMenu";
import CompanyLogo from "../svgs/companyLogo";

export default function Header(){

  const [scrolled, setScrolled] = useState(false);
  const containerEl = useRef(null)
  useEffect(_ => {
    window.onscroll = _ => {setScrolled(!!window.scrollY)} //convert to bool
  }, [containerEl])

  const [collapsedLinks, setCollapsedLinks] = useState(new Set([]))

  const router = useRouter()
  const [activeRoute, _] = useState(router.pathname)

  const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);
  const sendHamburgerMenuSignal = function(){
    setHamburgerMenuVisible(!hamburgerMenuVisible);
  }
  const [hamburgerButtonVisible, setHamburgerButtonVisible] = useState(false);
  useEffect(_ => {
    setHamburgerButtonVisible(Array.from(collapsedLinks).length > 0)
  }, [collapsedLinks])

  return (<div className="sticky -top-px z-50 drop-shadow-md">
    <div
      ref={containerEl}
      className={
        `h-auto transition-colors
        ${scrolled && 'bg-white'}
        `
      }
    >    
      <div className="p-3 max-w-screen-xl justify-between m-auto flex flex-row gap-4 items-center">
        <CompanyLogo href='/' className='fill-sgpurple-500 hover:fill-sgpurple-700 w-[12rem] min-w-[12rem] overflow-visible h-auto' />

        <Navbar scrolled={scrolled} collapsedLinks={collapsedLinks} setCollapsedLinks={setCollapsedLinks} activeRoute={activeRoute}/>
        <HamburgerButton visible={hamburgerButtonVisible} collapsedLinks={collapsedLinks} sendHamburgerMenuSignal={sendHamburgerMenuSignal}/>
      </div>
    </div>
    <HamburgerMenu collapsedLinks={collapsedLinks} activeRoute={activeRoute} visible={hamburgerMenuVisible}/>
  </div>)
}