'use client';

import { CustomButtonProps } from "@/types";

const Custombutton = ({ text, handleClick, textStyling }: CustomButtonProps) => {
  return (
    <button className={`rounded-full pt-1 px-5 ${textStyling}`} onClick={handleClick}>
        {text}
    </button>
  )
}

export default Custombutton