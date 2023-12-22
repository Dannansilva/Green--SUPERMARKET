import React from "react";
import Logoimg from "../../../public/assets/Logoimg.png";
import Image from "next/image";
import { BiLockAlt } from "react-icons/bi";
import visa from "../../../public/assets/Footer img/visa.png";
import mastercard from "../../../public/assets/Footer img/master.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-DarkGreen2 flex flex-col items-center sm:py-5 sm:px-2 md:px-16 lg:px-24 xl:px-36 md:py-10 ">
      <div className="flex flex-col items-center md:items-stretch w-full sm:pt-2 ">
        <div className="flex sm:flex-col lg:flex-row justify-between gap-5 lg:pb-[50px] lg:gap-[112px] md:gap-[20px] ">
          {/* Logo */}
          <div className="flex flex-col lg:max-w-[350px] sm:w-full">
            <div className="flex items-center sm:justify-center md:justify-between ">
              <Image
                src={Logoimg}
                alt="logo"
                className="text-white text-3xl font-medium leading-10 tracking-tighter flex-shrink-0"
              />
            </div>
            {/* Company Info */}
            <div className="flex flex-col md:mt-0 ">
              <div className="text-Lightgray4 text-sm py-4 justify-normal ">
                <p className=" md:text-justify  sm:justify-center sm:text-center ">
                  {" "}
                  Welcome to Green Supermarket, where freshness meets
                  convenience! At Green Supermarket, we are dedicated to
                  providing you with a green and sustainable shopping
                  experience.
                </p>
              </div>
              <div className="flex gap-4 sm:justify-center lg:justify-between">
                {/* Phone Number */}
                <div className="text-white text-sm  md:font-medium sm:font-normal leading-5 bg-DarkGreen2 py-1.5">
                  112 657 876
                </div>
                <div className="text-zinc-500 text-base leading-6 my-auto md:font-medium sm:font-normal ">
                  or
                </div>
                {/* Email */}
                <div className="text-white text-sm  sm:font-norm md:font-medium leading-5 bg-DarkGreen2 py-1.5">
                  green.s.lk@gmail.com
                </div>
              </div>
            </div>
          </div>
        

          <hr className=" md:block lg:hidden border-Lightgray4 sm:mx-2"/>

          <div className="  flex-row w-full justify-between  ">
            <div className=" grid sm:grid-cols-3  md:grid-cols-3">
               <div className={`  md:justify-start md:text-start justify-between`}>
                <ul className=" flex flex-col text-Lightgray md:leading-7  sm:text-xs sm:leading-6  md:text-base sm:text-center lg:text-start ">
                  <h2 className=" text-white font-semibold md:text-lg md:pb-4 sm:pb-2 sm:text-base">Proxy</h2>
                  <Link href={``}>
                    <li className=" hover:text-white">Home</li>
                    <li className=" hover:text-white">Shop</li>
                    <li className=" hover:text-white">Account</li>
                    <li className=" hover:text-white">About us</li>
                    <li className=" hover:text-white">Contact us</li>
                  </Link>
                </ul>
              </div>

              <div className="  md:justify-start md:text-start">
                <ul className=" flex flex-col text-Lightgray md:leading-7  sm:text-xs sm:leading-6  md:text-base sm:text-center lg:text-start ">
                  <h2 className=" text-white font-semibold md:text-lg md:pb-4 sm:pb-2 sm:text-base">Proxy</h2>
                  <Link href={``}>
                    <li className=" hover:text-white">Home</li>
                    <li className=" hover:text-white">Shop</li>
                    <li className=" hover:text-white">Account</li>
                    <li className=" hover:text-white">About us</li>
                    <li className=" hover:text-white">Contact us</li>
                  </Link>
                </ul>
              </div>

              <div className=" md:justify-start md:text-start  ">
                <ul className=" flex flex-col text-Lightgray md:leading-7 sm:text-xs sm:leading-6 md:text-base sm:text-center lg:text-start">
                  <h2 className=" text-white font-semibold md:text-lg md:pb-4 sm:pb-2 sm:text-base">Proxy</h2>
                  <Link href={``}>
                    <li className=" hover:text-white">Home</li>
                    <li className=" hover:text-white">Shop</li>
                    <li className=" hover:text-white">Account</li>
                    <li className=" hover:text-white">About us</li>
                    <li className=" hover:text-white">Contact us</li>
                  </Link>
                </ul>
              </div>

              {/* <div className="">
                <ul className=" flex flex-col text-Lightgray leading-7">
                  <h2 className=" text-white font-semibold text-lg pb-4">Proxy</h2>
                  <Link href={``}>
                    <li className=" hover:text-white">Home</li>
                    <li className=" hover:text-white">Shop</li>
                    <li className=" hover:text-white">Account</li>
                    <li className=" hover:text-white">About us</li>
                    <li className=" hover:text-white">Contact us</li>
                  </Link>
                </ul>
              </div> */}
            </div>
          </div>

          </div>
          {/* Copyright and Payment Options */}
          <div className="flex flex-col md:flex-row justify-between items-center shadow-sm bg-DarkGreen2 w-full gap-5 mt-8 pb-2  ">
            {/* Copyright */}
            <div className="text-zinc-500 md:text-sm leading-5 md:mr-auto sm:text-xs ">
              GREEN Supermarket © 2023. All Rights Reserved
            </div>
            {/* Payment Options */}
            <div className="flex gap-2 md:justify-center">
              <Image src={visa} alt="visa" className="w-full h-[31.76px]" />
              <Image
                src={mastercard}
                alt="mastercard"
                className="w-full h-[31.76px]"
              />
              <div className="border bg-zinc-900 flex flex-col px-1 py-1 rounded-md text-center w-full h-[31.76px]">
                <div className="flex items-center gap-0.5">
                  <BiLockAlt className="w-[8px] h-[8px] fill-white" />
                  <div className="text-white text-[8px] ">Secure</div>
                </div>
                <div className="text-white text-[8px] font-semibold ">
                  Payment
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
