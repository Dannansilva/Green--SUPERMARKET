"use client";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import React, { useState, ChangeEvent } from "react";
import countryList from "@/app/(pages)/shoppingcart/checkout/country";
// import { HiUserCircle } from "react-icons/hi2";

const Accountsettings = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const [firstName, setFirstName] = useState("Navishka");
  const [lastName, setLastName] = useState("Malalage");
  const [email, setEmail] = useState("navishkanuwan11@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("0762630010");

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here you would typically send the form data to your server or perform some other action.
    console.log({
      firstName,
      lastName,
      email,
      phoneNumber,
    });
  };
  return (
    <div className="border  border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white -mt-6 flex grow flex-col items-stretch w-full pb-6 rounded-lg border-solid max-md:max-w-full">
      <h2 className="text-Gray3 text-md  font-semibold leading-8 whitespace-nowrap  bg-white justify-center mx-4 py-4 rounded-lg items-start max-md:max-w-full ">
        Account Settings
      </h2>
      <hr  className=" mx-4"/>
      <form
        className="flex flex-col items-stretch mt-6 lg:mt-2 mx-4 max-md:max-w-full "
        onSubmit={handleSubmit}
      >
        <div className="max-md:max-w-full ">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch  w-1/3 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="rounded-full overflow-hidden">
                  <Image
                    alt="User avatar"
                    width={500}
                    height={500}
                    src={`/assets/profile.png`}
                    className="w-[250px] object-cover"
                  />
                </div>

                <button
                  type="button"
                  className="text-Green2 text-[12px] lg:text-[14px] mt-4 font-medium leading-4 whitespace-nowrap justify-center border-Green2 bg-white px-6 py-2 rounded-full border border-solid "
                >
                  Choose Image
                </button>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[66%] ml-4 max-md:w-full max-md:ml-0 mt-2 lg:mt-4">
              <div className="flex flex-col w-full rounded-t-md rounded-b-md ">
                {/* <div className="flex flex-row justify-start bg-Green w-full text-md font-medium pl-[18px] py-4 rounded-t-md text-Black1 ">
                  <h4 className=" text-white"> Shopping details </h4>
                </div> */}

                {/* 1st line */}
                <div className="flex sm:flex-col md:gap-5 py-2 sm:mt-4 md:mt-0">
                  <div className="flex flex-col w-full ">
                    <span className="text-[14px] font-medium text-gray-900  ">
                      First name
                    </span>
                    <div className="w-full pt-1">
                      <input
                        type="text"
                        placeholder="first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="pl-4 pr-4 py-3 bg-white rounded-md border text-Gray border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full  sm:mt-4 md:mt-0">
                    <span className="text-[14px] font-medium text-gray-900 ">
                      Last name
                    </span>
                    <div className="w-full pt-1">
                      <input
                        type="text"
                        placeholder="last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="pl-4 pr-4 py-3 bg-white text-Gray rounded-md border border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                      />
                    </div>
                  </div>
                </div>
                {/* 2nd line */}
                <div className="flex flex-col w-full  py-2">
                  <span className=" text-[14px] font-medium text-gray-900 ">
                    Email
                  </span>
                  <div className="w-full pt-1">
                    <input
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-4 pr-4 py-3 bg-white rounded-md border text-Gray border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                    />
                  </div>
                </div>

                {/* 3rd line */}
                <div className="flex flex-col w-full py-2">
                  <span className=" text-[14px] font-medium text-gray-900 ">
                    Contact Number
                  </span>
                  <div className="w-full pt-1">
                    <input
                      type="text"
                      placeholder="Contact Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="pl-4 pr-4 py-3 bg-white rounded-md border text-Gray border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                    />
                  </div>
                </div>

                {/* 4th line */}

              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className=" items-center justify-start lg:justify-end mt-4 flex">
          <button
            className="text-white bg-Green2 hover:bg-green-850 lg:font-semibold py-2 px-4 lg:py-2.5 lg:px-6 rounded-full inline-flex items-center  hover:bg-green-800  "
            type="submit"
          >
            <span className=" text-[12px] lg:text-[14px] font-medium">Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
};
export default Accountsettings;
