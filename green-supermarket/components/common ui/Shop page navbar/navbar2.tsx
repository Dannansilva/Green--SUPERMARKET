import React from 'react'
import { LiaHomeSolid } from 'react-icons/lia'

const navbar2 = () => {
  return (
    <div
    className="flex  w-full bg-cover bg-no-repeat items-center  max-h-[120px] sm:max-h-[60px] md:max-h-[90px] lg:max-h-[120px]"
    style={{
      backgroundImage: "url('/assets/ShopPage/Breadcrumbs.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "120px",
    }}
  >
    <div className="flex flex-row items-center mx-2 sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36  gap-3 flex-1 cursor-pointer">
      <div>
        <LiaHomeSolid className="text-Lightgray hover:text-white" />
      </div>
      <div className=" text-Lightgray hover:text-white cursor-auto ">
        <p className="  ">{`>`}</p>
      </div>
      <div className="flex text-Lightgray hover:text-white ">
        <p className="">Categories</p>
      </div>
      <div className=" text-Lightgray hover:text-white  cursor-auto">
        <p className="  ">{`>`}</p>
      </div>
      <div className="flex">
        <p className="text-Green hover:text-white">Bread & Bakery</p>
      </div>
    </div>
  </div>
  )

}

export default navbar2