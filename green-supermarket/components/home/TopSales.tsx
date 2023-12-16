import React from "react";
import Container from "../container/container";
import { SlHandbag } from "react-icons/sl";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";
import Image from "next/image";

const TopProducts = [
  {
    id: 1,
    sale: "Sale 50%",
    image: "/assets/TopSales/Image.png",
    productname: (
      <p className=" text-Lightgray hover:text-DarkGreen ">Green apple</p>
    ),
    price: "LKR 140.00",
    image2: <SlHandbag className="" />,
  },
  {
    id: 2,
    sale: "Sale 20%",
    image: "/assets/TopSales/Image-1.png",
    productname: <p className=" text-Lightgray hover:text-DarkGreen">Orange</p>,
    price: "LKR 120.00",
    image2: <SlHandbag className=" " />,
  },
  {
    id: 3,
    sale: "Sale 20%",
    image: "/assets/TopSales/Image-8.png",
    productname: (
      <p className=" text-Lightgray hover:text-DarkGreen ">Cabbage</p>
    ),
    price: "LKR 120.00",
    image2: <SlHandbag className=" " />,
  },
  {
    id: 4,
    sale: "Sale 20%",
    image: "/assets/TopSales/Image-5.png",
    productname: (
      <p className=" text-Lightgray hover:text-DarkGreen ">Green Lettuce</p>
    ),
    price: "LKR 120.00",
    image2: <SlHandbag className="" />,
  },

  {
    id: 5,
    sale: "Sale 20%",
    image: "/assets/TopSales/Image-6.png",
    productname: (
      <p className=" text-Lightgray hover:text-DarkGreen ">Eggplant</p>
    ),

    price: "LKR 120.00",
    image2: <SlHandbag className=" " />,
  },
  {
    id: 6,
    sale: "Sale 20%",
    image: "/assets/TopSales/Image-3.png",
    productname: (
      <p className=" text-Lightgray hover:text-DarkGreen ">Potatoes</p>
    ),
    price: "LKR 120.00",
    image2: <SlHandbag className="  " />,
  },
  {
    id: 7,
    sale: "Sale 20%",
    image: "/assets/TopSales/Image-2.png",
    productname: (
      <p className=" text-Lightgray hover:text-DarkGreen ">Sweet potato</p>
    ),
    price: "LKR 120.00",
    image2: <SlHandbag className=" " />,
  },
  {
    id: 8,
    sale: "Sale 20%",
    image: "/assets/TopSales/Image-4.png",
    productname: (
      <p className=" text-Lightgray hover:text-DarkGreen ">Fresh Cauliflower</p>
    ),
    price: "LKR 120.00",

    image2: <SlHandbag className=" " />,
  },
  {
    id: 9,
    sale: "Sale 20%",
    image: "/assets/TopSales/Product Image.png",
    productname: (
      <p className=" text-Lightgray hover:text-DarkGreen ">Green Capsicum</p>
    ),
    price: "LKR 120.00",
    image2: <SlHandbag className=" " />,
  },
  {
    id: 10,
    sale: "Sale 20%",
    image: "/assets/TopSales/Image-7.png",
    productname: (
      <p className=" text-Lightgray hover:text-DarkGreen ">Green Chili</p>
    ),
    price: "LKR 120.00",
    image2: <SlHandbag className=" " />,
  },
];

const TopSales = () => {
  return (
    <div className="sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36 mb-10 md:mt-[60px]  ">
      {/* first row */}
      <div className=" flex justify-between items-center text-center">
        <div>
          <h2 className=" sm:text-lg  md:text-3xl font-semibold text-Black1">
            Hot Deals
          </h2>
        </div>
        <div>
          <button className="flex text-Green md:text-base ms:font-medium hover:scale-105 sm:text-xs sm:font-medium px-4">{`View All ->`}</button>
        </div>
      </div>

      {/* second row */}
      <div className="  grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-5">
        {TopProducts.map(({ id, sale, image, productname, price, image2 }) => (
          <div
            key={id}
            className="border py-4 px-2 hover:border-DarkGreen hover:shadow-sm hover:shadow-Green w-full "
          >
            <div>
              <span className="bg-LightRed text-[14px] font-normal text-white  rounded-md px-2 py-1">
                {sale}
              </span>
            </div>
            <div>
              <Image
                alt=""
                src={image}
                width={150}
                height={100}
                className="w-full"
              />
            </div>
            <div className="  hover:text-DarkGreen ">
              <p className="sm:text-[10px] md:text-[14px] font-light text-Gray   ">
                {productname}
              </p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div>
                <p className="sm:text-[14px] md:text-[16px] font-semibold text-black">
                  {price}
                </p>
              </div>
              <div className="items-center">
                <button className="items-center rounded-full bg-Lightgray2 text-black  hover:text-white hover:bg-Green p-3">
                  {image2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSales;
