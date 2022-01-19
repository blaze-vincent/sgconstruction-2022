import Navbar from "./navbar/navbar"
import { useRef, useEffect, useState } from "react"

export default function Header(){

  const [scrolled, setScrolled] = useState(false);
  const containerEl = useRef(null)
  useEffect(_ => {
    const observer = new IntersectionObserver(([element]) => {
      setScrolled(window.scrollY > 0)
    }, {threshold: [1]})
    observer.observe(containerEl.current)
  }, [])
  
  return (<div
    ref={containerEl}
    className={
      `flex flex-row gap-8 items-center sticky top-[-1px] h-auto transition-all 
      ${scrolled && 'bg-white'}
      `
    }
  >
    <img
      className="h-[5rem] p-3"
      src='/logo.svg' 
      alt="SG Construction Company and Butler General Contractors logos"
    />

    <Navbar scrolled={scrolled} />
  </div>)
}