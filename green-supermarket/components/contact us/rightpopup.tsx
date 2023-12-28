import React from "react";

const rightpopup = () => {
  return (
    <div className="px-5  lg:w-max lg:px-16 mt-6 md:pr-7 bg-white rounded-lg flex-col items-start justify-items-center grid md:inline-flex shadow-2xl">
      <div className=" w-full">
        {/* Heading with text */}
        <h1 className="text-2xl  font-semibold leading-9 mt-8 text-zinc-900">
          Just Say Hello!
        </h1>
        <p className=" text-zinc-500 text-sm font-normal leading-[21px] ">
          Our customer service department is working round-the clock to ensure
          you have a smooth process. Feel free to contact us if you have any
          issues.
        </p>
      </div>
      <div className="  lg:flex lg:items-stretch lg:justify-between lg:gap-4  max-lg:max-w-full max-lg:flex-wrap">
        {/* Name box */}
        <div className=" pt-4 pb-4 w-full">
          <input
            type="text"
            placeholder="Type in your name"
            width={300}
            className="text-neutral-400 pl-4 pr-4 py-3 bg-white rounded-md border border-neutral-200 w-[400px] overflow-visible"
          />
        </div>

        {/* Email box */}
        <div className="pb-6 lg:pt-4 w-full">
          <input
            type="text"
            placeholder="Enter your email"
            width={300}
            className="text-neutral-400 pl-4 pr-4 py-3 bg-white rounded-md border border-neutral-200 w-[400px] overflow-visible"
          />
        </div>
      </div>

      {/* Message box */}
      <div className=" pb-6 w-full">
        <textarea
          placeholder="Type your message here"
          className="text-neutral-400 pl-4 pr-4 py-2 bg-white rounded-md border border-neutral-200 w-[400px] overflow-visible"
          rows={5}
        />
        {/* Button */}
        <div>
          <button className="text-white bg-green-500 hover:bg-green-850 font-bold py-2 px-4 rounded-full inline-flex items-center mt-5 hover:bg-green-800">
            <span className="mr-2">Send Message</span>
          </button>
        </div>
      </div>
    </div>
    // <div>a</div>
  );
};

export default rightpopup;
