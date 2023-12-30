import React from "react";

const updatepassword = () => {
  return (

    <div className="border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex grow flex-col items-stretch w-full pt-1 pb-6 rounded-lg border-solid max-md:max-w-full max-md:mt-6">
      <header className="text-zinc-900 text-xl font-medium leading-8 whitespace-nowrap shadow-sm bg-white justify-center pl-6 pr-16 py-5 rounded-lg items-start max-md:max-w-full max-md:px-5">
        Change Password
      </header>
      <form className="flex flex-col items-stretch mt-9 px-10 max-md:max-w-full max-md:px-5">
        <div className="label text-zinc-900 text-sm leading-5 self-stretch max-md:max-w-full">
          Current Password
        </div>
        <div className="input-group items-stretch border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white self-stretch flex justify-between gap-0 mt-1.5 px-4 py-3.5 rounded-md border-solid max-md:max-w-full max-md:flex-wrap">
          <label htmlFor="currentPassword" className="input-label">
            Password
          </label>

          <input
            type="password"
            id="currentPassword"
            className="input"
            aria-label="Current Password"
            aria-required="true"
            required
          />
        </div>
        <div className="input-group self-stretch flex items-stretch justify-between gap-4 mt-4 max-md:max-w-full max-md:flex-wrap">
          <div className="input-group-wrapper items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
            <div className="label text-zinc-900 text-sm leading-5 max-md:max-w-full">
              New Password
            </div>
            <div className="input-group items-stretch border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex justify-between gap-0 mt-1.5 px-4 py-3.5 rounded-md border-solid max-md:max-w-full max-md:flex-wrap">
              <label htmlFor="newPassword" className="input-label">
                Password
              </label>

              <input
                type="password"
                id="newPassword"
                className="input"
                aria-label="New Password"
                aria-required="true"
                required
              />
            </div>
          </div>
          <div className="input-group-wrapper items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
            <div className="label text-zinc-900 text-sm leading-5 max-md:max-w-full">
              Confirm Password
            </div>
            <div className="input-group items-stretch border border-[color:var(--Gray-Scale-Gray-100,#E6E6E6)] bg-white flex justify-between gap-0 mt-1.5 px-4 py-3.5 rounded-md border-solid max-md:max-w-full max-md:flex-wrap">
              <label htmlFor="confirmPassword" className="input-label">
                Password
              </label>

              <input
                type="password"
                id="confirmPassword"
                className="input"
                aria-label="Confirm Password"
                aria-required="true"
                required
              />
            </div>
          </div>
        </div>
        {/* Button */}
        <div>
            <button className="text-white bg-green-500 hover:bg-green-850 font-bold py-2 px-4 rounded-full inline-flex items-center mt-5 hover:bg-green-800">
              <span className="mr-2">Change Password</span>
            </button>
          </div>
      </form>
    </div>
  );
};

export default updatepassword;
