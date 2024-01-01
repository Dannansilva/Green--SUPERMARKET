import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Container from "../container/container";
import Bannar from "../../public/assets/Bannar.png";
// import HomeButton from "../Button/HomeButton";
import { CiDeliveryTruck } from "react-icons/ci";

const services = [
  {
    id: 1,
    image: "/assets/HomePage/banner/delivery-truck 1.png",
    Service: "Island wide Delivery",
    Sinfo: "Delivery right to your doorstep",
  },
  {
    id: 2,
    image: "/assets/HomePage/banner/headphones 1.png",
    Service: "Customer Support 24/7",
    Sinfo: "Delivery right to your doorstep",
  },
  {
    id: 3,
    image: "/assets/HomePage/banner/Group-1.png",
    Service: "100% Secure Payment",
    Sinfo: "We ensure your money is safe",
  },
  {
    id: 4,
    image: "/assets/HomePage/banner/Group.png",
    Service: "Money-Back Guarantee",
    Sinfo: "30 days money back guarantee",
  },
];

const icons = [
  {
    id: 1,
    image: "/assets/HomePage/banner/delivery-truck 1.png",
    Service: "Island wide Delivery",
    Sinfo: "Delivery right to your doorstep",
  },
  {
    id: 2,
    image: "/assets/HomePage/banner/headphones 1.png",
    Service: "Customer Support 24/7",
    Sinfo: "Delivery right to your doorstep",
  },
  {
    id: 3,
    image: "/assets/HomePage/banner/Group-1.png",
    Service: "100% Secure Payment",
    Sinfo: "We ensure your money is safe",
  },
  {
    id: 4,
    image: "/assets/HomePage/banner/Group.png",
    Service: "Money-Back Guarantee",
    Sinfo: "30 days money back guarantee",
  },
];

const Banner = () => {
  return (
    <>
      <div className="mx-2 sm:mx-4 md:mx-16 lg:mx-24 xl:mx-36 pt-2 lg:mt-10 md  md:-mt-4 sm:mt-4 -mt-10   ">
        {/* Banner 1st part */}
        <div
          className="bg-center bg-no-repeat bg-cover max-h-[400px] rounded-lg  sm:-mt-10 md:-mt-0 sm:max-h-[300px] md:max-h-[400px] lg:max-h-[450px] inset-0  "
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5 )), url('/assets/HomePage/banner/Banner.jpg')",
            height: "600px",
          }}
        >
          <div className="flex flex-col pl-[20px] md:pl-[50px] lg:pl-[80px] justify-between w-full sm:py-6 md:py-10   ">
            <div className="my-5 flex flex-col gap-2">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium">
                Fresh & Healthy
              </h1>
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium ">
                Organic Food
              </h1>
            </div>

            <div className="md:my-4 sm:my-2">
              <div className="flex flex-row">
                <div className="bg-Green w-[2px] h-[50px] md:w-[2px] md:h-[65px]"></div>
                <div className="flex flex-col">
                  <div className="flex flex-row items-center pl-[10px] md:pl-[14px] gap-2">
                    <span className="text-white text-[16px] md:text-[20px] font-medium mr-[5px] md:mr-[8px]">
                      Sale up to
                    </span>
                    <span className=" font-medium bg-[#FF8A00] px-[8px] md:px-[8px] lg:px-[10px] rounded-md py-[3px] md:py-[2px] text-[10px] md:text-[15px] lg:text-[15px] text-white">
                      30% OFF
                    </span>
                  </div>

                  <div className="pt-[5px] md:pt-[8px] pl-[10px] md:pl-[14px] ">
                    <p className="text-white text-xs md:text-sm font-normal">
                      Free delivery for all your orders
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a href={`/shop`}>
            <div className="round-full my-3">
              <button className="text-Green bg-white rounded-full px-[20px] py-[10px] md:px-[40px] md:py-[16px] font-semibold text-xs md:text-base hover:bg-Green hover:text-white hover:shadow-lg hover:text-md hover:font-bold hover:shadow-green-300 items-center">{`Shop now » `}</button>
            </div>
            </a>
          </div>
        </div>

        {/* banner 2nd part */}

        <div className=" md:flex md:flex-col md:shadow-lg md:rounded-lg md:mt-4 sm:pt-1 hidden sm:hidden">
          <div className="flex flex-row md:flex-row md:justify-between md:mx-[14px] ">
            {services.map(({ id, image, Service, Sinfo }) => (
              <div
                key={id}
                className="flex flex-col md:flex-row py-4 md:py-[40px] px-4 md:justify-center w-full items-center"
              >
                {/* sm banner2 */}
                {/* <div className="items-center justify-center md:block lg:hidden">
  <div className="hidden md:flex lg:hidden image-container sm:flex sm:flex-row items-center sm:justify-center">
    <Image
      src={image}
      alt={""}
      width={30}
      height={27.27}
      className=""
    />
  </div>

  <div className="sm:flex md:hidden sm:justify-center sm:items-center pt-1">
    <p className="text-xs font-semibold text-gray text-center">
      {Service}
    </p>
  </div>
</div> */}

                <div className=" flex flex-row pr-2 md:pr-5 max-w-full rounded-full sm:hover:shadow-sm md:hover:shadow-none items-center">
                  <Image
                    src={image}
                    alt={""}
                    width={40}
                    height={27.27}
                    className=" max-w-full hidden sm:hidden md:block object-contain "
                  />
                </div>
                <div className=" hidden md:flex md:flex-col">
                  <div className="">
                    <p className="text-base md:text-sm font-semibold text-black pb-2 lg:text-lg">
                      {Service}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-xs md:text-xs font-normal text-Lightgray lg:text-md">
                      {Sinfo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" md:hidden flex flex-row justify-between">
          {icons.map(({ id, image, Service }) => (
            <div
              key={id}
              className="flex flex-col md:flex-row py-4 md:py-[40px] px-4 md:justify-center w-full items-center"
            >
              <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center mb-1 shadow-md">
                <Image
                  src={image}
                  alt=""
                  width={20}
                  height={27.27}
                  className="mx-2 object-contain"
                />
              </div>
              <div className="">
                <p className=" text-[8px] font-medium text-black  text-center ">
                  {Service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
