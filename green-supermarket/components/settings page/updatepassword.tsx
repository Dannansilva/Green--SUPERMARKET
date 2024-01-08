"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
}
const updatepassword = () => {
  return (
   
    <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full pt-1 pb-6 rounded-lg border-solid max-md:max-w-full my-6">
      <h2 className="text-Gray3 text-md font-semibold leading-8 whitespace-nowrap  bg-white justify-center mx-4 py-4 rounded-lg items-start max-md:max-w-full max-md:px-5">
        Change Password
      </h2>
      <hr  className=" mx-4"/>
      <form
        className="flex flex-col items-stretch mx-4 max-md:max-w-full "
        onSubmit={handleSubmit}
      >
        <div className="max-md:max-w-full ">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
           
            <div className="flex flex-col items-stretch w-full  max-md:w-full max-md:ml-0 mt-2 lg:mt-4">
              <div className="flex flex-col w-full rounded-t-md rounded-b-md ">
               
                {/* 1st line */}
                <div className="flex sm:flex-col md:gap-5 py-2 sm:mt-4 md:mt-0">
                  <div className="flex flex-col w-full ">
                    <span className="text-[14px] font-medium text-gray-900  ">
                      Current Password
                    </span>
                    <div className="w-full pt-1">
                      <input
                        type="password"
                        placeholder="Password"
                        aria-label="Current Password"
                        aria-required="true"
                        required
                        className=" input pl-4 pr-4 py-3 bg-white rounded-md border text-Gray border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                      />
                    </div>
                  </div>
                  </div>
<div className=" flex flex-col lg:flex-row items-center gap-4">
                  <div className="flex flex-col w-full  sm:mt-4 md:mt-0">
                    <span className="text-[14px] font-medium text-gray-900 ">
                      New Password
                    </span>
                    <div className="w-full pt-1">
                      <input
                       type="password"
                       placeholder="Password"
                       aria-label="New Password"
                       aria-required="true"
                       required
                        className="pl-4 pr-4 py-3 bg-white text-Gray rounded-md border border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                      />
                    </div>
                  </div>
                
                {/* 2nd line */}
                <div className="flex flex-col w-full  py-2">
                  <span className=" text-[14px] font-medium text-gray-900 ">
                    Confirm Password
                  </span>
                  <div className="w-full pt-1">
                    <input
                       type="password"
                       placeholder="Password"
                       aria-label="Confirm Password"
                       aria-required="true"
                       required
                      className="pl-4 pr-4 py-3 bg-white rounded-md border text-Gray border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                    />
                  </div>
                </div>
                </div>
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
            <span className=" text-[12px] lg:text-[14px] font-medium">
              Save Changes
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default updatepassword;
