import React from "react";
import Container from "../container/container";
import { SlHandbag } from "react-icons/sl";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";
import Image from "next/image";

const TopProducts = [
  {
    id: 1,
    sale: "50% OFF",
    image: "/assets/TopSales/Image.png",
    productname: <p className=" ">Green apple</p>,
    price: "LKR 140.00",
  },
  {
    id: 2,
    sale: "20% OFF",
    image: "/assets/TopSales/Image-1.png",
    productname: <p className=" ">Orange</p>,
    price: "LKR 120.00",
  },
  {
    id: 3,
    sale: "20% OFF",
    image: "/assets/TopSales/Image-8.png",
    productname: <p className="  ">Cabbage</p>,
    price: "LKR 120.00",
  },
  {
    id: 4,
    sale: "20% OFF",
    image: "/assets/TopSales/Image-5.png",
    productname: <p className="  ">Green Lettuce</p>,
    price: "LKR 120.00",
  },

  {
    id: 5,
    sale: "20% OFF",
    image: "/assets/TopSales/Image-6.png",
    productname: <p className="  ">Eggplant</p>,

    price: "LKR 120.00",
  },
  {
    id: 6,
    sale: "20% OFF",
    image: "/assets/TopSales/Image-3.png",
    productname: <p className="  ">Potatoes</p>,
    price: "LKR 120.00",
  },
  {
    id: 7,
    sale: "20% OFF",
    image: "/assets/TopSales/Image-2.png",
    productname: <p className="  ">Sweet potato</p>,
    price: "LKR 120.00",
  },
  {
    id: 8,
    sale: "20% OFF",
    image: "/assets/TopSales/Image-4.png",
    productname: <p className="  ">Fresh Cauliflower</p>,
    price: "LKR 120.00",
  },
  {
    id: 9,
    sale: "20% OFF",
    image: "/assets/TopSales/Product Image.png",
    productname: <p className="  ">Green Capsicum</p>,
    price: "LKR 120.00",
  },
  {
    id: 10,
    sale: "20% OFF",
    image: "/assets/TopSales/Image-7.png",
    productname: <p className="  ">Green Chili</p>,
    price: "LKR 120.00",
  },
];

const TopSales = () => {
  return (
    <div className="sm:mx-4 md:mx-16 lg:mx-24 xl:mx-36 mb-10 sm:mt-[50px] md:mt-[80px]  ">
      {/* first row */}
      <div className=" flex justify-between items-center text-center">
        <div>
          <h2 className=" sm:text-lg  md:text-3xl font-semibold text-Black1">
            Hot Deals
          </h2>
        </div>
        {/* <div>
          <button className="flex text-Green md:text-base ms:font-medium hover:scale-105 sm:text-xs sm:font-medium px-4">{`View All ->`}</button>
        </div> */}
      </div>

      {/* second row */}
      <div className="  grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-4 sm:gap-2 md:gap-4 ">
        {TopProducts.map(({ id, sale, image, productname, price }) => (
          <div
            key={id}
            className="border sm:pt-2 md:pt-4 px-2 hover:border-Green hover:shadow-lg hover:shadow-green-100 justify-evenly flex flex-col w-full rounded-md max-w-full md:min-h-[280px] sm:min-h-[260px]  hover:rounded-md "
          >
            <div className=" items-center text-wrap sm:-mt-2 md:-mt-6 lg:-mt-8">
              <span className=" bg-red-600 text-[10px] font-normal text-white rounded-sm px-1.5 py-1 ">
                {sale}
              </span>
            </div>
            <div className="items-center justify-evenly flex lg:py-8 sm:py-6">
              <Image
                alt=""
                src={image}
                width={100}
                height={100}
                className=" max-h-22 sm:min-w-[100px] md:min-w-[110px] max-w-full md:max-h-36 lg:max-h-44 object-contain "
              />
            </div>
            <div className=" flex flex-row justify-between mx-2 lg:-mb-2 ">
              <div className=" flex flex-col gap-1">
                <div className=" items-center flex md:justify-start   ">
                  <p className="sm:text-[10px] md:text-[13px] lg:text-[14px] font-light sm:text-Gray md:text-Green  ">
                    {productname}
                  </p>
                </div>

                <div>
                  <p className="text-[12px]  font-semibold  text-DarkGreen">
                    {price}
                  </p>
                </div>
              </div>

              <div className="items-center md:flex hidden  ">
                <button className="items-center rounded-full bg-Lightgray2 text-black  hover:text-white hover:bg-Green p-3 w-full">
                  <SlHandbag className=" w-full h-[12px] " />
                </button>
              </div>

             
            </div>
            <div className="items-center md:hidden flex flex-row justify-center  mt-2 mb-1 ">
                <button className="items-center rounded-md bg-Green text-white  hover:text-white hover:bg-Green p-1.5 w-full flex flex-row  text-center justify-center gap-2">
                  <SlHandbag className=" h-[12px]" /><p className=" text-white text-xs ">Add to cart</p>
                </button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSales;
