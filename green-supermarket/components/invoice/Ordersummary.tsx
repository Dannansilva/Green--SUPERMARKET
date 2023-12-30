import React from "react";
import image1 from "../invoice/images/Image1.png";
import image2 from "../invoice/images/product2.png";
import image3 from "../invoice/images/Image3.png";
import tick from "../invoice/images/tick 1.png";
import Image from "next/image";
const Ordersummary = () => {
  return (
    <div>
      <h1 className="text-center text-zinc-900 text-[32px] font-semibold  leading-[38.40px]">
        Invoice
      </h1>
      <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex flex-col pb-11 rounded-lg border-solid max-md:max-w-full">
        {/* heading of the box */}
        <div className="text-zinc-900 text-xl font-medium leading-8 whitespace-nowrap shadow-sm bg-green-500 self-stretch pl-6 pr-16 pt-6 pb-3.5 rounded-lg items-start max-md:max-w-full max-md:px-5">
          Order Summary
        </div>
        {/* address */}
        <div className="text-black text-xl font-medium leading-8 max-w-[336px] ml-6 mt-9 self-start max-md:ml-2.5">
          Anastasia Hawkins <br />
          145/8, Temple Road, Kelaniya. <br />
          Western Province, Sri Lanka 12645
        </div>
        {/* small grid */}
        <div className="bg-zinc-100 self-stretch flex w-full justify-between gap-5 mt-8 pl-5 pr-20 py-3.5 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="text-neutral-600 text-xs font-medium leading-3 tracking-wide uppercase">
            Product
          </div>
          <div className="self-stretch flex justify-between gap-5 items-start">
            <div className="text-neutral-600 text-xs font-medium leading-3 tracking-wide uppercase">
              Price
            </div>
            <div className="text-neutral-600 text-xs font-medium leading-3 tracking-wide uppercase self-stretch">
              Quantity
            </div>
          </div>
        </div>
        {/* product 1 */}
        <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-3 px-5 max-md:max-w-full max-md:flex-wrap">
          <div className="flex items-stretch justify-between gap-3">
            <Image
              src={image1}
              alt="image1"
              className="aspect-square object-contain object-center w-[70px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-zinc-900 text-sm leading-5 self-center w-[252px] my-auto">
              Red Capsicum
            </div>
          </div>
          <div className="self-center flex items-stretch justify-between gap-5 my-auto">
            <div className="text-zinc-900 text-sm leading-5">LKR560.00</div>
            <div className="text-zinc-900 text-sm leading-5">x5</div>
          </div>
          <div className="text-zinc-900 text-sm font-medium leading-5 self-center my-auto">
            LKR600.00
          </div>
        </div>
        {/* product 2 */}
        <div className="bg-neutral-200 self-stretch shrink-0 h-[3px] mt-1.5 max-md:max-w-full" />
        <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-3 px-5 max-md:max-w-full max-md:flex-wrap">
          <div className="flex items-stretch justify-between gap-3">
            <Image
              src={image2}
              alt="image2"
              className="aspect-square object-contain object-center w-[70px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-zinc-900 text-sm leading-5 self-center w-[252px] my-auto">
              Green Capsicum
            </div>
          </div>
          <div className="self-center flex items-stretch justify-between gap-5 my-auto">
            <div className="text-zinc-900 text-sm leading-5">LKR340.00</div>
            <div className="text-zinc-900 text-sm leading-5">x2</div>
          </div>
          <div className="text-zinc-900 text-sm font-medium leading-5 self-center my-auto">
            LKR500.00
          </div>
        </div>
        <hr className="border-t-2 border-zinc my-4" />
        {/* product 3 */}
        <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-3 px-5 max-md:max-w-full max-md:flex-wrap">
          <div className="flex items-stretch justify-between gap-3">
            <Image
              src={image3}
              alt="image2"
              className="aspect-square object-contain object-center w-[70px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-zinc-900 text-sm leading-5 self-center w-[252px] my-auto">
              Green Chili
            </div>
          </div>
          <div className="self-center flex items-stretch justify-between gap-5 my-auto">
            <div className="text-zinc-900 text-sm leading-5">LKR260.70</div>
            <div className="text-zinc-900 text-sm leading-5">x10</div>
          </div>
          <div className="text-zinc-900 text-sm font-medium leading-5 self-center my-auto">
            LKR260.00
          </div>
        </div>
        <hr className="border-t-2 border-zinc my-4" />
        <div className="flex w-[560px] max-w-full flex-col mr-3 self-end items-end max-md:mr-2.5">
          <div className="justify-between items-stretch bg-white flex w-[267px] max-w-full gap-5 py-3">
            <div className="text-neutral-600 text-base font-extrabold leading-6">
              Total:
            </div>
            <div className="text-zinc-900 text-base font-medium leading-5 self-center my-auto">
              LKR1695.00
            </div>
          </div>
          {/* Order confirmed tick */}
          <Image
            src={tick}
            alt="tick"
            className="aspect-square object-contain object-center w-[200px] overflow-hidden max-w-full ml-9 mt-14 self-start max-md:ml-2.5 max-md:mt-10"
          />
          {/* Order confirmed text */}
          <div className="text-neutral-800 text-4xl font-bold self-stretch mt-6 max-md:max-w-full">
            Order Confirmed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordersummary;
