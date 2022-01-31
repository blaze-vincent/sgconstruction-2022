export default function ContactMethod({title, children}){
  return <div
    className="flex flex-col gap-2"
  >
    <h2
      className='text-2xl font-bold text-[#3E356E]'
    >{title}</h2>
    <div
      className="flex flex-col gap-1"
    >{children}</div>
  </div>
}