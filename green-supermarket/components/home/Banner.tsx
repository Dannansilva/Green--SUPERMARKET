import React from "react";
import Bannerimg from "../../public/assets/Bannar.png";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="  w-full  py-[155px] bg-black bg-opacity-20 rounded-[10px] justify-start items-center inline-flex">
      <div className="flex-col justify-start items-start gap-7 inline-flex pl-[60px] ">
        <div className="w-[596px] text-white text-5xl font-semibold font-['Poppins'] leading-[57.60px] ">
          Fresh & Healthy
          <br />
          Organic Food
        </div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="w-0.5 h-[65px] bg-green-300" />
          <div className="flex-col justify-start items-start gap-2 inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-white text-xl font-medium font-['Poppins'] leading-[30px]">
                Sale up to
              </div>
              <div className="px-3 py-1 bg-amber-500 rounded-[5px] justify-start items-start gap-2.5 flex">
                <div className="text-white text-xl font-semibold font-['Poppins'] leading-[30px]">
                  30% OFF
                </div>
              </div>
            </div>
            <div className="opacity-80 text-white text-sm font-normal font-['Poppins'] leading-[21px]">
              Free shipping on all your order.
            </div>
          </div>
        </div>
        {/* button */}
        <div
          className="px-10 py-4 bg-white rounded-[53px] justify-center items-center gap-4 inline-flex hover:bg-green-600 text-green-600 hover:text-white text-lg font-semibold font-['Poppins'] leading-tight">
          <button>Shop now</button>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Banner;
