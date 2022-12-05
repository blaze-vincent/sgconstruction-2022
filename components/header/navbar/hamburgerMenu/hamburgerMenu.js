import Link from "next/link"

export default function HamburgerMenu({collapsedLinks, activeRoute, visible}){
  return <div 
      className={`bg-neutral-800 w-full left-0 bottom-0 flex flex-col items-center ${visible && 'block' || 'hidden'}`}
      onClick={e => {e.stopPropagation()}}
    >
    {Array.from(collapsedLinks).sort((a, b) => (a.order > b.order) ? 1 : -1).map((link, index) => {
      return <Link
        key={index} 
        href={link?.altLocation || link.name.toLowerCase()}
      >
        <a 
          className={`text-lg p-4 ${(link?.altLocation || `/${link.name.toLowerCase()}`) === activeRoute ? 'text-neutral-500' : 'text-neutral-300'}`}   
        >{link.name.toUpperCase()}</a>
      </Link>
    })}
  </div>
}