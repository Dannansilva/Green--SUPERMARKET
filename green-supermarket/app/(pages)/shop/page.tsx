"use client";
import React from "react";
import Image from "next/image";
import { LiaHomeSolid } from "react-icons/lia";
import Products from "./Products";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";
import { Category } from "@/components/home/Categories";
import { GoSquareFill } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";
import { SlHandbag } from "react-icons/sl";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiMiniChevronDown } from "react-icons/hi2";

const Product: React.FC = () => {
  const router = useRouter();
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

  const [isfilteropen] = useState(false);
  /* filter category animation */
  const [clickedButtonId, setClickedButtonId] = useState(null);

  const handleClick = (categoryId: any) => {
    console.log(categoryId);
    setClickedButtonId(categoryId === clickedButtonId ? null : categoryId);
  };

  const navItems = [{ home: "Home", path: "/" }];

  const productclick = () => {
    router.push("/products_details");
  };

  const [isHover, setIsHovered] = useState(false);

  return (
    <>
      <div>
        <div
          className="flex  w-full bg-cover bg-no-repeat items-center  max-h-[90px] sm:max-h-[60px] md:max-h-[90px] "
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25)), url('/assets/ShopPage/Breadcrumbs.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "120px",
          }}
        >
          <div className="flex flex-row items-center mx-2 sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36  gap-3 flex-1 cursor-pointer">
            <div>
              {navItems.map(({ home, path }) => (
                <a key={home} href={path}>
                  <div>
                    <LiaHomeSolid className="text-Lightgray hover:text-white sm:text-xs md:text-base lg:text-md" />
                  </div>
                </a>
              ))}
            </div>

            <div className=" text-Lightgray hover:text-white cursor-auto ">
              <p className=" sm:text-xs md:text-base lg:text-md ">{`>`}</p>
            </div>
            <div className="flex text-Lightgray hover:text-white ">
              <p className="text-Green hover:text-white sm:text-xs md:text-base lg:text-md">
                Shop
              </p>
            </div>
          </div>
        </div>

        <div className="sm:mx-4 mx-4 md:mx-16 lg:mx-24 xl:mx-36 flex-col flex sm:py-2 md:py-4 ">
          {/* second part */}
          <div className=" flex sm:flex-col lg:flex-row gap-4   ">
          
          </div>
          <div className="flex flex-col pb-4">
            <div className="flex flex-row py-2 ">
              {/* sm: filter */}

              <div
                className="relative inline-block cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}

                // onMouseLeave={() => setIsHovered(false)}

              >
                 <button
                    onClick={handleFilterClick}
                    className="  h-full w-full text-center items-center justify-center  bg-White text-white rounded-full hover:shadow-md py-1a    "
                  >
                    <div className="flex flex-row items-center justify-center text-center px-3 py-1 w-full  text-xs font-medium ">
                      {/* <p className="pl-1">Filter</p>
                        <MdKeyboardArrowDown className=" h-[15px] w-[15px]" /> */}
                      <HiAdjustmentsHorizontal className=" h-[25px] w-full text-Green" />
                    </div>
                  </button>

                {isHover && (
                  <div
                    className="absolute flex flex-col z-20 -mt-0.5 bg-white border p-4 rounded-md border-green-600"
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <>
                      {Category.map((category) => (
                        <Link key={category.id} href={`/shop/${category.id}`}>
                          <div className="flex flex-col hover:scale-105 justify-start text-start px-2 hover:transition-all hover:duration-750 hover:ease-in-out">
                            <div className="flex flex-row items-center text-center gap-1">
                              {/* <GoSquareFill className="text-green-400 w-[7px] h-[7px]" /> */}
                              <button
                                key={category.id}
                                onClick={() => handleClick(category.id)}
                                className={`text-items-center text-center text-sm m-2 transition duration-300 text-Gray2 ease-in-out hover:font-semibold w-max ${
                                  clickedButtonId === category.id
                                    ? "border-b-4 border-b-Green pb-1 text-DarkGreen font-semibold"
                                    : ""
                                }`}
                              >
                                {category.name}
                              </button>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </>
                  </div>
                )}
              </div>

             
              <div className="sm:flex  flex lg:-mb-0  sm:justify-end lg:flex-row justify-end w-full  items-center">
                {/* <div className="  items-center hidden ">
                  <h2 className=" font-semibold sm:text-md lg:text-xl text-DarkGreen">
                    {category.name}
                  </h2>
                </div> */}
                <div className="flex items-center text-center justify-end gap-2">
                  <p className="font-semibold text-xs lg:text-sm text-Gray2 ">
                    {Products.length}
                  </p>
                  <p className="text-xs text-Gray lg:text-[13px]  ">
                    {Products.length > 0
                      ? "Products available"
                      : "Products not available"}
                  </p>
                </div>
              </div>
            </div>

            {/* second div */}
            <div className="  grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-4 sm:gap-2 md:gap-4 ">
              {Products.map(({ id, name, image, price }) => (
                 <Link key={id} href={`/products_details`}>
                <div
                  key={id}
                  className="border sm:pt-2 md:pt-4 px-2 hover:border-Green hover:shadow-lg hover:shadow-green-100 justify-evenly flex flex-col w-full rounded-md max-w-full sm:min-h-[250px] lg:min-h-[280px] xl:max-w-max  hover:rounded-md "
                  onClick={() => {
                    router.push("/products_details  ");
                  }}
                >
                  <div className="items-center justify-evenly flex lg:py- sm:py-6">
                    <Image
                      alt=""
                      src={image}
                      width={500}
                      height={500}
                      className=" sm:max-h-24 sm:min-w-[100px] md:min-w-[200px]  max-w-full xl:max-h-28  object-contain "
                    />
                  </div>
                  <div className=" flex flex-row justify-between mx-2 lg:-mb-2 gap-2 ">
                    <div className=" flex flex-col gap-0.5">
                      <div className=" items-center flex md:justify-start ">
                        <p className="sm:text-[10px] md:text-[13px] font-light  md:text-Green  ">
                          {name}
                        </p>
                      </div>

                      <div>
                        <p className="text-[12px]  font-semibold  text-DarkGreen">
                          {price}
                        </p>
                      </div>
                    </div>

                    <div className="items-center md:flex hidden  ">
                      <button className="items-center rounded-full bg-white text-Green  hover:text-white hover:bg-Green p-3 w-full">
                        <SlHandbag className=" w-full h-[12px] lg:h-[15px] " />
                      </button>
                    </div>
                  </div>
                  <div className="items-center md:hidden flex flex-row justify-center  mt-2 mb-1 ">
                    <button className="items-center rounded-md bg-Green text-white  hover:text-white hover:bg-Green p-1.5 w-full flex flex-row  text-center justify-center gap-2">
                      <SlHandbag className=" h-[12px]" />
                      <p className=" text-white text-xs ">Add to cart</p>
                    </button>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
