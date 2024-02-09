'use client'

import { CarProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { CarDetailed, HeartButton } from ".";
import { generateCarImageUrl } from "@/utils";

interface CarCardProps {
    car: CarProps;
}
const CarCard = ({car}: CarCardProps) => {
    const { make, model, year, fuel_type, transmission, city_mpg  } = car
    const price = Math.floor((2024+year-city_mpg)/80)
    const [modalOpen, setModalOpen] = useState(false)
    const [heart, setHeart] = useState(false)
    
    return (
    <div className="car__card-container group">
        <div className="flex flex-col w-full">
            <div className="flex flex-row w-full justify-between">
                <h3 className="font-extrabold capitalize">
                    {make} {model} {year}
                </h3>
                <HeartButton heart={heart} closeHeart={() => setHeart(false)} openHeart={() => setHeart(true)}/>
            </div>
            <p className="text-slate-500">
                {car.class}
            </p>
        </div>
        <div className="relative w-full h-40 object-contain">
            <Image
                src={generateCarImageUrl(car)}
                alt='car'
                fill
                priority
                className="object-contain"
            />
        </div>
        <div className="relative flex w-full">
            <div className="flex flex-row justify-between w-full pad-x-default mt-1">
                <div className="flex flex-row gap-1 group-hover:invisible">
                    <Image
                        src='/fuel.svg'
                        alt='fuel logo'
                        height={10}
                        width={10}
                        className="object-contain"
                    />
                    <p className="text-[12px]">{city_mpg}</p>
                </div>
                <div className="flex flex-row gap-1 group-hover:invisible">
                    <Image
                        src='/transmission.svg'
                        alt='transmission logo'
                        height={10}
                        width={10}
                        className="object-contain"
                    />
                    <p className="text-[12px]">{transmission === 'a' ? 'automatic' : 'manual'}</p>
                </div>
                <div className="flex flex-row  group-hover:invisible">
                    <p className="font-bold text-[12px]">${price}</p><p className="text-[12px]">/day</p>
                </div>
            </div>
            <div className="car__card-modal-button">
                <button 
                    onClick={() => {setModalOpen(true)}}
                    className='rounded-full pt-1 pb-1 px-5 text-white bg-orange-300 text-[12px]'
                >
                    View More
                </button>
            </div>
           {/** */} <CarDetailed modalOpen={modalOpen} closeModal={()=> setModalOpen(false)} car={car}/>
        </div>
    </div>
    )
}

export default CarCard