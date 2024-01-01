import React from "react";
import Logoimg from "../../../public/assets/Logoimg.png";
import Image from "next/image";
import { BiLockAlt } from "react-icons/bi";
import visa from "../../../public/assets/Footer img/visa.png";
import mastercard from "../../../public/assets/Footer img/master.png";
import Link from "next/link";

const Footer = () => {

  
  const navItems = [{ home: "Home", path: "/" }];




  return (
    <div className="bg-DarkGreen2 flex flex-col items-center sm:py-5 sm:px-2 md:px-16 lg:px-24 xl:px-36 md:py-6 ">
      <div className="flex flex-col items-center md:items-stretch w-full sm:pt-2 pt-2 ">
        <div className="flex flex-col sm:flex-col lg:flex-row justify-between gap-5 lg:pb-[50px] lg:gap-[112px] md:gap-[20px] ">
          {/* Logo */}
          
          <div className="flex flex-col lg:max-w-[350px] sm:w-full">
            <div className="flex items-center justify-center sm:justify-center md:justify-between ">
            <a href={`/`}>
              <Image
                src={Logoimg}
                alt="logo"
                className="text-white text-3xl font-medium leading-10 tracking-tighter flex-shrink-0"
              />
              </a>
            </div>
            {/* Company Info */}
            <div className="flex flex-col md:mt-0 ">
              <div className="text-Lightgray4 text-sm py-4 justify-normal ">
                <p className=" md:text-justify  sm:justify-center sm:text-center text-center">
                  {" "}
                  Welcome to Green Supermarket, where freshness meets
                  convenience! At Green Supermarket, we are dedicated to
                  providing you with a green and sustainable shopping
                  experience.
                </p>
              </div>
              <div className="flex gap-4 justify-center sm:justify-center lg:justify-between">
                {/* Phone Number */}
                <div className="text-white text-sm  md:font-medium sm:font-normal font-normal leading-5 bg-DarkGreen2 py-1.5">
                  112 657 876
                </div>
                <div className="text-zinc-500 text-base leading-6 my-auto md:font-medium sm:font-normal font-normal ">
                  or
                </div>
                {/* Email */}
                <div className="text-white text-sm font-normal  sm:font-normal md:font-medium leading-5 bg-DarkGreen2 py-1.5">
                  green.s.lk@gmail.com
                </div>
              </div>
            </div>
          </div>

          <hr className=" md:block lg:hidden border-Lightgray4 sm:mx-2 mx-2" />

          <div className="  flex-col lg:w-2/3 w-full justify-between  mt-2  ">
            <div className=" grid sm:grid-cols-3 grid-cols-3  md:grid-cols-3">
              <div
                className={`  md:justify-start md:text-start justify-between sm:text-center`}
              >
                <ul className=" flex flex-col text-Lightgray md:leading-6  sm:text-xs text-xs leading-4 sm:leading-6  md:text-sm lg:text-start ">
                  <h2 className=" text-green-400 font-medium md:text-sm md:pb-2 sm:pb-2 pb-2  text-base sm:text-xs">
                    Proxy
                  </h2>
                  {navItems.map(({ home, path }) => (
                    <a key={``} href={path}>
                      <li className=" hover:text-green-50">Home</li>
                    </a>
                  ))}
                  <a href={`/shop`}>
                    <li className=" hover:text-green-50">Shop</li>
                  </a>
                  {/* <a href={`/settings`}>
                    <li className=" hover:text-green-50">Settings</li>
                 </a> */}
                </ul>
              </div>

              <div className="  md:justify-start md:text-start sm:text-center ">
                <ul className=" flex flex-col text-Lightgray md:leading-6  sm:text-xs text-xs  sm:leading-6  leading-4 md:text-sm  lg:text-start ">
                  <h2 className="  text-green-400 font-medium md:text-sm md:pb-2 sm:pb-2 pb-2 sm:text-xs text-base text-start sm:text-center md:text-start ">
                    Categories
                  </h2>
                  <a href={`/shop/1`}>
                      <li className=" hover:text-green-50">Fruits</li>
                    </a>
                    <a href={`/shop/2`}>
                      <li className=" hover:text-green-50">Vegetables</li>
                    </a>
                    <a href={`/shop/3`}>
                      <li className=" hover:text-green-50">Bread & Bakery</li>
                    </a>
                    <a href={`/shop/4`}>
                      <li className=" hover:text-green-50">Meat & Fish</li>
                    </a>
                    <a href={`/shop/5`}>
                      <li className=" hover:text-green-50">Spices</li>
                    </a>
                    <a href={`/shop/6`}>
                      <li className=" hover:text-green-50">Stationary</li>
                    </a>
                    <a href={`/shop/7`}>
                      <li className=" hover:text-green-50">Detergents</li>
                    </a>
                  
                   
                
                </ul>
              </div>

              <div className=" md:justify-start md:text-start sm:text-center ">
                <ul className=" flex flex-col text-Lightgray md:leading-6 sm:text-xs text-xs sm:leading-6 leading-4 md:text-sm  lg:text-start">
                  <h2 className=" text-green-400 font-medium md:text-sm md:pb-2 sm:pb-2 pb-2 sm:text-xs text-base">
                  Customer Service

                  </h2>
                  <a href={`/aboutus`}>
                    <li className=" hover:text-green-50">About us</li>
                  </a>
                  <a href={`/contactus`}>
                    {" "}
                    <li className=" hover:text-green-50">Contact us</li>
                  </a>
                    
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
        <div className="flex flex-col md:flex-row justify-between items-center shadow-sm bg-DarkGreen2 w-full gap-5  pb-2 sm:mt-6  ">
          {/* Copyright */}
          <div className="text-zinc-500 md:text-sm leading-5 md:mr-auto sm:text-xs  text-xs">
            GREEN Supermarket © 2023. All Rights Reserved
          </div>
          {/* Payment Options */}
          <div className="flex gap-2 md:justify-center">
            <Image src={visa} alt="visa" className="w-full h-[31.76px]" />
            <Image
              src={mastercard}
              alt="mastercard"
              width={100}
              height={100}
              className="w-full h-[31.76px]"
            />
            <div className="border border-Lightgray2 bg-zinc-900 flex flex-col px-1 py-1 rounded-md text-center w-full h-[31.76px] ">
              <div className="flex items-center gap-0.5">
                <BiLockAlt className="w-[8px] h-[8px] fill-white" />
                <div className="text-Lightgray2 text-[8px] ">Secure</div>
              </div>
              <div className="text-Lightgray2 text-[8px] font-semibold ">
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
