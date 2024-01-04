"use client";
import Container from "@/components/container/container";
import React from "react";
import Productsdetails from "../../../components/products_details/productesdetails";
import Products from "../shop/Products";
import Image from "next/image";
import { SlHandbag } from "react-icons/sl";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

const Page = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseValue = (id: any) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseValue = (id: any) => {
    setQuantity(quantity + 1);
  };

  return (
    <div className=" sm:mx-4 md:mx-16 lg:mx-24 xl:mx-36 mb-4  ">
      {/* {Products.map(({ id, name, image, price }) => ( */}
      <div
        className="flex flex-col lg:flex-row  gap-4  my-0 mb-2 md:my-4 "
        key={``}
      >
        {/* product pics */}
        <div className="flex-col hidden lg:flex max-w-[80px] gap-2 ">
          <div className=" flex border rounded-sm w-[50px] h-[50px] items-center justify-center text-center  object-center  hover:border-Green">
            {" "}
            <Image
              src={`/assets/ShopPage/fruits/Exotic and delicious pomegranate on white background.png`}
              width={500}
              height={500}
              alt=""
              className=" w-full justify-center "
            />
          </div>
          <div className=" flex border rounded-sm w-[50px] h-[50px] items-center justify-center text-center object-center hover:border-Green ">
            {" "}
            <Image
              src={`/assets/ShopPage/fruits/Exotic and delicious pomegranate on white background.png`}
              width={500}
              height={500}
              alt=""
              className=" w-full justify-center "
            />
          </div>
          <div className=" flex border rounded-sm w-[50px] h-[50px] items-center justify-center text-center object-center  hover:border-Green">
            {" "}
            <Image
              src={`/assets/ShopPage/fruits/Exotic and delicious pomegranate on white background.png`}
              width={500}
              height={500}
              alt=""
              className=" w-full"
            />
          </div>
          <div className=" flex border rounded-sm w-[50px] h-[50px] items-center justify-center text-center object-center  hover:border-Green">
            {" "}
            <Image
              src={`/assets/ShopPage/fruits/Exotic and delicious pomegranate on white background.png`}
              width={500}
              height={500}
              alt=""
              className=" w-full"
            />
          </div>
        </div>
        {/*main product pic */}
        <div className="flex flex-col md:flex-row sm:justify-center items-center justify-between">
          <div className="flex lg:flex-col sm:justify-center shadow-md rounded-md sm:h-[200px] sm:w-[200px] md:w-[350px] md:h-[350px] lg:w-2/3  items-center flex-grow">
            <Image
              src={`/assets/ShopPage/fruits/Exotic and delicious pomegranate on white background.png`}
              width={1000}
              height={1000}
              alt=""
              className="max-h-22 sm:min-w-[100px] md:min-w-[300px] lg:min-w-full  max-w-full md:max-h-36 lg:max-h-44 object-contain"
            />
          </div>

          {/* Product details */}
          {/* <div className=" flex flex-col px-6 border  ">
            <div className=" flex flex-row">
            <div className="flex  my-4 flex-row gap-2 items-center">
              <h1 className="text-xl font-semibold">Kiwi Fruit</h1>
              <span className=" bg-LightGreen items-center text-center rounded-md px-2 py-1 ">
                {" "}
                <p className=" text-xs text-DarkGreen4 font-medium ">
                  In Stock
                </p>
              </span>

            </div>
            <div className="  w-full hidden lg:flex md:flex"></div>
            </div>

            <div className="flex  my-4 flex-row gap-3 items-center">
              <h1 className="text-md font-semibold text-DarkGreen4 ">
                LKR 250.00
              </h1>
              <span className=" bg-red-100 items-center text-center rounded-full px-2 py-0.5 ">
                {" "}
                <p className=" text-xs text-red-500  font-medium ">25% Off</p>
              </span>
            </div>

            <hr className=" border-Gray w-full" />
          </div> */}

          <div className=" px-4 lg:px-8 py-4 md:w-full rounded-md sm:mt-4 md:mt-0 md:h-full ">
            <div className=" flex flex-col ">
              <div className=" flex flex-row text-xl mb-2 font-bold gap-2 items-center">
                <h1 className="text-2xl ">Kiwi Fruit</h1>
                <span className=" bg-LightGreen items-center text-center rounded-md px-2 py-1 ">
                  {" "}
                  <p className=" text-xs text-DarkGreen4 font-medium ">
                    In Stock
                  </p>
                </span>
              </div>

              <div className=" flex flex-row text-xl font-bold gap-2 items-center">
                <h2 className=" text-base text-DarkGreen4 font-semibold ">
                  LKR 250.00
                </h2>
                <span className=" bg-red-100 items-center text-center rounded-full px-2 py-0.5 ">
                  {" "}
                  <p className=" text-xs text-red-500  font-medium ">25% Off</p>
                </span>
              </div>
              <div className=" flex lg:flex-row">
                {/* <div className=" flex flex-row w-full sm:justify-normal sm:text-xs  ">
                  <p className=" text-wrap sm:justify-normal text-Lightgray ">
                    Our customer service department is working round-the clock
                    to ensure you have a smooth process. Feel free to contact us
                    if you have any issues.
                  </p>
                </div> */}
                <div className="  w-full hidden lg:flex md:flex"></div>
              </div>
              <hr className=" border-Lightgray2 my-4  " />
            </div>

            <div className="flex sm:flex-col lg:flex-row sm:g ">
              {/* name */}
              <div className=" bg-white w-full sm:text-xs   ">
                <p className=" text-wrap sm:justify-normal text-Lightgray ">
                  Our customer service department is working round-the clock to
                  ensure you have a smooth process. Feel free to contact us if
                  you have any issues.Our customer service department is working
                  round-the clock to ensure you have a smooth process.
                </p>
              </div>
              {/* email */}
              {/* <div className="  w-full">
                <input
                  type="text"
                  placeholder="Type in your email"
                  width={300}
                  className=" pl-4 pr-4 py-3 bg-white rounded-md border border-neutral-200 w-full focus:outline-none focus:border-DarkGreen3 focus:border-2 sm:text-xs md:text-sm lg:text-md "
                />
              </div> */}
            </div>

            <hr className=" border-Lightgray2 my-4 " />

            {/* message box */}
            <div className=" flex flex-row justify-between gap-2 lg:gap-4">
              <div className="md:w-[90px] sm:w-[100px] md:py-1  sm:px-0.5 bg-white rounded-full border border-neutral-200 justify-between items-center inline-flex">
                {/* minus */}
                <div className=" md:px-[3px] sm:px-0.5  items-center text-center">
                  <button
                    onClick={decreaseValue}
                    className="rounded-full bg-Lightgray2 items-center text-center p-1 mx-0.5"
                  >
                    <FaMinus className="md:text-[10px] sm:text-[10px]" />
                  </button>
                </div>

                {/* quantity */}
                <div className="text-center text-zinc-900 md:text-sm sm:text-[14px] flex">
                  {quantity}
                </div>

                {/* plus */}
                <div className="px-[3px] items-center text-center relative">
                  <button
                    onClick={increaseValue}
                    className="rounded-full bg-Lightgray2 items-center text-center p-1 mx-0.5"
                  >
                    <FaPlus className="md:text-[10px] sm:text-[10px]" />
                  </button>
                </div>
              </div>

              <div className=" flex flex-row w-full">
                <button className=" flex flex-row justify-center items-center text-center gap-2 w-full border bg-Green2 rounded-full py-2 hover:bg-Lightgray  ">
                  {" "}
                  <p className=" text-white font-medium text-xs">Add to Cart</p>
                  <SlHandbag className=" text-white font-medium text-xs " />
                </button>
              </div>
              
            </div>
            {/* Button */}

            <div className=" flex flex-row gap-2 py-4">
              <h3 className=" text-xs"> Category: </h3> <p className=" text-Lightgray text-xs"> Vegetables</p>
            </div>

            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Page;
