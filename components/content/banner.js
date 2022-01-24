export default function Banner({imageObj: {src, alt, title}, textObj: {header, body}}){
  return <div
    className="flex flex-row items-center max-w-screen-2xl m-auto relative"
  >
    <img 
      src={src}
      alt={alt}
      title={title} 
      className='w-full h-[30rem] max-w-screen-2xl m-auto object-cover object-bottom'  
    />
    <div
      className=" w-[35rem] p-8 flex flex-col items-center bg-white text-[#3E356E] absolute"
    >
      <h2
        className="font-bold text-xl"
      >{header}</h2>
      <p>{body}</p>
    </div>
  </div>
}