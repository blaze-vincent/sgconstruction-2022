import Banner from "../components/content/banner";
import PageBadge from "../components/content/badgeSection/pageBadge";
import BadgeSection from "../components/content/badgeSection/badgeSection";

export default function Home() {
  return (
    <div
      className="flex flex-col max-w-screen-2xl m-auto gap-8"
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
    </div>
  )
}
