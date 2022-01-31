import Input from "../components/content/input";

export default function Careers(){
  return <div
    className="flex flex-col gap-8 max-w-[55rem] m-auto my-8 text-lg text-neutral-700 p-4"
  >
    <h1
      className="text-4xl font-bold m-auto text-neutral-800"
    >JOIN OUR TEAM!</h1>
    <div
      className="flex flex-col lg:flex-row gap-4 lg:items-start items-center"
    >
      <div
        className="flex flex-col gap-4 items-start"
      >
        <p>
          S.G. Construction understands happy employees are the lifeline of our business. We believe everyone deserves a chance to grow in their career. Our atmosphere provides this opportunity to excel and grow!  
        </p>
        <h2
          className="text-2xl font-bold  text-neutral-700"
        >General Openings:</h2>
        <ul
        className="list-disc pl-4"
        >
          <li>Carpenters - Framers & Finishers</li>
          <li>Ironwork - Structural Steel & Metal Sheeting</li>
          <li>Concrete - Finishers & Laborers</li>
          <li>Internship Program</li>
        </ul>

        <p>Please submit this form if you are interested in any of the above positions!</p>
      </div>

      <form
        className="flex flex-col gap-2 w-screen max-w-[25rem]"
        onSubmit={e => {e.preventDefault(); console.log(e)}}
      >
        <Input type='text' name='name' labelText='Name' required={true} placeholderText='john doe'/>
        <Input type='date' name='startDate' labelText='Available Start Date' required={false}/>
        <Input type='email' name='email' labelText='Email' required={true} placeholderText='example@email.com'/>
        <Input type='tel' name='phone' labelText='Phone' required={true} placeholderText='000-000-0000'/>
        <Input type='date' name='birthday' labelText='Date of Birth' required={false} />
        <Input type='text' name='positions' labelText='Positions of Interest' required={true} placeholderText='framing, finishing'/>
        <Input type='text' name='experience' labelText='Your construction experience...' required={true} placeholderText='have used a speed square once'/>
        <input type='submit' value='Submit'
          className="cursor-pointer bg-[#3E356E] hover:bg-[#272145] text-white mt-2 px-4 max-w-max rounded-full"
        />
      </form>
    </div>
  </div>
}