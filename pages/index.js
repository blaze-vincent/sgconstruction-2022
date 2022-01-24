import Banner from "../components/content/banner";

export default function Home() {
  return (
    <>
      <Banner 
        imageObj={{
          src: '/casino_construction.webp',
          alt: 'The SG crew constructing the Catfish Bend Casino.' ,
          title: 'Catfish Bend Casino construction'
        }} 
        textObj={{
          header: 'OUR MISSION',
          body: 'Satisfaction Guaranteed by our professionals committed to upholding the honesty and integrity of the construction industry; creating innovative solutions; ensuring quality and service for our customers!'
        }}
      />
    </>
  )
}
