'use client';

import { CarDetailedProps } from '@/types'
import { generateCarImageUrl } from '@/utils';
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import React, { Fragment } from 'react'

const CarDetailed = ({ modalOpen, closeModal, car }:CarDetailedProps) => {
  return (
    <>
      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog as='div' onClose={closeModal} className="relative z-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className='fixed inset-0 bg-black bg-opacity-25'/>
          </Transition.Child>
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className='card__detailed-dialog'>
                <button
                  onClick={closeModal}
                  className='bg-slate-100 rounded-full p-1 absolute top-2 right-2 w-fit z-10'
                >
                  <Image
                src='/cross.svg'
                alt='cross'
                height={20}
                width={20}
                className="object-contain"
                />
                </button>
                <div className='flex-1 flex flex-col'>
                  <div className='relative w-full h-40 items-center rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 '>
                  <Image
                    src={generateCarImageUrl(car)}
                    alt='car'
                    priority
                    fill
                    className="object-contain"
                  />
                  </div>
                  <div className='flex flex-row mt-2 gap-2'>
                    <div className='flex-1 relative w-full h-24 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 '>
                      <Image
                        src={generateCarImageUrl(car, '29')}
                        alt='car'
                        priority
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className='flex-1 relative w-full h-24 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100'>
                      <Image
                        src={generateCarImageUrl(car, '33')}
                        alt='car'
                        priority
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className='flex-1 relative w-full h-24 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100'>
                      <Image
                        src={generateCarImageUrl(car, '13')}
                        alt='car'
                        priority
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className='flex flex-row gap-1 justify-between mt-2'>
                    <h1 className='capitalize font-extrabold text-[16px]'>{car.make} {car.model}</h1>
                    <div className='flex flex-row gap-3'>
                      <p className='text-orange-500'>4.5/5</p>
                      <Image
                        src='/star-orange-hi.png'
                        alt='orange star'
                        height={20}
                        width={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className='mt-5 flex flex-wrap gap-4'>
                    {Object.entries(car).map(([key, value]) => (
                      <div className='flex justify-between gap-5 w-full text-right' key={key} >
                        <h4 className='text-grey capitalize'>
                          {key.split("_").join(" ")}
                        </h4>
                        <p className='text-black-100 font-semibold'>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='flex justify-center'>
                  <button className='rounded-full pt-1 pb-1 px-5 text-white bg-orange-400 text-[16px]'>
                      Book Now
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetailed