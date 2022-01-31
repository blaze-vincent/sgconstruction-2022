export default function Service({image: {url, alt, title}, text: {header, body}, followupLink={href:'', followupText:''}, flip = false}){
  
  const highResUrl =  url.split('.').join('_hq.')
  
  return <div
    className={`flex ${flip ? 'flex-row-reverse' : 'flex-row'} gap-4 w-full items-center flex-wrap sm:flex-nowrap justify-center sm:justify-between`}
  >
    <a
      href={highResUrl}
    >
      <img 
        className="object-cover"
        width={350}
        height={225}
        src={url}
        alt={alt}
        title={title}
      />
    </a>
    <div
      className="flex flex-col gap-4 w-full p-2"
    >
      <h3
        className="text-2xl font-bold m-auto text-neutral-700"
      >{header}</h3>
      <p
        className="p-2"
      >{body}{followupLink.followupText && <a
        href={followupLink.href}
        className="font-semibold underline"
      >{followupLink.followupText}</a>}</p>
    </div>
  </div>
}