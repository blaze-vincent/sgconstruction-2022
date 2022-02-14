import Input from "../components/content/input";
import { useState } from 'react'
import Head from 'next/head'

export default function Careers(){

  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [birthday, setBirthday] = useState('')
  const [positions, setPositions] = useState('')
  const [experience, setExperience] = useState('')

  return <article
    className="flex flex-col gap-8 max-w-[55rem] m-auto my-8 text-lg text-neutral-700 p-4"
  >
    <Head>
      <title>Careers :: SG Construction</title>
    </Head> 
    <h1
      className="text-4xl font-bold m-auto text-neutral-800"
    >JOIN OUR TEAM!</h1>
    
    <div
      className="flex flex-col lg:flex-row gap-4 lg:items-start items-center"
    >
      <section
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
      </section>

      <section>
        <form
          className="flex flex-col gap-2 w-screen max-w-[25rem] p-4"
          onSubmit={e => {
            e.preventDefault()
            window.location.href = `
            mailto:info@sgconstructco.com?subject=Application%20Form&body=Name%3a%20${encodeURIComponent(name)}%0a${startDate && `Available%20Start%20Date%3a%20${encodeURIComponent(startDate)}%0a`}Email%20Address%3a%20${encodeURIComponent(email)}%0aPhone%20Number%3a%20${encodeURIComponent(phone)}%0a${birthday && `Birthday%3a%20${encodeURIComponent(birthday)}%0a`}Positions%20of%20Interest%3a%20${encodeURIComponent(positions)}%0aConstruction%20Experience%3a%20${encodeURIComponent(experience)}
            `
          }}
        >
          <Input type='text' name='name' labelText='Name' required={true} placeholderText='john doe' value={name} onChange={e => setName(e.target.value)}/>
          <Input type='date' name='startDate' labelText='Available Start Date' required={false} value={startDate} onChange={e => setStartDate(e.target.value)}/>
          <Input type='email' name='email' labelText='Email' required={true} placeholderText='example@email.com' value={email} onChange={e => setEmail(e.target.value)}/>
          <Input type='tel' name='phone' labelText='Phone' required={true} placeholderText='000-000-0000' value={phone} onChange={e => setPhone(e.target.value)}/>
          <Input type='date' name='birthday' labelText='Date of Birth' required={false} value={birthday} onChange={e => setBirthday(e.target.value)}/>
          <Input type='text' name='positions' labelText='Positions of Interest' required={true} placeholderText='framing, finishing' value={positions} onChange={e => setPositions(e.target.value)}/>
          <Input type='text' name='experience' labelText='Your Construction Experience...' required={true} placeholderText='have used a speed square once' value={experience} onChange={e => setExperience(e.target.value)}/>
          <input type='submit' value='Submit'
            className="cursor-pointer bg-sgpurple-500 hover:bg-sgpurple-700 text-white mt-2 px-4 max-w-max rounded-full"
          />
        </form>
      </section>
    </div>
  </article>
}