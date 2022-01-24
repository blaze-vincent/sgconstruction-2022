import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import Navlink from "./navlink"

export default function Navbar({scrolled, setCollapsedLinks, collapsedLinks, activeRoute}){

  const [navlinks, setNavlinks] = useState(new Set([
    {
      name: 'Home',
      altLocation: '/',
    },
    {
      name: 'About'
    },
    {
      name: 'Services'
    },
    {
      name: 'Projects'
    },
    {
      name: 'Butler Building',
      altLocation: '/butler-building'
    }, 
    {
      name: 'Careers'
    },
    {
      name: 'Contact'
    }
  ]))
  const setCollapsed = (navlink, hidden = true) => {
    if(hidden){
      setCollapsedLinks(new Set(collapsedLinks).add(navlink))
    } else {
      setCollapsedLinks(new Set(Array.from(collapsedLinks).filter(link => link !== navlink)))
    }
  }

  return <nav
    className="flex flex-row gap-4 overflow-hidden items-center relative"
  >
    {Array.from(navlinks).map((link, index) => {
      return <Navlink setHidden={setCollapsed} link={link} offset={index+10} activeRoute={activeRoute} key={index} scrolled={scrolled}/>
    })}
  </nav>
}