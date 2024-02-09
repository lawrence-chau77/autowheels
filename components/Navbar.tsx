import Image from "next/image"
import Link from "next/link"
import { Custombutton } from "."

const Navbar = () => {
  return (
   <header className="w-full absolute z-10">
    <nav className="max-w-[1440px] flex justify-between mx-auto items-center sm:px-14 px-4 py-2">
        <Link
            href='/'
            className="flex items-center"
        >
            <Image
                src='/logo.svg'
                alt='auto wheels logo'
                height={100}
                width={100}
                className="object-contain"
            />
        </Link>
        <Custombutton
            text='Sign In'
            textStyling='text-black bg-white'
        />
    </nav>
   </header>
  )
}

export default Navbar