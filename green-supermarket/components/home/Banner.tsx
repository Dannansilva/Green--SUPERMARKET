import React from "react";
import Bannerimg from "../../public/assets/Bannar.png";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="w-[1320px] h-[600px] pl-[60px] pr-[664px] py-[155px] bg-black bg-opacity-20 rounded-[10px] justify-start items-center inline-flex">
      
    <div className="flex-col justify-start items-start gap-7 inline-flex">
      
        <div className="w-[596px] text-white text-5xl font-semibold font-['Poppins'] leading-[57.60px]">Fresh & Healthy<br/>Organic Food</div>
        <div className="justify-start items-start gap-3 inline-flex">
            <div className="w-0.5 h-[65px] bg-green-300" />
            <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="text-white text-xl font-medium font-['Poppins'] leading-[30px]">Sale up to</div>
                    <div className="px-3 py-1 bg-amber-500 rounded-[5px] justify-start items-start gap-2.5 flex">
                        <div className="text-white text-xl font-semibold font-['Poppins'] leading-[30px]">30% OFF</div>
                    </div>
                </div>
                <div className="opacity-80 text-white text-sm font-normal font-['Poppins'] leading-[21px]">Free shipping on all your order.</div>
            </div>
        </div>
        <div className="px-10 py-4 bg-white rounded-[53px] justify-center items-center gap-4 inline-flex">
            <div className="text-green-600 text-base font-semibold font-['Poppins'] leading-tight">Shop now</div>
            <div className="w-[15px] h-3 relative">
            </div>
        </div>
    </div>
</div>

  );
};

export default Banner;
