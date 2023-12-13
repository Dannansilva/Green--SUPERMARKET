import React from "react";
import abtimages2 from "../../public/assets/About us images/img2.png";
import icon1 from "../../public/assets/About us images/icon1.png";
import icon2 from "../../public/assets/About us images/icon2.png";
import icon3 from "../../public/assets/About us images/icon3.png";
import icon4 from "../../public/assets/About us images/icon4.png";

import Image from "next/image";

const SecondPart = () => {
  return (
    <div className="lg:flex">
      {/* Image on the left for large screens */}
      <div className="lg:w-1/2">
        <Image src={abtimages2} alt="farmer hooman" className="w-full h-full" />
      </div>

      {/* Content on the right for large screens */}
      <div className="lg:w-1/2 p-4">
        {/* heading */}
        <div className="text-green-950 text-[36px] font-semibold font-['Poppins'] leading-[47.20px]">
          A safe and trusted online shopping experience
        </div>

        {/* Reasons to shop */}
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:grid-rows-3   gap-4 mt-4 justify-center">
          {/* first reason */}
          <div className="inline-flex">
            <Image src={icon1} alt="icon1" className="w-9 h-9" />
            <div className="flex-col justify-center items-start gap-2">
              <p className="text-zinc-900 text-lg font-medium font-['Poppins'] leading-[27px]">
                100% organic food
              </p>
              <p className="text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">
                100% healthy & fresh food, straight from our farmers.
              </p>
            </div>
          </div>

          {/* second reason */}
          <div className="inline-flex">
            <Image src={icon2} alt="icon1" className="w-9 h-9" />
            <div className="flex-col justify-center items-start gap-2">
              <p className="text-zinc-900 text-lg font-medium font-['Poppins'] leading-[27px]">
                Customer Feedback
              </p>
              <p className="text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">
                Our happy customer
              </p>
            </div>
          </div>

          {/* third reason */}
          <div className="inline-flex">
            <Image src={icon3} alt="icon1" className="w-9 h-9" />
            <div className="flex-col justify-center items-start gap-2">
              <p className="text-zinc-900 text-lg font-medium font-['Poppins'] leading-[27px]">
                Great Support 24/7
              </p>
              <p className="text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">
                Instant help and support
              </p>
            </div>
          </div>

          {/* fourth reason */}
          <div className="inline-flex">
            <Image src={icon4} alt="icon1" className="w-9 h-9" />
            <div className="flex-col justify-center items-start gap-2">
              <p className="text-zinc-900 text-lg font-medium font-['Poppins'] leading-[27px]">
                100% Secure Payment
              </p>
              <p className="text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">
                Safe payment procedures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
