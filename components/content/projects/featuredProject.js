export default function FeaturedProject({title, body}){
  return <div
    className="flex lg:flex-row flex-col items-center lg:items-start gap-4 p-4 bg-white"
  >
  <div
  className="flex flex-col gap-4 items-center">
    <h2
      className="text-2xl font-bold m-auto text-neutral-800"
    >Featured Project: {title}</h2>
    <p
      className="flex-grow"
    >{body}</p>
  </div>
  <video src="/blackhawk-tower.mp4" type="video/mp4" width="640" height="480" controls={true} />
  </div>
}