export default function HamburgerMenu({collapsedLinks, activeRoute, visible}){
  return <div className={`bg-neutral-800 w-full left-0 bottom-0 flex flex-col items-center ${visible && 'block' || 'hidden'}`}>
    {Array.from(collapsedLinks).reverse().map((link, index) => {
      return <a 
        key={index} 
        href={link?.altLocation || link.name.toLowerCase()}
        className={`text-lg p-4 ${(link?.altLocation || `/${link.name.toLowerCase()}`) === activeRoute ? 'text-neutral-500' : 'text-neutral-300'}`}   
      >{link.name.toUpperCase()}</a>
    })}
  </div>
}