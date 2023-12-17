"use client";
import Image from "next/image";
import React from "react";
import drink from "../../public/assets/products images/Beverages.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";
const productesdetails = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseValue = () => {
    setQuantity(quantity + 1);
  };

  const decreaseValue = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div>
      <div>
        {/* main image */}
        <div>
          <Image src={drink} alt="drink" width={500} height={500} />
        </div>
        {/* sub images */}
        <div className=" inline-flex gap-1 mt-1">
          <Image src={drink} alt="drink" width={200} height={200} />
          <Image src={drink} alt="drink" width={200} height={200} />
        </div>
      </div>
      {/* heading */}
      <div className=" inline-flex items-center gap-3 ">
        <h1 className="text-zinc-900 text-4xl font-semibold font-['Poppins'] leading-[43.20px]">
          Cabbage{" "}
        </h1>
        <div className="w-[71px] h-[29px] px-2 py-1 bg-green-600 bg-opacity-20 rounded justify-center items-center gap-2.5 inline-flex">
          <div className="text-green-800 text-sm font-normal font-['Poppins'] leading-[21px]">
            In Stock
          </div>
        </div>
      </div>
      {/* review */}
      <div>
        <div className=" inline-flex gap-3 text-yellow-500">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <div className="text-stone-500 text-sm font-normal font-['Poppins'] leading-[21px]">
            {" "}
            4 Review
          </div>
        </div>
      </div>
      {/* price */}
      <div className=" inline-flex gap-3 items-center">
        <div className="text-zinc-400 text-xl font-normal font-['Poppins'] line-through leading-[30px  ">
          LKR150.00
        </div>
        <div className="text-green-800 text-2xl font-medium font-['Poppins'] leading-9">
          LKR96.00
        </div>
        {/* discount */}
        <div className="w-[73px] h-[27px] px-2.5 py-[3px] bg-red-500 bg-opacity-10 rounded-[30px] justify-start items-start gap-1.5 inline-flex">
          <div className="text-red-500 text-sm font-medium font-['Poppins'] leading-[21px]">
            25% Off
          </div>
        </div>
      </div>
      <hr className="my-4 w-full border-gray-300" />
      <p className=" text-zinc-500 text-sm font-normal leading-[21px] mt-5">
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices
        et ipsum. Nulla varius magna a consequat pulvinar.{" "}
      </p>
      <hr className="my-4 w-full border-gray-300" />

      {/* item qunatity */}
      <div className="w-[124px] h-[50px] p-2 bg-white rounded-[170px] border border-neutral-200 justify-center items-center inline-flex">
        {/* minus */}
        <div className="w-[34px] h-[34px] relative">
          <div className="w-[34px] h-[34px] left-0 top-0 items-center bg-zinc-100 rounded-[170px]">
            <button onClick={decreaseValue} className=" pt-2 ml-2">
              <FaMinus />
            </button>
          </div>
        </div>

        {/* quantity */}
        <div className="w-10 text-center text-zinc-900 text-base font-normal leading-normal">
          {quantity}
        </div>
        {/* plus */}
        <div className="w-[34px] h-[34px] relative">
          <div className="w-[34px] h-[34px] left-0 top-0 items-center bg-zinc-100 rounded-[170px]">
            <button onClick={increaseValue} className=" pt-2 ml-2">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
      {/* add to cart button */}
      <div className="px-10 py-4 bg-green-500 rounded-[43px] justify-center items-center gap-4 inline-flex">
        <div className="text-white text-base font-semibold  leading-tight">
          Add to Cart
        </div>
      </div>
      <div className=" inline-flex gap-2">
        <h2 className=" text-zinc-900 text-sm font-medium  leading-[21px]">
          Category:
        </h2>

        <h2 className=" text-zinc-500 text-sm font-normal   leading-[21px]">
          Vegetables
        </h2>
      </div>
      {/*tag */}
      <div>
        <div className=" inline-flex gap-2">
          <h2 className=" text-zinc-900 text-sm font-medium  leading-[21px]">
          Tag:
          </h2>
          <h2 className=" text-zinc-500 text-sm font-normal   leading-[21px]">
            Vegetables Healthy Healthy Green Cabbage
          </h2>
        </div>
      </div>
    </div>
  );
};

export default productesdetails;
