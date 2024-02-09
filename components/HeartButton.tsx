import { HeartButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const HeartButton = ({ heart, closeHeart, openHeart }: HeartButtonProps) => {
  return (
    <button onClick={heart ? (closeHeart) : (openHeart)}>
        <div>
            {heart ? (
                <Image
                src='/heart-red.svg'
                alt='fuel logo'
                height={20}
                width={20}
                className="object-contain"
                />
            ) : (
                <Image
                src='/heart-rounded.svg'
                alt='fuel logo'
                height={20}
                width={20}
                className="object-contain"
                />
            )}
        </div>
    </button>
  )
}

export default HeartButton