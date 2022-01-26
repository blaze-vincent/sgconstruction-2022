export default function Footer(){
  return (<div
    className="bg-neutral-900 py-6 px-3 text-white"
  >
    <div
      className="flex flex-col items-center gap-4
      sm:flex-row sm:justify-between 
      max-w-screen-xl m-auto"
    >
      <div
        className="flex flex-col gap-2 items-center"
      >
        <div
          className="flex flex-row gap-2 w-max"
        >
          <img
            alt='Facebook icon'
            src='/social/facebook_icon.svg'
            className="w-7 h-7"
          >
          </img>
          <img
            alt='LinkedIn icon'
            src='/social/linkedin_icon.svg'
            className="w-7 h-7"
          >
          </img>
        </div>
        <img
          alt='Butler General Contractor badge'
          src='/brand/butler_general_contractor.svg'
          title='Butler General Contractor'
          className="h-20"
        ></img>
        <p>© SG Construction Co.</p>
      </div>
      <div
        className="flex flex-col w-max gap-4 sm:items-start sm:text-left text-center items-center"
      >
        <div>
          <ul>
            <li>
              2204 W Mt Pleasant St.
              <br></br>
              West Burlington, IA 52655
            </li>
            <li>
              Phone: <a href='tel:3197527154'>319.752.7154</a>
            </li>
            <li>
              Email: <a href='mailto:info@sgconstructco.com'>info@sgconstructco.com</a>
            </li>
          </ul>
        </div>
        <div
          className="flex flex-row gap-1"
        >
          <input 
            type='text' 
            placeholder="Search"
            className="px-3 py-1 rounded-full w-[8rem] text-neutral-800"  
          /> 
          
          <button
            className="px-3 py-1 border-2 border-solid rounded-full"
          >SEARCH</button>
        </div>
      </div>
    </div>
  </div>)
}