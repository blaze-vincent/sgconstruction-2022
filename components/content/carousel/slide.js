export default function Slide({image: {src, alt, title}, text: {header, tag}, textPosition}){
  //text position
  //0   1
  //2   3
  const textPositions = {
    0: 'top-4 left-0',
    1: 'top-4 right-0',
    2: 'bottom-8 left-0',
    3: 'bottom-8 right-0',
  }

  return <div
    className="w-full h-full relative after:absolute after:w-full after:h-full after:bg-neutral-900 after:left-0 after:top-0 after:z-10 after:opacity-25"
  >
    <div
      className={`h-max w-max absolute p-4 drop-shadow-xl shadow-neutral-900 z-20
      ${textPositions[textPosition]}
      `}
    >
      <h3
        className="text-3xl font-semibold text-white "
      >{header}</h3>
      <p
        className="text-xl text-white font-extralight"
      >{tag}</p>
    </div>
    <img 
      src={src} 
      alt={alt} 
      title={title} 
      className="w-screen max-w-screen-xl h-full object-cover left-0 top-0"  
    />
  </div>
}