import React from 'react';
import abtimages from '../../public/assets/About us images/img1.png';
import Image from 'next/image';

const FirstPart = () => {
  return (
    <div className="mt-20 my-10 flex items-center">
      <div className="flex-1 pl-2">
        <div className="text-green-950 text-[56px] font-semibold font-['Poppins'] leading-[67.20px]">
          100% organic <br /> produce
        </div>
        <div className="w-[590px] text-stone-500 text-lg font-normal font-['Poppins'] leading-[27px] mt-4">
          <p>
          Our commitment is to provide you with the freshest and healthiest
          fruits, vegetables, and more, cultivated without the use of synthetic
          pesticides or fertilizers. Enjoy the pure taste of nature while
          supporting a sustainable and eco-friendly approach to farming.
          </p>
        </div>
      </div>
      <div className="w-[712px] h-[618px] ml-4">
        <Image src={abtimages} alt="farmer hooman" />
      </div>
    </div>
  );
};

export default FirstPart;
