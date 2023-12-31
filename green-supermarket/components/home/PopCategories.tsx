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
    
      <div className="sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36 mb-10 md:mt-[60px] sm:-mt-1">
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
        <div className="grid grid-cols-3 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 pt-5 gap-2 w-full">
          {Category.map(({ id, location, name }) => (
            <Link key={id} href={`/shop/${id}`}>
              <div
                key={id}
                className="border py-4 px-2 rounded-md hover:border-Green hover:shadow-lg hover:shadow-green-100 w-full"
              >
                <div>
                  <Image
                    alt=""
                    src={location}
                    width={300}
                    height={300}
                    className="w-full"
                  />
                </div>
                <div className="text-center md:pt-[16px] ">
                  <p className="sm:text-[10px] md:text-sm font-semibold text-Black1 pt-2">
                    {name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopCategories;
