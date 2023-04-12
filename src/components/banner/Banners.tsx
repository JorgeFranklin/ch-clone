'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Circle } from 'lucide-react'
import { Banners as Banner } from '@prisma/client'

export type BannersProps = {
  banners: Banner[]
}

const Banners = ({ banners }: BannersProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? banners.length - 1 : currentIndex - 1

    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === banners.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1

    setCurrentIndex(newIndex)
  }

  return (
    <div className="h-[780px] m-auto relative group">
      <div
        style={{ backgroundImage: `url(${banners[currentIndex].url})` }}
        className="h-full rounded-xl rounded-br-2xl bg-center bg-cover duration-500"
      />
      <div
        onClick={prevSlide}
        className="opacity-0 max-xl:opacity-100 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white"
      >
        <ArrowLeft size={30} />
      </div>
      <div
        onClick={nextSlide}
        className="opacity-0 max-xl:opacity-100 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white"
      >
        <ArrowRight size={30} />
      </div>

      <div className="flex items-center justify-center gap-4 h-16 text-white">
        {banners.map(({}, index) => {
          if (index === currentIndex) {
            return (
              <Circle
                key={index}
                fill="#fff"
                strokeWidth={4}
                className="rounded-full"
                size={13}
              />
            )
          }

          return (
            <Circle
              key={index}
              strokeWidth={3}
              className="rounded-full cursor-pointer"
              size={13}
              onClick={() => setCurrentIndex(index)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Banners
