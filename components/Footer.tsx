import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="pad-x-default mt-10">
      <div className="flex flex-row justify-around flex-wrap">
        <div className="flex flex-col gap-5">
          <h3 className="font-bold">
            Company
          </h3>
          <div className="text-gray-400">
            About us
          </div>
          <div className="text-gray-400">
            Contact us
          </div>
          <div className="text-gray-400">
            Reviews
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-bold">
            Explore
          </h3>
          <div className="text-gray-400">
            Road trips
          </div>
          <div className="text-gray-400">
            Driving tips
          </div>
          <div className="text-gray-400">
            Blog
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-bold">
            Popular Airports
          </h3>
          <div className="text-gray-400">
            Adelaide 
          </div>
          <div className="text-gray-400">
            Brisbane
          </div>
          <div className="text-gray-400">
            Sydney
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-10 mb-5">
          <p>@2024 Auto Wheels. All rights reserved</p>
          <div className="flex flex-row gap-5">
            <div>
              Privacy & Policy
            </div>
            <div>
              Terms & Condition
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer