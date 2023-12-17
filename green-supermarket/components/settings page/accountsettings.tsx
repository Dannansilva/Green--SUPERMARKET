import React from "react";

const accountsettings = () => {
  return (
    <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full pt-1 pb-6 rounded-lg border-solid max-md:max-w-full max-md:mt-6">
      <header className="text-zinc-900 text-xl font-medium leading-8 whitespace-nowrap shadow-sm bg-white justify-center pl-6 pr-16 py-5 rounded-lg items-start max-md:max-w-full max-md:px-5">
        Account Settings
      </header>
      <form className="flex flex-col items-stretch mt-9 px-10 max-md:max-w-full max-md:px-5">
        <div className="max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-center max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/195128baf2de98fedc744ad2bb86a40c3c0d6baeffc81179dc4b6641a56a4aae?apiKey=e23887ebcb4d49baa3ffa634cde245df&"
                  className="aspect-[1.14] object-contain object-center w-[184px] fill-black overflow-hidden"
                  alt="User avatar"
                />
                <button
                  className="text-green-600 text-sm font-semibold leading-4 whitespace-nowrap justify-center items-stretch border-[color:var(--Branding-Success,#00B207)] bg-white mt-6 px-8 py-3.5 rounded-[43px] border-2 border-solid max-md:px-5"
                  type="button"
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
                <div
                  id="first-name"
                  className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid items-start max-md:max-w-full max-md:pr-5"
                >
                  Sashya
                </div>
                <label
                  htmlFor="last-name"
                  className="text-zinc-900 text-sm leading-5 mt-4 max-md:max-w-full"
                >
                  Last name
                </label>
                <div
                  id="last-name"
                  className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid items-start max-md:max-w-full max-md:pr-5"
                >
                  Hawkins
                </div>
                <label
                  htmlFor="email"
                  className="text-zinc-900 text-sm leading-5 mt-4 max-md:max-w-full"
                >
                  Email
                </label>
                <div
                  id="email"
                  className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white justify-center mt-1.5 pl-4 pr-16 py-4 rounded-md border-solid items-start max-md:max-w-full max-md:pr-5"
                >
                  sashyhawk@gmail.com
                </div>
                <label
                  htmlFor="phone-number"
                  className="text-zinc-900 text-sm leading-5 mt-4 max-md:max-w-full"
                >
                  Phone Number
                </label>
                <div
                  id="phone-number"
                  className="text-stone-500 text-base leading-5 whitespace-nowrap border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white justify-center mt-1.5 pl-4 pr-16 py-5 rounded-md border-solid items-start max-md:max-w-full max-md:pr-5"
                >
                  037483990
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="text-white text-sm font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-green-600 mt-3.5 px-8 py-3.5 rounded-[43px] self-start max-md:px-5"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};
export default accountsettings;
