import { useEffect, useRef, useState } from "react"
import Link from "next/link";

export default function Navlink({link, activeRoute, scrolled, setHidden}){
  const [visible, setVisible] = useState(true);

  const containerEl = useRef(null)
  useEffect(_ => {
    const observer = new IntersectionObserver(([element]) => {
      setVisible(element.isIntersecting);
    }, {root: containerEl.current.closest('nav'), threshold: [1]})
    observer.observe(containerEl.current)
  }, [])

  useEffect(_ => {
    setHidden(link, !visible)
  }, [visible])

  return (<Link
    href={link?.altLocation || link.name.toLowerCase()}
  >
    <a
      ref={containerEl}
      className={
        `min-w-max text-lg font-medium drop-shadow-md shadow-neutral-400 justify-center hover:text-neutral-600
        ${!visible && 'invisible'} 
        ${(link?.altLocation || `/${link.name.toLowerCase()}`) === activeRoute ? 'text-neutral-600' 
        : scrolled ? 'text-neutral-400' : 'text-white'} 
        `
      }
    >
      {(link?.name || link).toUpperCase()}
    </a>
  </Link>)
}