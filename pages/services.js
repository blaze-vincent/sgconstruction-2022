import Service from "../components/content/service";
import Head from 'next/head'

export default function Services(){

  const services = [
    {
      image: {
        url: "/images/coldstone.webp",
        alt: "The finished Cold Stone Creamery storefront",
        title: "Cold Stone Creamery"
      },
      text: {
        header: "General Contracting",
        body: "As your general contractor, S.G. Construction will be responsible for the day-to-day oversight of a construction site, management of vendors and trades, and the communication of information to all involved parties throughout the course of a building project."  
      }
    },
    {
      image: {
        url: "/images/butler_steel.webp",
        alt: "An array of mid-construction Butler Steel frames with scattered construction equipment.",
        title: "Butler Steel frames"
      },
      text: {
        header: "Butler Builder",
        body: "Since becoming a Butler Builder in '89, S.G. Construction has gained experience in projects with a broad range of size, design, and unique construction challenges. Using our experience gained over many years, we will be able to provide you with the best possible Butler Builder services for any size job. "  
      },
      followupLink: {
        href: 'http://www.butlermfg.com/products/',
        followupText: 'Check out what Butler has to offer here!'
      }
    },
    {
      image: {
        url: "/images/wallframes.webp",
        alt: "A mostly-bare wooden house frame occupied with a few scattered drywall sheets",
        title: "Wooden house frame"
      },
      text: {
        header: "Carpentry",
        body: "S.G. Construction Company is no stranger to Carpentry. We take pride in providing you with commercial or industrial carpentry services that are quick, reliable, and cost effective. We have had a lot of experience with carpentry throughout the years and can help you get your place of business constructed and ready for customers in no time."  
      }
    },
    {
      image: {
        url: "/images/concrete.webp",
        alt: "A freshly poured concrete driveway drying in front of the ImpactLife Burlington location. Lowes is visible in the background.",
        title: "ImpactLife concrete driveway"
      },
      text: {
        header: "Concrete",
        body: "Extreme weather conditions coupled with daily wear and tear can take a toll on your commercial concrete over time. Cracks, potholes and broken edges are some of the problems that usually follow. You don’t have to worry! We can fix these issues by installing concrete flatwork. It's eco-friendly and also lasts longer than other construction materials."  
      }
    },
    {
      image: {
        url: "/images/metal_frames.webp",
        alt: "The Butler Steel frame of a warehouse bare of walls or windows.",
        title: "Butler Steel framing"
      },
      text: {
        header: "Pre-Engineered Steel",
        body: "S.G. Construction is dedicated to being proficient and efficient in erecting your Pre-Engineered Steel buildings and has many years of experience in doing so. Our engineers are up to unique challenges and willing to take on most any job."  
      }
    },
    {
      image: {
        url: "/images/casino_i_beams.webp",
        alt: "Butler Steel I beams frame the construction of the Catfish Bend Casino. A forklift and a flatbed truck are visible in between the beams.",
        title: "Cold Stone Creamery"
      },
      text: {
        header: "Conventional Steel",
        body: "S.G. Construction is ready and able to help you get your conventional steel building constructed no matter the size or uniqueness of the challenge. We have many years of experience in steelwork and will use our wide knowledge and experience in erecting your building."  
      }
    },
  ]

  return <div
    className="flex flex-col gap-8 max-w-[55rem] m-auto my-8 text-lg text-neutral-700"
  >

    <Head>
      <title>Services :: SG Construction</title>
    </Head> 

    <div className="text-center flex flex-col gap-4">
      <h1
        className="text-4xl font-bold m-auto text-neutral-800"
      >Construction Services</h1>
      <h2
        className="text-xl font-medium m-auto text-neutral-800"
      >Since our beginnings, S.G. has been committed to providing quality service in every way!</h2>
    </div>


      {services.map((service, index) => <Service
        key={index}
        image={service.image}
        text={service.text}
        followupLink={service.followupLink || {}}
        flip={index % 2}
      />)}
    
    
  </div>
}