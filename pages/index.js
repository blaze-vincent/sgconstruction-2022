import Banner from "../components/content/banner";
import BadgeSection from "../components/content/badgeSection/badgeSection";
import Carousel from "../components/content/carousel/carousel";

export default function Home() {
  return (
    <div
      className="flex flex-col max-w-screen-2xl m-auto gap-8 my-8"
    >
      <Banner 
        imageObj={{
          src: '/images/casino_construction.webp',
          alt: 'The SG crew constructing the Catfish Bend Casino.' ,
          title: 'Catfish Bend Casino construction'
        }} 
        textObj={{
          header: 'OUR MISSION',
          body: 'Satisfaction Guaranteed by our professionals committed to upholding the honesty and integrity of the construction industry; creating innovative solutions; ensuring quality and service for our customers!'
        }}
      />
      <BadgeSection />
      <Carousel />
    </div>
  )
}
