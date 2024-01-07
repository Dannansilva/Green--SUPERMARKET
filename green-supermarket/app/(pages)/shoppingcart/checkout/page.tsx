"use client";
import React, { useState, ChangeEvent } from "react";
import { LiaHomeSolid } from "react-icons/lia";
import Link from "next/link";
import countryList from "./country";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import CustomDatePicker from "./datepicker";

const Checkout: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };
  const navItems = [{ home: "Home", path: "/" }];

  return (
    <div>
      <div
        className="flex w-full bg-cover bg-no-repeat items-center max-h-[90px] sm:max-h-[60px] md:max-h-[90px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25)), url('/assets/ShopPage/Breadcrumbs.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "120px",
        }}
      >
        <div className="flex flex-row items-center mx-2 sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36 gap-3 flex-1 cursor-pointer">
          <div>
            {navItems.map(({ home, path }) => (
              <a key={home} href={path}>
                <div>
                  <LiaHomeSolid className="text-Lightgray hover:text-white sm:text-xs md:text-base lg:text-md" />
                </div>
              </a>
            ))}
          </div>
          <div className="text-Lightgray hover:text-white cursor-auto">
            <p className="sm:text-xs md:text-base lg:text-md ">{`>`}</p>
          </div>
          <div className="flex">
            <p className="text-Green hover:text-white sm:text-xs md:text-base lg:text-md ">
              Shopping cart
            </p>
          </div>
        </div>
      </div>

      {/* Checkout */}
      <div className="sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36">
        <div className="flex flex-row justify-center font-semibold text-lg my-4 sm:text-xl md:text-2xl lg:text-2xl">
          <h2> Checkout</h2>
        </div>

        <div className="flex sm:flex-col lg:flex-col mb-8 ">
          {/* sm / md device cart balance */}
          <div className="flex flex-col w-full border rounded-t-md rounded-b-md p-4 lg:hidden mb-8 sm:shadow-lg  ">
            <div className=" my-2 -mt-1">
              <h4 className=" font-semibold"> Cart Total </h4>
            </div>
            <div className=" flex flex-col gap-3 ">
              <div className=" flex flex-row justify-between">
                <p className=" text-Gray2 text-sm "> Subtotal: </p>
                <p className=" text-black font-semibold text-xs">
                  {" "}
                  LKR 1500.00{" "}
                </p>
              </div>

              <hr className="" />
              <div className=" flex flex-row justify-between">
                <p className=" text-Gray2 text-sm "> Shipping: </p>
                <p className=" text-black font-semibold text-xs "> FREE </p>
              </div>

              <hr className=" " />
              <div className=" flex flex-row justify-between">
                <p className=" text-Gray2 text-sm "> Total: </p>
                <p className=" text-black font-bold text-sm "> LKR 1500.00 </p>
              </div>

              <hr className=" " />

              <a
                className="flex flex-row py-3 rounded-full md:justify-end sm:justify-center"
                href=""
              >
                <button className=" sm:w-full sm:mx-[ md:mx-0 md:w-[180px] md:items-center  border bg-Green2 rounded-full py-2 md:py-2  sm:-mb-4 md:-mb-2 hover:bg-DarkGreen   ">
                  {" "}
                  <p className=" text-white font-medium md:text-xs text-xs">
                    Proceed to checkout
                  </p>
                </button>
              </a>
            </div>
          </div>
          <div className="flex lg:flex-row justify-between sm:flex-col gap-4 ">
            {/* 1st column */}
            <div className="flex flex-col w-full gap-8 sm:gap-8">
              {/* 1st div */}
              <div className="flex flex-col w-full border rounded-t-md rounded-b-md shadow-lg">
                <div className="flex flex-row justify-start bg-Green w-full text-md font-medium pl-[18px] py-4 rounded-t-md text-Black1 ">
                  <h4 className=" text-white"> Shopping details </h4>
                </div>

                {/* 1st line */}
                <div className="flex sm:flex-col md:flex-row md:gap-5 py-2 sm:mt-4 md:mt-0">
                  <div className="flex flex-col w-full px-4">
                    <span className="text-xs lg:text-sm font-medium ">
                      First name
                    </span>
                    <div className="w-full pt-1">
                      <input
                        type="text"
                        placeholder="first name"
                        className="pl-4 pr-4 py-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full px-4 sm:mt-4 md:mt-0">
                    <span className="text-xs lg:text-sm font-medium">
                      Last name
                    </span>
                    <div className="w-full pt-1">
                      <input
                        type="text"
                        placeholder="last name"
                        className="pl-4 pr-4 py-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                      />
                    </div>
                  </div>
                </div>
                {/* 2nd line */}
                <div className="flex flex-col w-full px-4 py-2">
                  <span className=" text-xs lg:text-sm font-medium">
                    Street Address
                  </span>
                  <div className="w-full pt-1">
                    <input
                      type="text"
                      placeholder="Line 1"
                      className="pl-4 pr-4 py-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                    />
                  </div>
                </div>

                {/* 3rd line */}
                <div className="flex flex-col w-full px-4 py-2">
                  <span className=" text-xs lg:text-sm font-medium">
                    Street Address
                  </span>
                  <div className="w-full pt-1">
                    <input
                      type="text"
                      placeholder="Line 2"
                      className="pl-4 pr-4 py-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                    />
                  </div>
                </div>

                {/* 4th line */}
                <div className="flex sm:flex-row md:flex-row sm:gap-5 md:gap-[55px] px-4 py-2 pb-8 ">
                  <div className="flex flex-col w-full">
                    <span className=" text-xs  lg:text-sm font-medium">
                      Country / Region
                    </span>
                    <div className="relative  pt-1">
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-300 pointer-events-none">
                        <MdOutlineKeyboardArrowDown className="h-3 w-3 text-Gray mt-1" />
                      </div>
                      <select
                        onChange={handleCountryChange}
                        value={selectedCountry}
                        className="appearance-none block w-full px-4 sm:h-[42px] md:h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-DarkGreen3 text-Lightgray bg-white focus:border-2  text-left justify-start sm:text-[12px] md:text-[15px] "
                      >
                        <option value="" disabled>
                          Select Country
                        </option>
                        {countryList.map((country) => (
                          <option key={country.id} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col w-full py-1 sm:-mt-1 ">
                    <span className=" sm:text-xs lg:text-sm font-medium">
                      Zip Code
                    </span>
                    <div className="w-full pt-1">
                      <input
                        type="text"
                        placeholder="xxxxx"
                        className="pl-4 pr-4 py-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2nd div */}
              <div className="flex flex-col w-full border rounded-t-md rounded-b-md shadow-lg">
                <div className="flex flex-row justify-start bg-Green w-full text-md font-medium pl-[18px] py-4 rounded-t-md text-Black1 ">
                  <h4 className=" text-white"> Choose a payment method </h4>
                </div>

                {/* 1st line */}
                <div className="flex flex-col w-full px-4 py-2 mt-2">
                  <span className=" text-xs lg:text-sm font-medium">
                    Credit/Debit Card
                  </span>
                  <div className="w-full pt-3">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name="radioGroup"
                      />
                      <span className="ml-2">
                        <Image
                          src={"/assets/checkout/Frame 142.png"}
                          width={50}
                          height={25}
                          alt=""
                          className=" w-full h-5"
                        />
                      </span>
                    </label>

                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio"
                        name="radioGroup"
                      />
                      <span className="ml-2">
                        <Image
                          src={"/assets/checkout/Method=Mastercard.png"}
                          width={50}
                          height={25}
                          alt=""
                          className=" w-full h-5"
                        />
                      </span>
                    </label>
                  </div>
                </div>
                {/* 2nd line */}
                <div className="flex flex-col w-full px-4 py-2">
                  <span className=" text-xs lg:text-sm font-medium">
                    Card Number
                  </span>
                  <div className="w-full pt-1">
                    <input
                      type="text"
                      placeholder="xxxx xxxx xxxx"
                      className="pl-4 pr-4 py-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                    />
                  </div>
                </div>

                {/* 3rd line */}
                <div className="flex sm:flex-col md:flex-row md:gap-5 py-3 md:mt-0 pb-8">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col w-full px-4">
                      <span className="text-xs lg:text-sm font-medium ">
                        Expiry Date
                      </span>
                      <div className="w-full pt-1">
                        <CustomDatePicker />
                      </div>
                    </div>

                    <div className="flex flex-col w-full px-4 md:mt-0">
                      <span className="text-xs lg:text-sm font-medium">
                        CVV{" "}
                      </span>
                      <div className="w-full pt-1">
                        <input
                          type="text"
                          placeholder="xxx"
                          className="px-4 py-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-full px-4 sm:mt-4  md:-ml-4 md:mt-0">
                    <span className="text-xs lg:text-sm font-medium">OTP </span>
                    <div className="w-full pt-1">
                      <input
                        type="text"
                        placeholder="******"
                        className="pl-4 pr-4 py-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd column */}
            <div className="lg:flex lg:flex-col lg:w-1/3 border w-full  rounded-t-md rounded-b-md p-4 lg:max-h-[250px] hidden sm:hidden">
              <div className=" my-2 -mt-1">
                <h4 className=" font-semibold"> Cart Total </h4>
              </div>
              <div className=" flex flex-col gap-3 ">
                <div className=" flex flex-row justify-between">
                  <p className=" text-Gray2 text-sm "> Subtotal: </p>
                  <p className=" text-black font-semibold text-xs">
                    {" "}
                    LKR 1500.00{" "}
                  </p>
                </div>

                <hr className="" />
                <div className=" flex flex-row justify-between">
                  <p className=" text-Gray2 text-sm "> Shipping: </p>
                  <p className=" text-black font-semibold text-xs "> FREE </p>
                </div>

                <hr className=" " />
                <div className=" flex flex-row justify-between">
                  <p className=" text-Gray2 text-sm "> Total: </p>
                  <p className=" text-black font-bold text-sm ">
                    {" "}
                    LKR 1500.00{" "}
                  </p>
                </div>

                <hr className=" " />

                <a
                  className="flex flex-row py-3 rounded-full"
                  href={`/invoice`}
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
        </div>
      </div>
    </div>
  );
};

export default Checkout;
