import { useState } from "react"
import Navlink from "./navlink"
import Head from 'next/head'
import { useEffect } from "react"

export default function Navbar({scrolled, setCollapsedLinks, collapsedLinks, activeRoute}){

  const [navlinks, setNavlinks] = useState(new Set([
    {
      order: 0,
      name: 'Home',
      altLocation: '/',
    },
    {
      order: 1,
      name: 'About'
    },
    {
      order: 2,
      name: 'Services'
    },
    {
      order: 3,
      name: 'Projects'
    },
    {
      order: 4,
      name: 'Butler Building',
      altLocation: '/butler-building'
    }, 
    {
      order: 5,
      name: 'Careers'
    },
    {
      order: 6,
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

  const [activeLinkName, setActiveLinkName] = useState('')
  useEffect(_ => {
    const activeLinkObj = Array.from(navlinks).find(link => (link?.altLocation || `/${link.name.toLowerCase()}`) === activeRoute)
    setActiveLinkName(activeLinkObj.name)
  }, [])

  return <nav
    className="flex flex-row gap-4 overflow-hidden items-center relative "
  >
    <Head>
      <title>{activeLinkName} :: SG Construction</title>
    </Head>
    {Array.from(navlinks).map((link, index) => {
      return <Navlink setHidden={setCollapsed} link={link} offset={index+10} activeRoute={activeRoute} key={index} scrolled={scrolled}/>
    })}
  </nav>
}