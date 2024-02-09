'use client';

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter();

    const handleNav = () => {
        const newLimit = (pageNumber + 1) * 10;

        const searchParams = new URLSearchParams(window.location.search)

        searchParams.set('limit', newLimit.toString())

        const newPath = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPath, {scroll: false})
    }
  return (
    <div className="flex w-full justify-center mt-5">
        {!isNext && <button
            onClick={handleNav}
            className="rounded-full pt-1 pb-1 px-5 text-white bg-orange-300 text-[14px]"
        >
            Show More
        </button>}
    </div>
  )
}

export default ShowMore