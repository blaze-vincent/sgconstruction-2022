export default function Banner({imageObj: {src, alt, title}, textObj: {header, body}}){
  return <div
    className="flex flex-row items-center content-center max-w-screen-2xl relative"
  >
    <img 
      src={src}
      alt={alt}
      title={title} 
      className='w-screen h-[30rem] m-auto object-cover object-bottom'  
    />
    <div className="absolute flex flex-row justify-center items-center w-full h-full">
      <div
        className="max-w-[35rem] h-max p-7 flex flex-col items-center bg-white text-[#3E356E] gap-4 rounded-lg"
      >
        <h2
          className="font-bold text-xl"
        >{header}</h2>
        <p
          className="font-medium"
        >{body}</p>
      </div>
    </div>
  </div>
}