import ButlerBadge from './svgs/butlerBadge'
import FacebookLogo from './svgs/facebookLogo'
import LinkedinLogo from './svgs/linkedinLogo'

export default function Footer(){
  return (<div
    className="bg-neutral-900 py-6 px-3 text-white"
  >
    <div
      className="flex flex-col sm:items-start items-center gap-4
      sm:flex-row sm:justify-between 
      max-w-screen-xl m-auto"
    >
      <div
        className="flex flex-col gap-2 items-center"
      >
        <div
          className="flex flex-row gap-2 w-max"
        >
          <FacebookLogo href='https://www.facebook.com/sgconstructco' className='overflow-visible w-7 h-7 fill-white hover:fill-neutral-400'/>
          <LinkedinLogo href='https://www.linkedin.com/company/sgconstructco' className='overflow-visible w-7 h-7 fill-white hover:fill-neutral-400' />
        </div>
        <ButlerBadge href='https://www.butlermfg.com/' className='fill-white w-40 h-auto hover:fill-neutral-400'/>
      </div>
      <div
        className='flex flex-col w-max sm:items-start sm:text-left text-center items-center gap-4'
      >
        <ul>
          <li>
            2204 W Mt Pleasant St.
            <br></br>
            West Burlington, IA 52655
          </li>
          <li>
            Phone: <a className='hover:text-neutral-400' href='tel:3197527154'>319.752.7154</a>
          </li>
          <li>
            Email: <a className='hover:text-neutral-400' href='mailto:info@sgconstructco.com'>info@sgconstructco.com</a>
          </li>
        </ul>
        <p>&copy; SG Construction Co.</p>
      </div>
    </div>
  </div>)
}