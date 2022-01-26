import { useEffect, useRef, useState } from "react"

export default function Navlink({link, activeRoute, scrolled, setHidden}){
  const [visible, setVisible] = useState(true);

  const containerEl = useRef(null)
  useEffect(_ => {
    const observer = new IntersectionObserver(([element]) => {
      setVisible(element.intersectionRatio === 1);
    }, {threshold: [1]})
    observer.observe(containerEl.current)
  }, [])

  useEffect(_ => {
    setHidden(link, !visible)
  }, [visible])

  return (<a
    ref={containerEl}
    className={
      `min-w-max text-lg font-medium drop-shadow-md shadow-neutral-400 justify-center hover:text-neutral-600
      ${!visible && 'invisible'} 
      ${(link?.altLocation || `/${link.name.toLowerCase()}`) === activeRoute ? 'text-neutral-600' 
      : scrolled ? 'text-neutral-400' : 'text-white'} 
      `
    }
    href={link?.altLocation || link.name.toLowerCase()}
  >
    {(link?.name || link).toUpperCase()}
  </a>)
}