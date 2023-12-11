import React from 'react';
import abtimages2 from '../../public/assets/About us images/img2.png';
import Image from 'next/image';

const SecondPart = () => {
  return (
    <div className="mt-20 my-10 flex items-center">
      <div className="w-[712px] h-[618px] mr-4">
        <Image src={abtimages2} alt="lady human farmer" />
      </div>
      <div className="flex-1">
        <div className="text-green-950 text-[56px] font-semibold font-['Poppins'] leading-[67.20px]">
          A safe and trusted online shopping experience
        </div>
        <div>
          Our commitment is to provide you with the freshest and healthiest
          fruits, vegetables, and more, cultivated without the use of synthetic
          pesticides or fertilizers. Enjoy the pure taste of nature while
          supporting a sustainable and eco-friendly approach to farming.
          
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
