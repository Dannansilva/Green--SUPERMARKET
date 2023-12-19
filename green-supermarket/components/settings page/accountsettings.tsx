"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import unionicon from "../../public/assets/Settings images/imageforhuman.png";

const accountsettings = () => {
  const [firstName, setFirstName] = useState("Sashya");
  const [lastName, setLastName] = useState("Hawkins");
  const [email, setEmail] = useState("sashyhawk@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("037483990");

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
    <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full pt-1 pb-6 rounded-lg border-solid max-md:max-w-full max-md:mt-6">
      <header className="text-zinc-900 text-xl font-medium leading-8 whitespace-nowrap shadow-sm bg-white justify-center pl-6 pr-16 py-5 rounded-lg items-start max-md:max-w-full max-md:px-5">
        Account Settings
      </header>
      <form
        className="flex flex-col items-stretch mt-9 px-10 max-md:max-w-full max-md:px-5"
        onSubmit={handleSubmit}
      >
        <div className="max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-center max-md:mt-10">
                <Image
                  loading="lazy"
                  src={unionicon}
                  className="aspect-[1.14] object-contain object-center w-[184px] fill-black overflow-hidden"
                  alt="User avatar"
                />
                <button
                  type="button"
                  className="text-green-600 text-sm font-semibold leading-4 whitespace-nowrap justify-center items-stretch border-[color:var(--Branding-Success,#00B207)] bg-white mt-6 px-8 py-3.5 rounded-[43px] border-2 border-solid max-md:px-5"
                >
                  Choose Image
                </button>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                <label
                  htmlFor="first-name"
                  className="text-zinc-900 text-sm leading-5 max-md:max-w-full"
                >
                  First name
                </label>
                <input
                  id="first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid items-start max-md:max-w-full max-md:pr-5"
                />
                <label
                  htmlFor="last-name"
                  className="text-zinc-900 text-sm leading-5 mt-4 max-md:max-w-full"
                >
                  Last name
                </label>
                <input
                  id="last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid items-start max-md:max-w-full max-md:pr-5"
                />
                <label
                  htmlFor="email"
                  className="text-zinc-900 text-sm leading-5 mt-4 max-md:max-w-full"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white justify-center mt-1.5 pl-4 pr-16 py-4 rounded-md border-solid items-start max-md:max-w-full max-md:pr-5"
                />
                <label
                  htmlFor="phone-number"
                  className="text-zinc-900 text-sm leading-5 mt-4 max-md:max-w-full"
                >
                  Phone Number
                </label>
                <input
                  id="phone-number"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid items-start max-md:max-w-full max-md:pr-5"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div>
          <button
            className="text-white bg-green-500 hover:bg-green-850 font-bold py-2 px-4 rounded-full inline-flex items-center mt-5 hover:bg-green-800 "
            type="submit"
          >
            <span className="mr-2">Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
};
export default accountsettings;
