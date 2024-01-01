// components/home/PopCategories.tsx
'use client'
import React from "react";
import Image from "next/image";
import { Category } from "./Categories";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Product from "@/app/(pages)/shop/page";

const PopCategories: React.FC = () => {


 

  return (
    <>
    
      <div className="sm:mx-4 md:mx-16 lg:mx-24 xl:mx-36 mb-10 md:mt-[60px] sm:-mt-1">
        {/* first row */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className=" sm:text-lg  md:text-3xl font-semibold text-Black1 ">
              Shop By Category
            </h2>
          </div>
          {/* <div className="items-center sm:hidden">
            <button className="flex text-Green text-base font-medium hover:scale-105 px-4">{`View All`}</button>
          </div> */}
        </div>

        {/* second row */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 pt-5 gap-4 w-full">
          {Category.map(({ id, location, name }) => (
            <a key={id} href={`/shop/${id}`}>
              <div
                key={id}
                className="border py-4 px-2 rounded-md w-full h-full hover:border-0 hover:shadow-xl" 
              >
                <div>
                  <Image
                    alt=""
                    src={location}
                    width={500}
                    height={500}
                    className="w-full"
                  />
                </div>
                <div className="text-center md:pt-[16px] ">
                  <p className="sm:text-[10px] md:text-sm  text-Black1 pt-2">
                    {name}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopCategories;
