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

const ProductCard = ({ params }: any) => {
  /* filter button in sm devices */
  // const [showCategories, setShowCategories] = useState(false);

  // const handleFilterClick = () => {
  //   setShowCategories(!showCategories);
  // };


  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Explicitly set the type to string

  const handleFilterClick = () => {
    setShowCategories(!showCategories);
  };

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category.id.toString()); // Convert the id to a string
    // You can perform additional actions when a category is selected here
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
        className="flex w-full bg-cover bg-no-repeat items-center max-h-[120px] sm:max-h-[60px] md:max-h-[90px] lg:max-h-[120px]"
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

      <div className="sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36 flex border flex-row">
        {/* Filter */}

        {/* sm devices filter */}

        {/* second part */}
        <div className="flex flex-col">
        <div className="flex flex-col">
      <div className="sm:flex sm:justify-end sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16">
        <div className="flex flex-row">
          <button
            onClick={handleFilterClick}
            className="bg-Green text-white rounded-full py-1 px-4 items-center text-center hover:shadow-lg"
          >
            Filter
          </button>
        </div>
        <div className="flex flex-col mt-2">
        {showCategories && (
          <>
            {Category.map((category) => (
              <div key={category.id} className="border mb-2">
                <input
                  type="radio"
                  id={String(category.id)} // Convert the id to a string
                  name="category"
                  checked={selectedCategory === String(category.id)} // Convert the id to a string
                  onChange={() => handleCategoryChange(category)}
                  className="hidden"
                />
                <label
                  htmlFor={String(category.id)} // Convert the id to a string
                  className="mx-2 text-Green hover:text-DarkGreen cursor-pointer py-2 px-4 block"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </>
        )}
      </div>
      </div>
    </div>

        <div className=" flex flex-col ">
          <div className="sm:flex sm:items-center sm:justify-end sm:py-4 md:py-6 lg:py-8 ">
            <span className="flex items-center text-center">
              <p className="font-bold text-xs pr-2 sm:text-xs md:text-base lg:text-sm ">
                {filteredProducts.length}
              </p>
              <p className="sm:text-xs md:text-base lg:text-xs">
                {filteredProducts.length > 0
                  ? "Results Found"
                  : "Results not found"}
              </p>
            </span>
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
