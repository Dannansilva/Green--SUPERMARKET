import React from "react";

const rightpopup = () => {
  return (
    <div className="px-5  md:max-w-[984px] md:max-h-[507px] md:px-16 mt-6 bg-white rounded-lg flex-col items-start justify-items-center grid md:inline-flex shadow-2xl">
      <div>
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
      {/* Name box */}
      <div className=" pt-4 pb-4">
      <input
        type="text"
        placeholder="Type in your name"
        width={300}
        className="text-neutral-400 pl-4 pr-4 py-3 bg-white rounded-md border border-neutral-200 w-[400px] overflow-visible"
      />
      </div>
      {/* Email box */}
      <div className="pb-6">
      <input
        type="text"
        placeholder="Enter your email"
        width={300}
        className="text-neutral-400 pl-4 pr-4 py-3 bg-white rounded-md border border-neutral-200 w-[400px] overflow-visible"
      />
      </div>
      {/* Message box */}
      <div className=" pb-10">
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
  );
};

export default rightpopup;
