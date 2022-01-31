import ContactMethod from '../components/content/contactMethod';
import Input from '../components/content/input'

export default function Contact(){
  return <div
    className="flex flex-col gap-8 max-w-[55rem] m-auto my-8 text-lg text-neutral-700 p-4"
  >
    <h1
      className="text-4xl font-bold m-auto text-neutral-800"
    >CONTACT US</h1>
    <div
      className="flex flex-col lg:flex-row gap-4 lg:items-start items-center"
    >
      <iframe 
        src='https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d48313.82273475531!2d-91.18110879149023!3d40.81447705599856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d40.801894399999995!2d-91.1065088!4m5!1s0x87e132e34f649e5b%3A0x1428e2ac4bed4da1!2s2204+W+Mt+Pleasant+St%2C+West+Burlington%2C+IA+52655!3m2!1d40.827082399999995!2d-91.1837546!5e0!3m2!1sen!2sus!4v1553788859379' 
        width={525}
        height={450}
      />

      <form
        className="flex flex-col gap-2 w-screen max-w-[25rem] p-4"
        onSubmit={e => {e.preventDefault(); console.log(e)}}
      >
        <Input type='text' name='name' labelText='Name' required={true} placeholderText='john doe'/>
        <Input type='tel' name='phone' labelText='Phone' required={true} placeholderText='000-000-0000'/>
        <Input type='email' name='email' labelText='Email' required={true} placeholderText='example@email.com'/>
        <Input type='textarea' name='message' labelText='Message' required={true} />
        <input type='submit' value='Submit'
          className="cursor-pointer bg-[#3E356E] hover:bg-[#272145] text-white mt-2 px-4 max-w-max rounded-full"
        />
      </form>
    </div>

    <div
      className='flex flex-col gap-4'
    >
      <ContactMethod title='Office'>
        <p>2204 W Mt. Pleasant St.</p>
        <p>West Burlington, IA 52655</p>
      </ContactMethod>
      <ContactMethod title='Phone'>
        <a href='tel:3197527154'>319.752.7154</a>
      </ContactMethod>
      <ContactMethod title='Email'>
        <a href='mailto:info@sgconstructco.com'>info@sgconstructco.com</a>
      </ContactMethod>
      <ContactMethod title='Fax'>
        <a href='fax:3197522911'>319.752.2911</a>
      </ContactMethod>
    </div>

  </div>
}