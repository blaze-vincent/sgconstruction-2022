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
    className="w-full h-full relative"
  >
    <div
      className={`h-max w-max absolute p-4
      ${textPositions[textPosition]}
      `}
    >
      <h3
        className="text-3xl font-semibold text-white drop-shadow-md shadow-transparent"
      >{header}</h3>
      <p
        className="text-xl text-white drop-shadow-lg font-extralight shadow-transparent"
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