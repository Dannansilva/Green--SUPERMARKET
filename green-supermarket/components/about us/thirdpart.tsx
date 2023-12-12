import React from "react";
import abtimages3 from "../../public/assets/About us images/img3.png";
import checkicon from "../../public/assets/About us images/Checkicon.png";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const ThirdPart = () => {
  return (
    <div className="mt-20 my-10 flex items-center">
      <div className="flex-1 pl-5">
        <div className="text-green-950 text-[56px] font-semibold font-['Poppins'] leading-[67.20px]">
          We deliver right to <br /> your doorstep!
        </div>
        <div className="w-[536px] text-stone-500 text-base font-normal font-['Poppins'] leading-normal mt-4">
          <p>
            Your satisfaction is our priority, and we're here to make every
            mealtime a delightful experience. Shop with us today and discover
            the joy of effortless, doorstep delivery!
          </p>
          {/* What you get */}
          <div className="grid grid-flow-col grid-cols-1 grid-rows-3 gap-2 mt-6">
            <div className=" inline-flex gap-2 ">
              <Image src={checkicon} alt="check icon" />
              <p>Same day delivery with Colombo.</p>
            </div>

            <div className=" inline-flex gap-2 ">
              <Image src={checkicon} alt="check icon" />
              <p>Orders over 8000LKR has delivery free.</p>
            </div>

            <div className=" inline-flex gap-2 ">
              <Image src={checkicon} alt="check icon" />
              <p>Contact our support desk to find out delivery prices</p>
            </div>
          </div>

          {/* The button */}
          <div
              className="px-10 py-4  bg-green-500 rounded-[53px] justify-center items-center gap-4 inline-flex hover:bg-green-800  text-white hover:text-white text-lg font-semibold font-['Poppins'] leading-tight mt-4">
              <button>Shop now</button>
              <FaArrowRight />
            </div>

        </div>
      </div>
      <div className="w-[712px] h-[618px] ml-4">
        <Image src={abtimages3} alt="le girl getting her veggies" />
      </div>
    </div>
  );
};

export default ThirdPart;
