import { useState } from "react"
import { useRouter } from "next/router"
import Navlink from "./navlink"

export default function Navbar({scrolled}){

  const navlinks = [
    //if navlink is a string, the name (toLowercase) is the url
    {
      name: 'Home',
      location: '/',
    },
    'About', 
    'Services', 
    'Projects', 
    {
      name: 'Butler Building',
      location: '/butler-building'
    }, 
    'Careers', 
    'Contact'
  ]

  const router = useRouter()
  const [activeRoute, setActiveRoute] = useState(router.pathname)

  return <nav
    className="flex flex-row gap-4 overflow-hidden"
  >
    {navlinks.map((link, index) => {
      return <Navlink link={link} activeRoute={activeRoute} key={index} scrolled={scrolled}/>
      
    })}
  </nav>
}