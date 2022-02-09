import { useRef, useState } from "react"
import { useEffect } from "react"
import Slide from "./slide"

export default function Carousel(){

  const slides = [
    {
      image: {
        src: '/images/ashley.webp',
        alt: 'The Ashley Homestore Burlington location entrance is seen from across an empty parking lot.',
        title: 'Ashley Homestore'
      },
      text: {
        header: 'Ashley Homestore',
        tag: 'Commercial'
      }
    },
    {
      image: {
        src: '/images/blackhawk_tower.webp',
        alt: 'The Blackhawk Towers are seen from across the parking lot, where several cars are parked.',
        title: 'Blackhawk Towers'
      },
      text: {
        header: 'SCC Blackhawk Towers',
        tag: 'Dormitory'
      },
      textPosition: 0
    },
    {
      image: {
        src: '/images/flood_mitigation.webp',
        alt: 'An overhead view of the divide between Burlington and the Mississippi River.',
        title: 'Flood Mitigation'
      },
      text: {
        header: 'Flood Mitigation - Burlington, IA',
        tag: 'Civil'
      },
      textPosition: 3
    },
    {
      image: {
        src: '/images/silgan.webp',
        alt: 'An unoccupied blue bench is seen in front of a building labelled Silgan',
        title: 'Silgan'
      },
      text: {
        header: 'Silgan Containers',
        tag: 'Industrial'
      },
      textPosition: 1
    }
  ]

  const scrollerEl = useRef(null)

  const [slideShown, setSlideShown] = useState(0)
  const scroll = function(slide){
    if(slide < 0){
      slide = slides.length - 1
    }
    if(slide > slides.length - 1){
      slide = 0
    }
    setSlideShown(slide)
  }
  useEffect(_ => {
    scrollerEl.current.style.transform = `translateX(-${slideShown * 100}%)`;
    const effect = setTimeout(_ => {
      scroll(slideShown + 1)
    }, 5000)
    return _ => clearTimeout(effect)
  }, [slideShown])

  return <div
    className="relative max-w-screen-xl w-screen m-auto h-[35rem] max-h-[80vh] overflow-x-hidden"
  >
    <div
      ref={scrollerEl}
      className="flex flex-row transition-transform h-full"
    >
      {slides.map((obj, index) => {
        return <Slide key={index} image={obj.image} text={obj.text} textPosition={obj.textPosition || index}/>
      })}
    </div>
    
    {/*slide buttons*/}
    <div
      className="absolute bottom-2 flex items-center flex-row w-full justify-between px-4"
    >
      <img
        alt='Chevron button for selecting the previous image.'
        src='/generic/chevron.svg' 
        className="rounded-full min-h-8 min-w-8 w-8 h-8 rotate-180 cursor-pointer"
        onClick={_ => {
          scroll(slideShown - 1)
        }}
      />
      <div
        className="flex flex-row gap-2"
      >
        {new Array(slides.length).fill('').map((item, index) => {
          return <button 
            key={index} 
            className={`rounded-full min-h-3 min-w-3 w-3 h-3 block border-solid bg-white  hover:bg-neutral-600
              ${(slideShown === index) ? 'opacity-100' : 'opacity-25'}
            `} 
            onClick={_ => {
              scroll(index)
            }}
          />
        })}
      </div>
      
      <img
        alt='Chevron button for selecting the next image.'
        src='/generic/chevron.svg' 
        className="rounded-full min-h-8 min-w-8 w-8 h-8 cursor-pointer"
        onClick={_ => {
          scroll(slideShown + 1)
        }}
      />
    </div>
  </div>
}