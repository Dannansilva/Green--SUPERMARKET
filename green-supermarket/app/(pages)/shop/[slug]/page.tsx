"use client";
import Image from "next/image";
import Link from "next/link";
import { LiaHomeSolid } from "react-icons/lia";
import { Category } from "@/components/home/Categories";
import React from "react";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Product from "../page";
import Products from "../Products";
import { useState } from "react";
import { GoSquareFill } from "react-icons/go";

const ProductCard = ({ params }: any) => {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  /* filter category animation */
  const [clickedButtonId, setClickedButtonId] = useState(null);

  const handleClick = (categoryId: any) => {
    console.log(categoryId);
    setClickedButtonId(categoryId === clickedButtonId ? null : categoryId);
  };

  const handleFilterClick = () => {
    setShowCategories(!showCategories);
  };

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category.id.toString());
  };
  const category = Category.find(
    (category) => category.id === parseInt(params.slug)
  );

  if (!category) {
    return <p>Category not found.</p>;
  }

  const CategoryFilter = [
    { id: 1, name: "Fruits" },
    { id: 2, name: "Vegetables" },
    { id: 3, name: "Bread & Bakery" },
    { id: 4, name: "Meat & Fish" },
    { id: 5, name: "Spices" },
    { id: 6, name: "Stationary" },
    { id: 7, name: "Detergents" },
  ];

  const filteredProducts = Products.filter(
    (product) => product.category === category.id
  ).map((product) => (
    <div
      key={product.id}
      className="px-2 hover:border-DarkGreen hover:shadow-sm hover:shadow-Green w-full border rounded-md"
    >
      <div>
        <Image
          alt=""
          src={product.image}
          width={500}
          height={700}
          className=" w-full h- px-4 py-10"
        />
      </div>
      <div className="hover:text-DarkGreen m-1">
        <p className="sm:text-[10px] md:text-[14px] font-light text-Gray hover:font-semibold">
          {product.name}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between m-1 pb-4">
        <div>
          <p className="sm:text-[14px] md:text-[16px] font-semibold text-black">
            {product.price}
          </p>
        </div>
        <div className="items-center">
          <button className="items-center rounded-full bg-Lightgray2 text-black hover:text-white hover:bg-Green p-3">
            {product.image2}
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div
        className="flex w-full bg-cover bg-no-repeat items-center max-h-[90px] sm:max-h-[60px] md:max-h-[90px] "
        style={{
          backgroundImage: " linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25)), url('/assets/ShopPage/Breadcrumbs.png')",
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
          <div className="text-Lightgray hover:text-white cursor-auto ">
            <p className="sm:text-xs md:text-base lg:text-md ">{`>`}</p>
          </div>
          <div className="flex text-Lightgray hover:text-white ">
            <Link href={`/shop/`}>
              <p className="sm:text-xs md:text-base lg:text-md">Shop</p>
            </Link>
          </div>
          <div className="text-Lightgray hover:text-white cursor-auto">
            <p className="sm:text-xs md:text-base lg:text-md ">{`>`}</p>
          </div>
          <div className="flex">
            <p className="text-Green hover:text-white sm:text-xs md:text-base lg:text-md">
              {category.name}
            </p>
          </div>
        </div>
      </div>

      <div className="sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36 flex-col flex sm:py-2 md:py-4">
        {/* Filter */}


        {/* second part */}
        <div className="flex sm:flex-col md:flex-row gap-4 ">
          <div className=" hidden sm:hidden md:flex md:pr-8 lg:pr-12 xl:pr-16">
            <div className="md:flex py-2 md:w-max">
              <div className="flex flex-col">
                <button
                  onClick={handleFilterClick}
                  className=" w-[80px] hidden sm:hidden md:block  bg-Green text-white rounded-full py-1 px-2 items-center text-center hover:shadow-lg mb-2"
                >
                  <p>Filter</p>
                </button>
                <div className="flex flex-row pt-2">
                  <h2 className=" text-lg text-black font-semibold">
                    All Categories
                  </h2>
                </div>

                <div className=" sm:hidden hidden md:flex md:flex-col gap-0.5 items-start text-start pt-2 ">
                  <>
                    {Category.map((category) => (
                      <Link key={category.id} href={`/shop/${category.id}`}>
                        <div className=" flex flex-col md:w-max   ">
                          <div className="flex flex-row items-center">
                            <GoSquareFill className=" text-green-400 w-[10px] h-[10px]" />

                            <button
                              key={String(category.id)} // Convert the id to a string
                              onClick={() => handleClick(category.id)}
                              className={`mx-2 text-black items-center text-center text-sm m-2 transition duration-300 ease-in-out hover:font-semibold ${
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
              </div>
            </div>
          </div>



          <div className="flex flex-col">
              {/* number of products */}
              <div className="flex flex-row py-2">
                {/* sm: filter */}
                <div className=" flex flex-row md:hidden sm:mt-1 ">
                  <div className="items-center justify-center text-center">
                    <button
                      onClick={handleFilterClick}
                      className=" w-[55px] sm:block md:hidden bg-Green text-white rounded-full py-1 px-2  hover:shadow-lg mb-2 "
                    >
                      <p className=" text-center text-xs justify-center">
                        Filter
                      </p>
                    </button>
                  </div>


                  <div className=" absolute flex flex-col md:hidden z-10 mt-8 bg-white ">
                  {showCategories && (
                    <>
                      {Category.map((category) => (
                        <Link key={category.id} href={`/shop/${category.id}`}>
                          <div className=" flex flex-col hover:font-semibold justify-start text-start px-2 hover:transition hover:duration-500 hover:ease-in-out hover:rounded-md
                          ">
                            <div className=" flex flex-row items-center text-center">
                              <GoSquareFill className=" text-green-400 w-[10px] h-[10px]" />
                              <button
                                key={category.id}
                                onClick={() => handleClick(category.id)}
                                className={` text-black items-center text-center text-xs m-2 transition duration-300 ease-in-out hover:font-semibold w-max ${
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
                  )}
                </div>
                </div>


          <div className="sm:flex flex sm:items-center sm:justify-end justify-end flex-row w-full ">
          <span className="flex items-center text-center">
          <p className="font-bold text-xs pr-2 sm:text-xs  ">
                  {filteredProducts.length}
                </p>
                    <p className="sm:text-xs text-xs ">
                  {filteredProducts.length > 0
                    ? "Results Found"
                    : "Results not found"}
                </p>
              </span>
            </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-2 cursor-pointer">
              {filteredProducts.length > 0 ? (
                filteredProducts
              ) : (
                <p>No products found for the selected category.</p>
              )}
            </div>
            </div>
            
            </div>
          </div>
          </div>
      );
    };

export default ProductCard;
