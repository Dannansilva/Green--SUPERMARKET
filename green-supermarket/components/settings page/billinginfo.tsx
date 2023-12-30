"use client";
import React from "react";
import { useState } from "react";
const billinginfo = () => {
  const [streetAddress, setStreetAddress] = useState("");
  const [line2, setLine2] = useState("");
  const [country, setCountry] = useState("Sri Lanka");
  const [province, setProvince] = useState("Western");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here you would typically send the form data to your server or perform some other action.
    console.log({
      streetAddress,
      line2,
      country,
      province,
      zipCode,
    });
  };
  return (
    <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full pt-1 pb-6 rounded-lg border-solid max-md:max-w-full max-md:mt-6">
      <header className="text-zinc-900 text-xl font-medium leading-8 whitespace-nowrap shadow-sm bg-white justify-center pl-6 pr-16 py-5 rounded-lg items-start max-md:max-w-full max-md:px-5">
        Billing Address
      </header>
      <form
        className="flex flex-col items-stretch mt-9 px-10 max-md:max-w-full max-md:px-5"
        onSubmit={handleSubmit}
      >
        {/* Street info */}
        <div className="flex flex-col mt-5 px-6 max-md:max-w-full max-md:px-5">
          <div className="text-zinc-900 text-sm leading-5 self-stretch max-md:max-w-full">
            Street Address
          </div>
          <input
            type="text"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white self-stretch justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid items-start max-md:max-w-full max-md:pr-5"
            aria-label="Street Address Input"
          />
            
            <input
              type="text"
              value={line2}
              onChange={(e) => setLine2(e.target.value)}
              className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white self-stretch justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid items-start max-md:max-w-full max-md:pr-5"
              aria-label="Line 2 (Optional)"
            />

          <div className="self-stretch flex items-stretch justify-between gap-4 mt-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-zinc-900 text-sm leading-5">
                Country / Region
              </div>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid max-md:max-w-full"
                aria-label="Country / Region Input"
              />
            </div>

            <div className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-zinc-900 text-sm leading-5">Province</div>
              <input
                type="text"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid max-md:max-w-full"
                aria-label="Province Input"
              />
            </div>

            <div className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-zinc-900 text-sm leading-5">Zip Code</div>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid max-md:max-w-full"
                aria-label="Zip Code Input"
              />
            </div>
          </div>

          {/* Button */}
          <div>
            <button className="text-white bg-green-500 hover:bg-green-850 font-bold py-2 px-4 rounded-full inline-flex items-center mt-5 hover:bg-green-800">
              <span className="mr-2">Save Changes</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default billinginfo;
