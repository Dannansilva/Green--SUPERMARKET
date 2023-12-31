"use client";
import Container from "@/components/container/container";
import React from "react";
/* import productesdetails from "@/components/products_details/productesdetails"; */
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { LiaHomeSolid } from "react-icons/lia";


const Shoppingcart = () => {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);

  const increaseValue1 = () => {
    setQuantity1(quantity1 + 1);
  };
  const decreaseValue2 = () => {
    if (quantity2 > 1) {
      setQuantity2(quantity2 - 1);
    }
  };
  const increaseValue2 = () => {
    setQuantity2(quantity2 + 1);
  };

  const decreaseValue1 = () => {
    if (quantity1 > 1) {
      setQuantity1(quantity1 - 1);
    }
  };

  const navItems = [{ home: "Home", path: "/" }];


  return (
    <div>
      <div
        className="bg-cover items-center flex bg-no-repeat bg-center w-full sm:max-h-[60px] md:max-h-[120px] flex-row "
        style={{
          backgroundImage: "url('/assets/ShopPage/Breadcrumbs.png')",
          height: "120px",
        }}
      >
        <Container>
          <div className="flex-row flex items-center gap-4 ">
          <div>
            {navItems.map(({ home, path }) => (
              <a key={home} href={path}>
                <div>
                  <LiaHomeSolid className="text-Lightgray hover:text-white sm:text-xs md:text-base lg:text-md" />
                </div>
              </a>
            ))}
          </div>
            <div>
              <p className="text-Lightgray hover:text-Green pr-[4px] flex-row">{`>`}</p>
            </div>
            <div className="flex-row">
              <p className="text-Green hover:text-white ">Shopping Cart</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="text-Black1 ">
        <h1 className=" md:text-[24px]  text-center p-4 font-semibold sm:text-[18px]">
          {" "}
          My Shopping Cart
        </h1>
        <Container>
          <div className="flex md:flex-row justify-between mb-6 sm:flex-col gap-8   ">
            <div className=" justify-between w-full items-center ">
              {/* first   */}
              <div className=" border rounded-md items-center">
                <div className=" flex flex-row ">
                  <div className=" border border-x-0 border-t-0  w-full grid grid-cols-4 text-xs py-2 px-4 sm:px-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-start text-Gray font-semibold">
                    {/* First Row */}
                    <div className="">
                      <p>PRODUCT</p>
                    </div>
                    <div className="sm:-ml-4">
                      <p>PRICE</p>
                    </div>
                    <div className=" lg:-ml-8 md:-ml-6 sm:-ml-8">
                      <p>QUANTITY</p>
                    </div>
                    <div className=" sm:hidden md:flex  md:-ml-10 ">
                      <p>SUBTOTAL</p>
                    </div>
                  </div>

                  <div className="   ">
                    {" "}
                    <button className="hidden rounded-full w-[20px] h-[20px] bg-zinc-100 items-center text-center text-sm[5px] font-light text-Gray2 hover:bg-Lightgray text-[12px]">
                      x
                    </button>
                  </div>
                </div>
                {/* Second Row */}
                <div className=" flex flex-row items-center">
                  <div className=" w-full grid grid-cols-4 text-xs py-2 sm:px-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-4 font-normal">
                    <div className=" ">
                      <div className=" sm:flex-col flex md:flex-row md:items-center sm:items-start">
                        <div>
                          <Image
                            alt=""
                            src={"/assets/shoppingcart/Image-1.png"}
                            width={50}
                            height={50}
                            className=" w-[50px] h-full"
                          />
                        </div>
                        <div>
                          <p className=" sm:text-[10px] lg:text-xs">Green Capsicum</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs font-medium">
                      <p>LKR 140.00</p>
                    </div>
                    <div className="">
                      <p>Value 3</p>
                    </div>
                    <div className=" sm:hidden md:flex text-xs font-semibold">
                      <p>LKR 280.00</p>
                    </div>
                  </div>

                  <div>
                    {" "}
                    <div className=" mx-4">
                      <button className="rounded-full w-[20px] h-[20px] bg-zinc-100 items-center text-center text-sm[5px] font-light text-Gray2 hover:bg-Lightgray text-[12px]">
                        x
                      </button>
                    </div>
                  </div>
                </div>
                <hr className=" mx-4 border-Lightgray2 " />

                {/* 3rd row */}

                <div className=" flex flex-row items-center ">
                  <div className="  w-full grid grid-cols-4 text-xs py-2 sm:px-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-4 font-normal">
                    <div className=" ">
                      <div className=" sm:flex-col flex md:flex-row md:items-center sm:items-start">
                        <div>
                          <Image
                            alt=""
                            src={"/assets/shoppingcart/Image.png"}
                            width={50}
                            height={50}
                            className=" w-[50px] h-full"
                          />
                        </div>
                        <div className=" sm:text-[10px] lg:text-xs">
                          <p className="">Red Capsicum</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs font-medium">
                      <p>LKR 140.00</p>
                    </div>
                    <div className="">
                      <p>Value 3</p>
                    </div>
                    <div className=" sm:hidden md:flex text-xs font-semibold">
                      <p>LKR 280.00</p>
                    </div>
                  </div>

                  <div className=" ">
                    
                    <div className=" mx-4">
                      <button className="rounded-full w-[20px] h-[20px] bg-zinc-100 items-center text-center text-sm[5px] font-light text-Gray2 hover:bg-Lightgray text-[12px]">
                        x
                      </button>
                    </div>
                  </div>
                </div>
                <hr className=" mx-4 border-Lightgray2 " />

                <div className=" flex flex-row justify-between py-2">
                  <a href={`/shop`}>
                    <button className="text-Gray2 bg-Lightgray2 hover:bg-green-850 font-bold py-2   px-10 rounded-full inline-flex items-center  hover:bg-Green2 md:text-[11px] hover:text-white sm:text-[8px] sm:m-2">
                      <span className="">Return to shop</span>
                    </button>
                  </a>
                  <div>
                    <button className="text-Gray2 bg-Lightgray2 hover:bg-green-850 font-bold py-2   px-10 rounded-full inline-flex items-center  hover:bg-Green2 hover:text-white md:text-[11px] sm:text-[8px] sm:m-2 ">
                      <span className="">Update Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className=" text-Darkgrey flex md:p-1  border-x-0 border-t-0 border-b  md:justify-between text-Gray font-[14px]   ">
                  <div className=" w-full justify-between  ">
                    <p>PRODUCT</p>
                  </div>
                  <div className=" ">
                    <p>PRICE</p>
                  </div>
                  <div className="">
                    <p>QUANTITY</p>
                  </div>
                  <div className=" ">
                    <p>SUB TOTAL</p>
                  </div>
                </div> */}
            {/* <div className="justufy-between mx-5 "> */}
            {/* <div className="justify-between flex flex-row items-center "> */}
            {/* <div className="flex items-center font-[16px] sm:mr-6 md:mr-0">
                      <div className=" w-full  ">
                        <Image
                          className="w-full sm:mr-6 md:mr-0 "
                          src="/assets/shoppingcart/Image-1.png"
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text-Black1 text-sm sm:text-base :">
                        <p className="md:text-[14px] sm:text-[10px] sm:font-semibold md:font-normal">
                          Green Capsicum
                        </p>
                      </div>
                    </div> */}
            {/* <div className="text-Black1 text-sm sm:text-base sm:hidden  md:block ">
                      <p className=" md:text-[14px] sm:text-[10px] sm:font-semibold md:font-normal">
                        LKR140.00
                      </p>
                    </div>
                    <div className="ml-4 sm:ml-0 md:ml-16 sm:mr-4"> */}
            {/* plus */}
            {/* <div className="w-[100px] h-[40px] p-2 bg-white rounded-[150px] md:border border-neutral-200 justify-center items-center inline-flex"> */}
            {/* minus */}
            {/* <div className="w-[26px] h-[26px] relative">
                          <div className="w-[26px] h-[26px] left-0 top-0 items-center md:bg-zinc-100 rounded-[170px]">
                            <button onClick={decreaseValue1} className="m-1">
                              <FaMinus />
                            </button>
                          </div>
                        </div> */}

            {/* quantity */}
            {/* <div className="md:w-10 text-center text-zinc-900 text-base font-normal leading-normal sm:w-4"> */}
            {/* {quantity1}
                        </div> */}
            {/* plus */}
            {/* <div className="w-[26px] h-[26px] relative">
                          <div className="w-[26px] h-[26px] left-0 top-0 items-center md:bg-zinc-100 rounded-[170px]">
                            <button onClick={increaseValue1} className="p-1">
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div> */}

            {/* <div className="pl-14 text-Black1 text-sm sm:text-base  text-[14px] sm:hidden md:block">
                      <p className=" md:text-[14px] sm:text-[10px] sm:font-semibold md:font-normal">
                        LKR140.00
                      </p>
                    </div>
                    <div>
                      <button className="rounded-full w-[20px] h-[20px] bg-zinc-100 items-center text-center text-sm[5px] font-light text-Gray2 hover:bg-Lightgray text-[12px]">
                        x
                      </button>
                    </div>
                  </div>
                  <hr />
                </div> */}
            {/* second */}
            {/* 3rd */}
            {/* <div className="justufy-between mx-5 border flex flex-row ">
                  <div className="justify-between flex flex-row items-center ">
                    <div className="flex items-center">
                      <div className="mx-auto w-full  ">
                        <Image
                          className="w-full sm:mr-6 md:mr-0"
                          src="/assets/shoppingcart/Image.png"
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div> */}
            {/* <div className="text-Black1 text-sm">
                        <p className="md:text-[12px] sm:text-[10px] sm:font-semibold md:font-normal ml-2 ">
                          Red Capsicum
                        </p>
                      </div>
                    </div>
                    <div className="text-Black1 text-sm sm:hidden  md:block ">
                      <p className=" md:text-[12px] sm:text-[10px] sm:font-semibold md:font-normal ml-2">
                        LKR140.00
                      </p>
                    </div>
                    <div className="ml-4 sm:ml-0 md:ml-16 sm:mr-4"> */}
            {/* pus */}
            {/* <div className="w-[100px] h-[40px] p-2 bg-white rounded-[150px] md:border border-neutral-200 justify-center items-center inline-flex"> */}
            {/* minus */}
            {/* <div className="w-[26px] h-[26px] relative">
                          <div className="w-[26px] h-[26px] left-0 top-0 items-center md:bg-zinc-100 rounded-[170px]">
                            <button onClick={decreaseValue2} className="m-1">
                              <FaMinus />
                            </button>
                          </div>
                        </div> */}

            {/* quantity */}
            {/* <div className="md:w-10 text-center text-zinc-900 text-base font-normal leading-normal sm:w-4">
                          {quantity2}
                        </div> */}
            {/* plus */}
            {/* <div className="w-[26px] h-[26px] relative">
                          <div className="w-[26px] h-[26px] left-0 top-0 items-center md:bg-zinc-100 rounded-[170px]">
                            <button onClick={increaseValue2} className="p-1">
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pl-14 text-Black1 text-sm sm:text-base  text-[14px] sm:hidden md:block">
                      <p className=" md:text-[14px] sm:text-[10px] sm:font-semibold md:font-normal">
                        LKR140.00
                      </p>
                    </div>
                    <div>
                      <button className="rounded-full w-[20px] h-[20px] bg-zinc-100 items-center text-center text-sm[5px] font-light text-Gray2 hover:bg-Lightgray text-[12px]">
                        x
                      </button>
                    </div>
                  </div>
                </div> */}
            {/* 3rd */}
            {/* <hr />
                <div className="justify-between flex flex-row md:p-2 "> */}
            {/* 4th */}

            {/* <div>
                    <button className="text-Gray2 bg-Lightgray2 hover:bg-green-850 font-bold py-2   px-10 rounded-full inline-flex items-center  hover:bg-Green md:text-[11px] sm:text-[8px] sm:m-2">
                      <span className="">Return to shop</span>
                    </button>
                  </div>
                  <div>
                    <button className="text-Gray2 bg-Lightgray2 hover:bg-green-850 font-bold py-2   px-10 rounded-full inline-flex items-center  hover:bg-Green md:text-[11px] sm:text-[8px] sm:m-2 ">
                      <span className="">Update Cart</span>
                    </button>
                  </div>
                </div>
                {/* 4th */}
            {/* </div> */}

            {/* end first box */}

            {/* start 2nd box */}
            <div className="lg:flex flex-col lg:w-1/3 md:w-2/4 border w-full  rounded-t-md rounded-b-md p-4 lg:max-h-[240px] ">
              <div className=" my-2 -mt-1">
                <h4 className=" font-semibold"> Cart Total </h4>
              </div>
              <div className=" flex flex-col gap-3 ">
                <div className=" flex flex-row justify-between">
                  <p className=" text-Gray2 text-sm "> Subtotal: </p>
                  <p className=" text-black font-semibold text-[10px]">
                    {" "}
                    LKR 1500.00{" "}
                  </p>
                </div>

                <hr className="" />
                <div className=" flex flex-row justify-between">
                  <p className=" text-Gray2 text-sm "> Shipping: </p>
                  <p className=" text-black font-semibold text-[10px] ">
                    {" "}
                    FREE{" "}
                  </p>
                </div>

                <hr className=" " />
                <div className=" flex flex-row justify-between">
                  <p className=" text-Gray2 text-sm "> Total: </p>
                  <p className=" text-black font-semibold text-[13px] ">
                    LKR 1500.00
                  </p>
                </div>

                <hr className=" " />

                <a
                  className="flex flex-row py-1 rounded-full"
                  href={`/shoppingcart/checkout/`}
                >
                  <button className=" w-full border bg-Green2 rounded-full py-2 hover:bg-DarkGreen ">
                    {" "}
                    <p className=" text-white font-medium text-xs">
                      Proceed to checkout
                    </p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Shoppingcart;
