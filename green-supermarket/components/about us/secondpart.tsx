import React from "react";
import abtimages2 from "../../public/assets/About us images/img2.png";
import icon1 from "../../public/assets/About us images/icon1.png";
import icon2 from "../../public/assets/About us images/icon2.png";
import icon3 from "../../public/assets/About us images/icon3.png";
import icon4 from "../../public/assets/About us images/icon4.png";

import Image from "next/image";

const SecondPart = () => {
  return (
    <div className="mt-20 my-10 flex items-center">
      <div className="w-[712px] h-[618px] mr-4">
        <Image src={abtimages2} alt="lady human farmer" />
      </div>
      <div className="flex-1 pl-5">
        <div className="text-green-950 text-[56px] font-semibold font-['Poppins'] leading-[67.20px]">
          A safe and trusted <br /> online shopping <br /> experience
        </div>
        <div className=" mt-2">
          
          {/* Reasons to shop */}
          <div className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-2">
            {/* 1 Reason */}
            <div className=" justify-start items-center gap-2 inline-flex  mt-5">
              <Image src={icon1} alt="icon 1" />

              <div className="w-56 text-zinc-900 text-lg font-semibold font-['Poppins'] leading-[27px]">
                100% organic food
                <p className="w-56 text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">
                  100% healthy & fresh food, straight from our farmers.
                </p>
              </div>
            </div>
            {/* 2 Reason */}
            <div className=" justify-start items-center gap-2 inline-flex  mt-5">
              <Image src={icon2} alt="icon 2" />

              <div className="w-56 text-zinc-900 text-lg font-semibold font-['Poppins'] leading-[27px]">
              Customer Feedback
                <p className="w-56 text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">
                Our happy customer
                </p>
              </div>
            </div>
            {/* 3 Reason */}
            <div className=" justify-start items-center gap-2 inline-flex mt-5 ">
              <Image src={icon3} alt="icon 3" />

              <div className="w-56 text-zinc-900 text-lg font-semibold font-['Poppins'] leading-[27px]">
              Great Support 24/7
                <p className="w-56 text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">
                Instant help and support
                </p>
              </div>
            </div>
            {/* 4 Reason */}
            <div className=" justify-start items-center gap-2 inline-flex  ">
              <Image src={icon4} alt="icon 4" />

              <div className="w-56 text-zinc-900 text-lg font-semibold font-['Poppins'] leading-[27px]">
              100% Secure Payment
                <p className="w-56 text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">
                  Safe payment procedures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
