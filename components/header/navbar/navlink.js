import { useEffect, useRef, useState } from "react"

export default function Navlink({link, activeRoute, scrolled}){
  const [visible, setVisible] = useState(true);

  const containerEl = useRef(null)
  useEffect(_ => {
    const observer = new IntersectionObserver(([element]) => {
      setVisible(element.intersectionRatio === 1);
    }, {threshold: [1]})
    observer.observe(containerEl.current)
  }, [])

  return (<a
    ref={containerEl}
    className={
      `min-w-max text-lg font-medium drop-shadow-md shadow-neutral-400 
      ${!visible && 'invisible'} 
      ${(link?.location || `/${link.toLowerCase()}`) === activeRoute ? 'text-neutral-600' 
      : scrolled ? 'text-neutral-400' : 'text-white'} 
      `
    }
    href={link?.location || link.toLowerCase()}
  >
    {(link?.name || link).toUpperCase()}
  </a>)
}