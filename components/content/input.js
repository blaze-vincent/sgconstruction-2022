export default function Input({type, labelText, name, required, placeholderText}){
  return <div className="flex flex-col w-full">
    <div className="flex flex-row gap-2 items-center justify-start">
      <label 
        htmlFor={name}
        className="bg-neutral-400 px-2 rounded-t-md text-neutral-900 max-w-max"  
      >{labelText}</label>
      {required && <span
        className="text-neutral-600 text-sm"
      >required</span>}
    </div>
    {type === 'textarea'
    ? <textarea
        rows={4}
        className="resize-none px-2 py-1 border-solid border-neutral-400 border-2"
        placeholder="write your message here"
      />
    : <input 
      type={type} 
      name={name} 
      required={required} 
      placeholder={placeholderText}
      className="px-2 py-1 border-solid border-neutral-400 border-2"
    />
    }
  </div>
}