'use client'

import next from "next";
import Image from "next/image"

const Hero = () => {
    const handleScroll = () => {
        const carSection = document.getElementById("cars");

        if (carSection) {
            carSection.scrollIntoView({behavior: "smooth"})
        }
    }
    return (
        <div className="flex xl:flex-row flex-col z-0 max-w-[1440px] mx-auto justify-center mt-2">
            <div className="flex-1 l:pt-36 pt-20 pad-x-default" >
                <h1 className="text-[40px] sm:text-[50px] font-bold">
                    Accompany your Journey with Comfort
                </h1>
                <p className="grey font-light text-[27px]">
                    Car rental services for various needs with guranteed quality
                </p>
                <button 
                    className="rounded-full text-white bg-orange-300 mt-6 pt-1 pb-1 px-3"
                    onClick={handleScroll}
                >
                    View Cars
                </button>
            </div>
            <div className="flex flex-1 justify-end items-end mt-10">
                <div className="relative w-[90%] h-[400px]  z-0">
                    <Image src='/rectangle.svg' alt='orange rectangle' fill className="object-contain"/>
                    <Image src='/white-audi.png' alt='hero car image' fill className="object-contain"/>
                </div>
                
            </div>
        </div>
  )
}

export default Hero