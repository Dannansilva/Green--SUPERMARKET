import { url } from "inspector";
import React from "react";
import { LiaHomeSolid } from "react-icons/lia";
import Fruits from "./Fruits";
import Image from "next/image";

const shop = () => {
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
              <p className="text-Green hover:text-white">Vegetables</p>
            </div>
          </div>
        </div>

        <div className="sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36 flex-col flex">
          {/* second part */}
          <div className=""> FILTER</div>

          {/* Third part */}
          <div>
            {/* first div */}
            <div className=" py-4 justify-end"><span className="flex items-center text-center"><p className=" font-bold text-lg pr-2">52</p> <p>Results Found</p></span></div>
            {/* second div */}
            <div className="  grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 cursor-pointer ">
              {Fruits.map(({ id, name, image, price, image2 }) => (
                <div
                  key={id}
                  className="borde px-2 hover:border-DarkGreen hover:shadow-sm hover:shadow-Green w-full py-3 border rounded-md  "
                >
                  <div>
                    <Image
                      alt=""
                      src={image}
                      width={100}
                      height={200}
                      className="w-full"
                    />
                  </div>
                  <div className="  hover:text-DarkGreen ">
                    <p className="sm:text-[10px] md:text-[14px] font-light text-Gray hover:font-semibold  ">
                      {name}
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
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
  );
};

export default shop;
