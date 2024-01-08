import React from "react";
import image1 from "../invoice/images/Image1.png";
import image2 from "../invoice/images/product2.png";
import image3 from "../invoice/images/Image3.png";
import tick from "../invoice/images/tick 1.png";
import Image from "next/image";
const Ordersummary = () => {
  return (
    <div className=" my-6">
      <h1 className="text-center text-Gray3 text-3xl font-semibold  leading-[38.40px]">
        Invoice
      </h1>
      <div className="border mt-6 border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex flex-col  rounded-lg border-solid ">
        {/* heading of the box */}
        <div className=" text-md lg:text-lg font-medium leading-8 whitespace-nowrap text-white  py-2 lg:py-4 px-4 lg:px-6  shadow-sm bg-Green2  rounded-t-lg items-start ">
          Order Summary
        </div>
        {/* address */}
        <div className="text-black text-xs lg:text-sm font-medium leading-6 lg:leading-8 my-3 px-4 lg:my-6 ">
          Navishka Malalage <br />
          !93, Hopland Estate,Kandy <br />
          Central Province, Sri Lanka, 20189
        </div>
        {/* small grid */}
        <div className=" justify-between w-full items-center">
          {/* first   */}
          <div className="  items-center">
            <div className=" flex flex-row ">
              <div className="  border-x-0 border-t-0  w-full grid bg-Lightgray2   text-sm py-3 px-4   grid-cols-4 sm:gap-6 lg:gap-6 items-start text-White font-semibold sm:text-[10px] ">
                {/* First Row */}
                <div className="">
                  <p>PRODUCT</p>
                </div>
                <div className="">
                  <p>PRICE</p>
                </div>
                <div className=" ">
                  <p>QUANTITY</p>
                </div>
                <div className="  "> </div>
              </div>
            </div>
            {/* Second Row */}

            {/* 3rd row */}

            <div className="flex flex-col  ">
              <div className="w-full grid text-xs py-2 px-4 grid-cols-4 items-center sm:gap-6 lg:gap- font-normal sm:text-[10px]">
                <div className="">
                  <div className="sm:flex-col flex md:flex-row md:items-center sm:items-start lg:gap-2 items-center text-center ">
                    <div>
                      <Image
                        alt=""
                        src={`/assets/ShopPage/fruits/Green fresh apples on white background..png`}
                        width={500}
                        height={500}
                        className="w-[50px] h-full"
                      />
                    </div>
                    <div className="text-[12px] lg:text-sm sm:pl-2">
                      <p className=" ">Apple</p>
                    </div>
                  </div>
                </div>

                <div className="text-[12px] lg:text-sm font-medium">
                  <p className="">LKR 500.00</p>
                </div>

                <div className="flex text-[12px]  font-medium sm:items-center">
                  <p>3x</p>
                </div>

                <div className="text-[12px] lg:text-sm font-medium items-end justify-end text-end">
                  <p className="">LKR 1500.00</p>
                </div>
              </div>

              <hr className=" " />
              <div className=" flex flex-row my-4 justify-between  mx-4">
                <div>
                  <p className=" text-md lg:text-md text-Gray3 font-semibold ">
                    Total
                  </p>
                </div>
                <div>
                  <p className=" text-md lg:text-md text-Gray3 font-semibold ">
                    LKR 1,500.00
                  </p>
                </div>
              </div>
              <hr className=" mx-4 " />

            </div>
          </div>
        </div>

        {/* Order confirmed tick */}
        <div className=" justify-center  items-center text-center my-20">
          <div className="flex  items-center justify-center">
            <Image
              width={1000}
              height={1000}
              src={tick}
              alt="tick"
              className="w-[50px] object-center overflow-hidden"
            />
          </div>

          {/* Order confirmed text */}
          <div className="text-neutral-800  items-center text-xl font-semibold ">
            Order Confirmed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordersummary;
