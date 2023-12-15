import React from "react";
import abtimages3 from "../../public/assets/About us images/img3.png";
import checkicon from "../../public/assets/About us images/Checkicon.png";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const ThirdPart = () => {
  return (
    <div className="lg:flex lg:justify-between">
      {/* Left side - Text */}
      <div className="lg:w-1/2">
        <div className="text-zinc-900 text-2xl md:text-5xl font-semibold  leading-[32px] md:leading-[57.60px] ">
          We deliver right to your doorstep!
        </div>

        <p className="w-full md:w-[536px] text-stone-500 text-base font-normal  leading-normal">
          Your satisfaction is our priority, and we are here to make every
          mealtime a delightful experience. Shop with us today and discover the
          joy of effortless, doorstep delivery! <br />

          {/* Features */}
          <div className=" inline-flex gap-2 mt-5 mb-4">
            <Image src={checkicon} alt="checkicon" className=" w-6 h-6" />
            <p>Same day delivery with Colombo.</p>
          </div>

          <div className=" inline-flex gap-2 mt-1 mb-4">
            <Image src={checkicon} alt="checkicon" className=" w-6 h-6" />
            <p>Orders over 8000LKR have free delivery.</p>
          </div>

          <div className=" inline-flex  gap-2 mb-4">
            <Image src={checkicon} alt="checkicon" className=" w-6 h-6" />
            <p>Contact our support desk to find out delivery prices</p>
          </div>
        </p>

        {/* Button */}
        <div>
          <button className="text-white bg-green-500 hover:bg-green-850 font-bold py-2 px-4 rounded-full inline-flex items-center mt-5 hover:bg-green-800">
            <span className="mr-2">Shop Now</span>
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="lg:w-1/2 lg:ml-5">
        <Image
          src={abtimages3}
          alt="farmer hooman"
          layout="responsive"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ThirdPart;
