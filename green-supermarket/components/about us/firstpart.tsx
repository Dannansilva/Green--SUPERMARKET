import React from 'react';
import abtimages from '../../public/assets/About us images/img1.png';
import Image from 'next/image';

const FirstPart = () => {
  return (
    <div className="mt-20 my-10 flex items-center">
      <div className="flex-1">
        <div className="text-green-950 text-[56px] font-semibold font-['Poppins'] leading-[67.20px]">
          100% organic produce
        </div>
        <div>
          Our commitment is to provide you with the freshest and healthiest
          fruits, vegetables, and more, cultivated without the use of synthetic
          pesticides or fertilizers. Enjoy the pure taste of nature while
          supporting a sustainable and eco-friendly approach to farming.
        </div>
      </div>
      <div className="w-[712px] h-[618px] ml-4">
        <Image src={abtimages} alt="farmer hooman" />
      </div>
    </div>
  );
};

export default FirstPart;
