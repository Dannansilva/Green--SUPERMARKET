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

const ProductCard = ({ params }: any) => {
  const category = Category.find(
    (category) => category.id === parseInt(params.slug)
  );

  if (!category) {
    return <p>Category not found.</p>;
  }

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

        <div className=" flex flex-col sm:py-4 md:py-6 lg:py-8 sm:hidden ">
          <div className=" items-center text-center">
            <h2 className=" font-medium text-[15px]">All Categories</h2>
          </div>
          <div className=" sm:flex px-6 flex flex-col items-center text-center ">
            {Category.map((category) => (
              <Link key={category.id} href={`/shop/${category.id}`}>
                <button
                  key={category.id}
                  onClick={() => category.id}
                  className="mx-2 text-Green hover:text-DarkGreen flex flex-col items-center text-center"
                >
                  {category.name}
                </button>
              </Link>
            ))}
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
  );
};

export default ProductCard;
