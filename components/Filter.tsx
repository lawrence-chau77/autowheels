'use client'

import { CustomFilterProps, FilterProps } from "@/types"
import { Listbox, Transition } from "@headlessui/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Fragment, useState } from "react"

const Filter = ({ title, options}: CustomFilterProps) => {
  const router = useRouter()
  const [selected, setSelected] = useState(options[0])

  const handleUpdateParams = (e: {title: string, value: string}) => {

    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(title.toLowerCase(), e.value.toLowerCase())

    const newPath = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPath, {scroll:false})
  }
  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
          <div className="relative w-fit ">
            <Listbox.Button className='relative flex flex-row w-full min-w-[127px] justify-between overflow-hidden rounded-md shadow-md focus:outline-none px-3 py-2'>
              <span className="block truncate">{selected.title}</span>
              <Image
                src='/chevron.svg'
                alt='chevron'
                width={20}
                height={20}
                className="object-contain"
              />
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options
                className={'absolute mt-1 max-h-60 overflow-auto z-10 w-[127px]'}
              >
                {options.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    value={option}
                    className={({active}) => `relative cursor-default select-none py-2 px-4 ${
                      active ? 'bg-blue-500 text-white' : 'bg-white text-black'}
                    }`}
                  >
                    <span className="block truncate">
                      {option.title}
                    </span> 
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
      </Listbox>
    </div>
  )
}

export default Filter