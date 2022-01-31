export default function Project({title, body}){
  return (<div
    className="flex flex-col gap-4 items-center"
  >
    <h3
      className="text-xl font-bold m-auto text-neutral-700"
    >{title}</h3>
    <p>{body}</p>
  </div>)
}