import Banner from "../components/content/banner";
import BadgeSection from "../components/content/badgeSection/badgeSection";
import Carousel from "../components/content/carousel/carousel";
import Head from 'next/head'


export default function Home() {

  const imageObj={
    src: '/images/casino_construction.webp',
    alt: 'The SG crew constructing the Catfish Bend Casino.' ,
    title: 'Catfish Bend Casino construction'
  }
  const textObj={
    header: 'OUR MISSION',
    body: 'Satisfaction Guaranteed by our professionals committed to upholding the honesty and integrity of the construction industry; creating innovative solutions; ensuring quality and service for our customers!'
  }
  return (
    <article
      className="flex flex-col max-w-screen-2xl m-auto gap-8 my-8"
    >

    <Head>
      <title>Home :: SG Construction</title>
    </Head> 

      <Banner 
        imageObj={imageObj} 
        textObj={textObj}
      />
      <BadgeSection />
      <Carousel />
    </article>
  )
}
