export default function PageBadge({location, icon: {src, alt, title}, text: {header, body}}){
  return <a href={location}>
    <div
      className="w-max flex flex-col items-center md:items-start p-4 md:text-left text-center md:flex-row gap-2"
    >
      <div
        className="overflow-hidden 
        inline-flex flex-row items-center justify-center min-h-[5rem] h-20 min-w-[5rem] w-20 
        border-solid border-4 border-neutral-800 rounded-full"
      >
        <img 
          src={src} 
          alt={alt} 
          title={title}
          className="w-12 h-12 p-2 absolute"
        />
      </div>
      <div className="text-neutral-800 w-full">
        <p className="font-[Montserrat] font-sans font-bold text-lg">{header}</p>
        <p className="font-medium">{body}</p>
      </div>
    </div>
  </a>
}