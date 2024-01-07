"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import countryList from "@/app/(pages)/shoppingcart/checkout/country";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import provinces from "./provinces";


const Billinginfo: React.FC= () => {

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedProvince, setSelectedProvince] = useState<string>("");


  const [streetAddress, setStreetAddress] = useState("");
  const [line2, setLine2] = useState("");
  const [country, setCountry] = useState("Sri Lanka");
  const [province, setProvince] = useState("Western");
  const [zipCode, setZipCode] = useState("");

  // type ChangeEvent<T = HTMLInputElement> = React.ChangeEvent<T>;


  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleProvinceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedProvince(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      streetAddress,
      line2,
      country,
      province,
      zipCode,
    });
  };
  return (
    // <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full pt-1 pb-6 rounded-lg border-solid max-md:max-w-full max-md:mt-6">
    //   <header className="text-zinc-900 text-xl font-medium leading-8 whitespace-nowrap shadow-sm bg-white justify-center pl-6 pr-16 py-5 rounded-lg items-start max-md:max-w-full max-md:px-5">
    //     Billing Address
    //   </header>
    //   <form
    //     className="flex flex-col items-stretch mt-9 px-10 max-md:max-w-full max-md:px-5"
    //     onSubmit={handleSubmit}
    //   >
    //     {/* Street info */}
    //     <div className="flex flex-col mt-5 px-6 max-md:max-w-full max-md:px-5">
    //       <div className="text-zinc-900 text-sm leading-5 self-stretch max-md:max-w-full">
    //         Street Address
    //       </div>
    //       <input
    //         type="text"
    //         value={streetAddress}
    //         onChange={(e) => setStreetAddress(e.target.value)}
    //         className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white self-stretch justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid items-start max-md:max-w-full max-md:pr-5"
    //         aria-label="Street Address Input"
    //       />
            
    //         <input
    //           type="text"
    //           value={line2}
    //           onChange={(e) => setLine2(e.target.value)}
    //           className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white self-stretch justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid items-start max-md:max-w-full max-md:pr-5"
    //           aria-label="Line 2 (Optional)"
    //         />

    //       <div className="self-stretch flex items-stretch justify-between gap-4 mt-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
    //         <div className="items-stretch flex grow basis-[0%] flex-col">
    //           <div className="text-zinc-900 text-sm leading-5">
    //             Country / Region
    //           </div>
    //           <input
    //             type="text"
    //             value={country}
    //             onChange={(e) => setCountry(e.target.value)}
    //             className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid max-md:max-w-full"
    //             aria-label="Country / Region Input"
    //           />
    //         </div>

    //         <div className="items-stretch flex grow basis-[0%] flex-col">
    //           <div className="text-zinc-900 text-sm leading-5">Province</div>
    //           <input
    //             type="text"
    //             value={province}
    //             onChange={(e) => setProvince(e.target.value)}
    //             className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid max-md:max-w-full"
    //             aria-label="Province Input"
    //           />
    //         </div>

    //         <div className="items-stretch flex grow basis-[0%] flex-col">
    //           <div className="text-zinc-900 text-sm leading-5">Zip Code</div>
    //           <input
    //             type="text"
    //             value={zipCode}
    //             onChange={(e) => setZipCode(e.target.value)}
    //             className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid max-md:max-w-full"
    //             aria-label="Zip Code Input"
    //           />
    //         </div>
    //       </div>

    //       {/* Button */}
    //       <div>
    //         <button className="text-white bg-green-500 hover:bg-green-850 font-bold py-2 px-4 rounded-full inline-flex items-center mt-5 hover:bg-green-800">
    //           <span className="mr-2">Save Changes</span>
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>
    <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full pt-1 pb-6 rounded-lg border-solid max-md:max-w-full mt-6">
      <h2 className="text-Gray3 text-[16px] mx-4 font-semibold leading-8 whitespace-nowrap  bg-white justify-center  py-4 rounded-lg items-start max-md:max-w-full ">
      Billing Address
      </h2>
      <hr  className=" mx-4"/>
      <form
        className="flex flex-col items-stretch my-2 mx-4 max-md:max-w-full "
        onSubmit={handleSubmit}
      >
        <div className="max-md:max-w-full ">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            {/* <div className="flex flex-col items-stretch  w-1/3 max-md:w-full max-md:ml-0">
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
                  className="text-Green2 text-xs  font-semibold leading-4 whitespace-nowrap justify-center border-Green2 bg-white px-4 py-2 rounded-full border border-solid "
                >
                  Choose Image
                </button>
              </div>
            </div> */}
            <div className="flex flex-col items-stretch w-full  max-md:w-full max-md:ml-0">
              <div className="flex flex-col w-full rounded-t-md rounded-b-md ">
                {/* <div className="flex flex-row justify-start bg-Green w-full text-md font-medium pl-[18px] py-4 rounded-t-md text-Black1 ">
                  <h4 className=" text-white"> Shopping details </h4>
                </div> */}

                {/* 1st line */}
                <div className="flex sm:flex-col md:gap-5 py-2 sm:mt-4 md:mt-0">
                  <div className="flex flex-col w-full ">
                    <span className="text-[14px] font-medium text-gray-800  ">
                    Street Address
                    </span>
                    {/* <div className="w-full pt-1">
                      <input
                        type="text"
                        placeholder="Line 1"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        className="pl-4 pr-4 py-3 bg-white rounded-md border text-Gray border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                      />
                    </div> */}
                    <div className="w-full pt-2">
                      <input
                        type="text"
                        placeholder="Address"
                        value={line2}
                        onChange={(e) => setLine2(e.target.value)}
                        className="pl-4 pr-4 py-3 bg-white text-Gray rounded-md border border-gray-300 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md"
                      />
                    </div>
                  </div>

                  {/* <div className="flex flex-col w-full  sm:mt-4 md:mt-0">
                    <span className="text-xs font-medium text-gray-900 ">
                      Last name
                    </span>
                   
                  </div> */}
                </div>

                
                {/* 2nd line */}


                {/* 3rd line */}


                {/* 4th line */}
                <div className="flex lg:flex-row sm:gap-5 md:gap-[55px] ">
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

                  <div className="flex flex-col w-full">
                    <span className=" text-xs  lg:text-sm font-medium">
                      Province
                    </span>
                    <div className="relative  pt-1">
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-300 pointer-events-none">
                        <MdOutlineKeyboardArrowDown className="h-3 w-3 text-Gray mt-1" />
                      </div>
                      <select
                        onChange={handleProvinceChange}
                        value={selectedProvince}
                        className="appearance-none block w-full px-4 sm:h-[42px] md:h-[45px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-DarkGreen3 text-Lightgray bg-white focus:border-2  text-left justify-start sm:text-[12px] md:text-[15px] "
                      >
                        <option value="" disabled>
                          Select Province
                        </option>
                        {provinces.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
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
            </div>
          </div>
        </div>
        {/* Button */}
        <div className=" items-center justify-start lg:justify-end flex">
        <div className=" items-center justify-start lg:justify-end mt-4 flex">
          <button
            className="text-white bg-Green2 hover:bg-green-850 lg:font-semibold py-2 px-4 lg:py-2.5 lg:px-6 rounded-full inline-flex items-center  hover:bg-green-800  "
            type="submit"
          >
            <span className=" text-[12px] lg:text-[14px] font-medium">Save Changes</span>
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};
export default Billinginfo;
