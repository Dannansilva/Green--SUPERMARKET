import React from 'react'
import Image from 'next/image'
import { LiaHomeSolid } from 'react-icons/lia'
import Vegetable from "../Vegetables/Vegetables"
import Detergents from './Detergents'


const Detergent = () => {
  return (
    <>
      <div>
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
              <LiaHomeSolid className="text-Lightgray hover:text-white sm:text-xs md:text-base lg:text-md" />
            </div>
            <div className=" text-Lightgray hover:text-white cursor-auto ">
              <p className=" sm:text-xs md:text-base lg:text-md ">{`>`}</p>
            </div>
            <div className="flex text-Lightgray hover:text-white ">
              <p className="sm:text-xs md:text-base lg:text-md">Categories</p>
            </div>
            <div className=" text-Lightgray hover:text-white  cursor-auto">
              <p className=" sm:text-xs md:text-base lg:text-md ">{`>`}</p>
            </div>
            <div className="flex">
              <p className="text-Green hover:text-white sm:text-xs md:text-base lg:text-md">Cosmetics & Detergents</p>
            </div>
          </div>
        </div>

        <div className="sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36 flex-col flex py-10">
          {/* second part */}
          <div className=""> FILTER</div>

          {/* Third part */}
          <div>
            {/* first div */}
            <div className=" py-4 justify-end"><span className="flex items-center text-center"><p className=" font-bold text-xs pr-2 sm:text-xs md:text-base lg:text-md">10</p><p className='sm:text-xs md:text-base lg:text-md'>Results Found</p></span></div>
            {/* second div */}
            <div className="  grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-2 cursor-pointer py-4 ">
              {Detergents.map(({ id, name, image, price, image2 }) => (
                <div
                  key={id}
                  className=" px-2 hover:border-DarkGreen hover:shadow-sm hover:shadow-Green w-full border rounded-md  "
                >
                  <div>
                    <Image
                      alt=""
                      src={image}
                      width={500}
                      height={500}
                      className="w-full h-auto px-4 py-10"
                    />
                  </div>
                  <div className="  hover:text-DarkGreen m-1 ">
                    <p className="sm:text-[10px] md:text-[14px] font-light text-Gray hover:font-semibold  ">
                      {name}
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-between m-1 pb-4">
                    <div>
                      <p className="sm:text-[14px] md:text-[16px] font-semibold text-black">
                        {price}
                      </p>
                    </div>
                    <div className="items-center">
                      <button className="items-center rounded-full bg-Lightgray2 text-black  hover:text-white hover:bg-Green p-3">
                        {image2}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detergent