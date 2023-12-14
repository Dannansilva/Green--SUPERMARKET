import React from "react";
import Logoimg from "../../../public/assets/Logoimg.png";
import Image from "next/image";
import visa from "../../../public/assets/Footer img/visa.png";
import mastercard from "../../../public/assets/Footer img/master.png";
import { BiLockAlt } from "react-icons/bi";
const footer = () => {
  return (
    <div className="justify-center items-center bg-green-950 flex flex-col pt-12 px-16 max-md:px-5">
      <div className="flex w-full max-w-[1320px] flex-col items-stretch mt-2.5 max-md:max-w-full">
        <div className="flex items-start justify-between gap-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
            <div className="items-center flex justify-between gap-2">
                {/* logo image */}
              <Image
                src={Logoimg}
                alt="logo"
                className=" text-white text-3xl font-medium leading-10 tracking-tighter self-stretch  shrink basis-auto"
              />
            </div>
            <div className="text-zinc-500 text-sm leading-5 mt-4">
              Welcome to Green Supermarket, where freshness meets convenience!
              At Green Supermarket, we are dedicated to providing you with a
              green and sustainable shopping experience.
            </div>
            <div className="items-center flex gap-4 mt-4 pr-14 max-md:pr-5">
                {/* number */}
              <div className="text-white text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch shadow-sm bg-green-950 self-stretch grow py-1.5">
                112 657 876
              </div>
              <div className="text-zinc-500 text-base leading-6 my-auto">
                or
              </div>
              {/* email */}
              <div className="text-white text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch shadow-sm bg-green-950 self-stretch grow py-1.5">
                green.s.lk@gmail.com
              </div>
            </div>
          </div>
          {/* pages */}
          <div className="items-stretch self-center flex basis-[0%] flex-col my-auto pb-8 ">
            <div className="text-white text-base font-medium leading-6 whitespace-nowrap">
              My Account
            </div>
            <div className="text-neutral-400 text-sm leading-5 whitespace-nowrap mt-5">
              My Account
            </div>
            <div className="text-neutral-400 text-sm leading-5 whitespace-nowrap mt-3">
              Order History
            </div>
            <div className="text-neutral-400 text-sm leading-5 whitespace-nowrap mt-3">
              Shopping Cart
            </div>
          </div>
          <div className="items-stretch self-center flex basis-[0%] flex-col my-auto">
            <div className="text-white text-base font-medium leading-6">
              Help
            </div>
            <div className="text-neutral-400 text-sm leading-5 mt-5">
              Contact
            </div>
            <div className="text-neutral-400 text-sm leading-5 mt-3">Faqs</div>
            <div className="text-neutral-400 text-sm leading-5 whitespace-nowrap mt-3">
              Terms & Condition
            </div>
            <div className="text-neutral-400 text-sm leading-5 mt-3">
              Privacy Policy
            </div>
          </div>
          <div className="items-stretch self-center flex basis-[0%] flex-col my-auto pb-8">
            <div className="text-white text-base font-medium leading-6 whitespace-nowrap">
              Proxy
            </div>
            <div className="text-neutral-400 text-sm leading-5 whitespace-nowrap mt-5">
              About
            </div>
            <div className="text-neutral-400 text-sm leading-5 whitespace-nowrap mt-3">
              Shop
            </div>
            <div className="text-neutral-400 text-sm leading-5 whitespace-nowrap mt-3">
              Product
            </div>
          </div>
        </div>
        <div className="justify-between items-center shadow-sm bg-green-950 flex w-full gap-5 mt-16 py-6 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-zinc-500 text-sm leading-5 grow shrink basis-auto my-auto">
            GREEN Supermarket © 2023. All Rights Reserved
          </div>
          {/* payment options */}
          <div className="items-stretch self-stretch flex gap-2 max-md:justify-center">
            <Image
              src={visa}
              alt="visa"
              className="aspect-[1.41] object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full"
            />
            <Image
              src={mastercard}
              alt="mastercard"
              className="aspect-[1.41] object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="border border-[color:var(--Gray-Scale-Gray-800,#333)] bg-zinc-900 flex grow basis-[0%] flex-col items-stretch px-1.5 py-1 rounded-md border-solid">
              <div className="flex items-stretch justify-between gap-0.5">
              <BiLockAlt className="aspect-square object-contain object-center w-[13px] fill-white overflow-hidden shrink-0 max-w-full"/>
                <div className="text-white text-xs leading-3 grow whitespace-nowrap self-start">
                  Secure
                </div>
              </div>
              <div className="text-white text-center text-xs font-semibold leading-3 whitespace-nowrap">
                Payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
