import React from 'react';
import abtimages from '../../public/assets/About us images/img1.png';
import Image from 'next/image';

const FirstPart = () => {
  return (
    <div className="mt-8 my-1 flex flex-col md:flex-row items-center  xl:mx-auto">
      <div className="md:flex-1 md:pl-2">
        <div className="text-green-950 text-[36px] md:text-[35px] lg:text-[56px] font-semibold  leading-[43.20px] md:leading-[54px] lg:leading-[67.20px]">
          100% organic <br /> produce
        </div>
        <div className="w-full md:w-[75%] lg:w-[590px] text-stone-500 text-base md:text-lg font-normal leading-[24px] md:leading-[27px] mt-4">
          <p>
            Our commitment is to provide you with the freshest and healthiest
            fruits, vegetables, and more, cultivated without the use of synthetic
            pesticides or fertilizers. Enjoy the pure taste of nature while
            supporting a sustainable and eco-friendly approach to farming.
          </p>
        </div>
      </div>
      <div className="w-full md:w-[50%] h-[300px] md:h-[450px] lg:h-[618px] ml-1 mt-4 md:mt-0 xl:flexend">
        <Image src={abtimages} alt="farmer hooman" layout="responsive" width={712} height={618} />
      </div>
    </div>
  );
};

export default FirstPart;
