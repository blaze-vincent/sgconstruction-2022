import ButlerBadge from "../components/svgs/butlerBadge";

export default function ButlerBuilding(){
  return <div
    className="flex flex-col gap-8 max-w-[55rem] m-auto my-8 text-lg text-neutral-700 p-4"
  >
    <div className="text-center flex flex-col gap-4">
      <h1
        className="text-4xl font-bold m-auto text-neutral-800 hyphens"
      >Butler Manufac&shy;turing&trade;</h1>
    </div>

    <div
      className="flex flex-col-reverse lg:flex-row gap-4 items-center lg:items-start"
    >
      <div className="flex flex-col gap-4">
        <p>
          The amazing style, versatility, and affordability of Butler&reg; buildings make them the logical choice for a variety of commercial facilities. Whether you’re looking for a simple building solution, a retrofit roof, or a multiple building complex, Butler buildings offer a fast, affordable, architecturally appealing, and environmentally-friendly solution with many significant advantages. The benefits a Butler&reg; building system are numerous and so are the advantages of working with S.G. Construction as your turnkey provider of building construction.
        </p>
        <h2
          className="text-sgpurple-500 text-2xl font-bold"
        >S.G. Construction is your local Butler Builder&reg;</h2>
      </div>
      <ButlerBadge href="https://www.butlermfg.com/" className={'fill-sgpurple-500 hover:fill-sgpurple-700 w-[100rem] h-auto'}/>
    </div>
    <p>
    At S.G. Construction, we are proud to be your local Butler Builder&reg; representing the world’s leading producer of building solutions – Butler Manufacturing™. We are your experienced local construction partner from conceptual design to final landscaping no matter what type of facility you are trying to build.
    </p>

    <h3
      className="text-3xl font-bold text-neutral-700"
    >Our services include:</h3>
    <ul
      className="list-disc pl-4"
    >
      <li>Budgeting and expert Butler&reg; building design consultation</li>
      <li>Preconstruction services</li>
      <li>Complete construction management services, from permitting to punch out</li>
    </ul>
    <p>
      With many building projects under our belt, S.G. Construction brings together local construction knowledge with a world class building solutions company. Our commitment is to provide every customer with an exceptional experience for their construction project.
    </p>

    <h3
      className="text-3xl font-bold text-neutral-700"
    >Butler&reg; is the world’s leading producer of steel building systems.</h3>
    <p>
      Butler&reg; has more than 100 years of experience and is the world’s leading producer of building systems solutions. Ideal for manufacturing, athletic, religious and community facilities, Butler&reg; building and roof systems offer superior performance, aesthetically pleasing design options, and proven sustainability attributes.
    </p>

    <h3
      className="text-3xl font-bold text-neutral-700"
    >Consider teaming with S.G. Construction and Butler&reg; Manufacturing building systems for your next project.</h3>
  </div>
}