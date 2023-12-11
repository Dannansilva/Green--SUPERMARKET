import React from "react";
import abtimages3 from "../../public/assets/About us images/img3.png";
import Image from "next/image";

const ThirdPart = () => {
  return (
    <div className="mt-20 my-10 flex items-center">
      <div className="flex-1">
        <div className="text-green-950 text-[56px] font-semibold font-['Poppins'] leading-[67.20px]">
          We deliver right to your doorstep!
        </div>
        <div>
          Your satisfaction is our priority, and we're here to make every
          mealtime a delightful experience. Shop with us today and discover the
          joy of effortless, doorstep delivery!
        </div>
      </div>
      <div className="w-[712px] h-[618px] ml-4">
        <Image src={abtimages3} alt="le girl getting her veggies" />
      </div>
    </div>
  );
};

export default ThirdPart;
