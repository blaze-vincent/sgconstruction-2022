import {useState} from 'react'

export default function HamburgerButton({visible, sendHamburgerMenuSignal}){

  const [open, setOpen] = useState(false);

  return <button
    className={`
      hamburgerButton flex flex-col p-2 bg-neutral-400 gap-1 rounded-md border-white 
      border-solid border-[1px] right-2 hover:bg-neutral-600 transition-colors h-max justify-between
      ${visible || 'hidden'}
      `}
    onClick={_ => {
      sendHamburgerMenuSignal();
      setOpen(!open);
    }}
  >
    {
      [,,,].fill('').map((_, index) => <div key={index} className='w-4 h-[2px] bg-white' />)
    }
  </button>
}