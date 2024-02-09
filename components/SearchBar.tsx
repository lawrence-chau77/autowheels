'use client'

import { useState, Fragment } from "react"
import { Combobox, Transition } from "@headlessui/react"
import { brands } from "@/constants"
import Image from "next/image"
import { useRouter } from "next/navigation"

const SearchBar = () => {
    const [selectedBrand, setSelectedBrand] = useState('');
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedBrand === '') {
            return alert("Search bar is empty, enter a make")
        }
        updateSearch(selectedBrand.toLowerCase())
    }
    
    const updateSearch = (selectedBrand: string) => {
        const search = new URLSearchParams(window.location.search);

        if (selectedBrand) {
            search.set('selectedBrand', selectedBrand)
        } else {
            search.delete('selectedBrand')
        }

        const newPath = `${window.location.pathname}?${search.toString()}`

        router.push(newPath, {scroll: false})
    }

    const filteredBrands = 
    query === ''
        ? brands
        : brands.filter((brand) => {
            return brand.toLowerCase().includes(query.toLowerCase())
        })
    
    return (
        <form onSubmit={handleSearch}>
            <div className="flex flex-row gap-2">
                <div className="w-72">
                    <Combobox value={selectedBrand} onChange={setSelectedBrand}>
                        <div>
                        <div className="relative w-full cursor-default overflow-hidden rounded-md shadow-md focus:outline-none">
                            <Combobox.Input
                                placeholder="Toyota"
                                displayValue={(selectedBrand: string) => selectedBrand}
                                onChange={(e) => setQuery(e.target.value)}
                                className={'w-full border-none outline-none text-gray-900 py-2 pl-3 pr-10'}
                            />
                            <Combobox.Button className={'absolute inset-y-0 right-0 flex items-center pr-2'}>
                                <Image
                                    className="object-contain opacity-50"
                                    src='/chevron.svg'
                                    alt='car brand'
                                    width={20}
                                    height={20}
                                    aria-hidden='true'
                                />
                            </Combobox.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            leave='transition ease-in duration-100'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                            afterLeave={() => setQuery('')}
                        >
                            <Combobox.Options
                                className={'absolute mt-1 max-h-60 overflow-auto z-10 w-72'}
                            >

                                { filteredBrands.length === 0 && query !== '' ? (
                                    <div className="relative select-none px-4 py-2 text-gray-600">
                                        Nothing found.
                                    </div>
                                ) : (
                                filteredBrands.map((brand) => (
                                    <Combobox.Option 
                                        key={brand} 
                                        value={brand}
                                        className={({active}) => `py-2 pl-3 pr-10 ${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                                    >
                                        {({ selected, active}) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                }`}
                                                >
                                                    {brand}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                        active ? 'text-white' : 'text-teal-600'
                                                    }`}
                                                    >
                                                </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                            </Combobox.Options>
                        </Transition>
                        </div>
                    </Combobox>
                </div>
                <button type='submit'>
                    <Image
                        src='/search.svg'
                        alt='search icon'
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </button>
            </div>
        </form>
    )
}

export default SearchBar