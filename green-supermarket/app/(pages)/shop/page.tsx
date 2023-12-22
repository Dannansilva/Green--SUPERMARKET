"use client";
import React from "react";
import Image from "next/image";
import { LiaHomeSolid } from "react-icons/lia";
import Products from "./Products";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";
import { Category } from "@/components/home/Categories";


const Product: React.FC = () => {

  
  const [isOpen, setIsOpen] = useState(false);

  const [selectedSort, setSelectedSort] = useState<string>("sort");

  const toggleDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSortOption = (Option: string) => {
    setSelectedSort(Option);
    setIsOpen(false);
  };


  /* filter button in sm devices */
  const [showCategories, setShowCategories] = useState(false);

  const handleFilterClick = () => {
    setShowCategories(!showCategories);
  };

  const Category = [
    { id: 1, name: 'Fruits' },
    { id: 2, name: 'Vegetables' },
    { id: 3, name: 'Bread & Bakery' },
    { id: 4, name: 'Meat & Fish' },
    { id: 5, name: 'Spices' },
    { id: 6, name: 'Stationary' },
    { id: 7, name: 'Detergents' },
  ];
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
            <Link href={`/home/`}>
            <div>
              <LiaHomeSolid className="text-Lightgray hover:text-white sm:text-xs md:text-base lg:text-md" />
            </div>
          </Link>
            <div className=" text-Lightgray hover:text-white cursor-auto ">
              <p className=" sm:text-xs md:text-base lg:text-md ">{`>`}</p>
            </div>
            <div className="flex text-Lightgray hover:text-white ">
              <p className="text-Green hover:text-white sm:text-xs md:text-base lg:text-md">Shop</p>
            </div>
            {/* <div className=" text-Lightgray hover:text-white  cursor-auto">
              <p className=" sm:text-xs md:text-base lg:text-md ">{`>`}</p>
            </div> */}
            {/* <div className="flex">
              <p className="text-Green hover:text-white sm:text-xs md:text-base lg:text-md">
                Cosmetics & Detergents
              </p>
            </div> */}
          </div>
        </div>

        <div className="sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36 flex-col flex py-10">
          {/* second part */}
          <div className=" sm:flex sm:justify-end sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16">
          <button onClick={handleFilterClick} className="mx-2 text-Green hover:text-DarkGreen">
        FILTER
      </button>
      {showCategories && (
        <>
          {Category.map((category) => (
            <Link key={category.id} href={`/shop/${category.id}`}>
              <button
                key={category.id}
                onClick={() => console.log(category.id)} // Adjust this function as needed
                className="mx-2 text-Green hover:text-DarkGreen"
              >
                {category.name}
              </button>
            </Link>
          ))}
        </>
      )}
        </div>

          {/* Third part */}
          <div>
            {/* first div */}
            <div className="flex md:flex-row justify-between ">
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <p className="font-normal text-sm">sort by: </p>
                </div>
                <div className="relative w-[166px]">
                  <button
                    className="w-full border rounded-[4px] h-[40px] py-1 px-2 flex flex-row justify-between items-center"
                    onClick={toggleDown}
                  >
                    <p className="items-start justify-start font-normal text-sm">
                      {selectedSort}
                    </p>
                    <RiArrowDropDownLine className=" font-extralight text-[20px]" />
                  </button>
                  {isOpen && (
                    <div className="absolute top-[40px] left-0 bg-white border rounded shadow flex flex-col w-full ">
                      <a
                        className=" hover:bg-Green hover:border hover:border-white hover:text-white "
                        onClick={() => handleSortOption("Price")}
                        href="#"
                      >
                        Price
                      </a>
                      <a
                        className=" hover:bg-Green hover:border hover:border-white hover:text-white "
                        onClick={() => handleSortOption("Date")}
                        href="#"
                      >
                        Date
                      </a>
                      {/* Add other sorting options as needed */}
                    </div>
                  )}
                </div>
              </div>

              <div className=" py-4 justify-end">
                <span className="flex items-center text-center">
                  <p className=" font-bold text-xs pr-2 sm:text-xs md:text-base lg:text-md">
                  {}
                  </p>
                  <p className="sm:text-xs md:text-base lg:text-md">
                  
                  </p>
                </span>
              </div>
            </div>
            {/* second div */}
            <div className="  grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-2 cursor-pointer py-4 h-full ">
              {Products.map(({ id, name, image, price, image2 }) => (
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
                      className="w-full max-h-[250px] px-4 py-10"
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
  );
};

export default Product;
