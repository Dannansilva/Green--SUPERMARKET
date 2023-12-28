import React from "react";
import Image from "next/image";
import { LiaHomeSolid } from "react-icons/lia";


const page = () => {
  return (

    <>

<div
          className="flex  w-full bg-cover bg-no-repeat items-center  max-h-[90px] sm:max-h-[60px] md:max-h-[90px] "
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25)), url('/assets/ShopPage/Breadcrumbs.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "120px",
          }}
        >
          <div className="flex flex-row items-center mx-2 sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36  gap-3 flex-1 cursor-pointer">
            
              <div>
              <a href={`/home`}>
                <LiaHomeSolid className="text-Lightgray hover:text-white sm:text-xs md:text-base lg:text-md" />
              </a>
              </div>
           
            <div className=" text-Lightgray hover:text-white cursor-auto ">
              <p className=" sm:text-xs md:text-base lg:text-md ">{`>`}</p>
            </div>
            <div className="flex text-Lightgray hover:text-white ">
              <p className="text-Green hover:text-white sm:text-xs md:text-base lg:text-md">
                Contact Us
              </p>
            </div>
          </div>
        </div>

    <div className="flex sm:flex-col lg:flex-row my-8 mx-2 sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36 justify-between sm:gap-4 md:gap-8 lg:gap-2 sm:mt-10 md:mt-10  ">
      {/* first div */}
      <div className=" flex flex-col px-[20px] py-[px] sm:m-1 lg:m-1 shadow-2xl rounded-md shadow-Lightgray lg:max-h-[400px]  ">
        <div className=" items-center sm:justify-between text-center my-2 ">
          <div className=" items-center justify-center text-center flex flex-row  py-[15px]">
            <Image
              src="/assets/Contact us images/Map Pin.png"
              alt=""
              width={30}
              height={30}
            />
          </div>
          <div className=" text-Gray3 flex flex-row justify-center">
            <p className="sm:text-xs md:text-sm lg:text-md ">Colombo 05, Sri Lankka</p>
          </div>
        </div>

        <hr className=" border border-mx-2 my-2 " />

        <div className=" items-center sm:justify-between text-center my-2 ">
          <div className=" items-center justify-center text-center flex flex-row py-[15px]">
            <Image
              src="/assets/Contact us images/Email.png"
              alt=""
              width={30}
              height={30}
            />
          </div>
          <div className="items-center text-center text-Gray3">
            <p className="sm:text-xs md:text-sm lg:text-md">greens.s.lk@gmail.com</p>
          </div>
        </div>

        <hr className=" border border-mx-2 my-2 " />

        <div className=" items-center sm:justify-between text-center my-2  ">
          <div className=" items-center justify-center text-center flex flex-row py-[15px]">
            <Image
              src="/assets/Contact us images/PhoneCall.png"
              alt=""
              width={30}
              height={30}
            />
          </div>
          <div className="items-center text-center text-Gray3 sm:text-xs md:text-sm lg:text-md">
            <p>{`(+94) 762630010`}</p>
          </div>
          <div className="items-center text-center text-Gray3 flex flex-row justify-center sm:pb-[20px] sm:text-xs md:text-sm lg:text-md">
            <span>
              <p>{`Hotline: `}</p>
            </span>
            <span>
              <p>{`112 657 876 `}</p>
            </span>
          </div>
        </div>


      </div>
      {/* second div */}
      <div className=" lg:gap-[24px] lg:p-[50px] sm:py-[25px] sm:px-[20px] sm:m-1 lg:m-1  shadow-2xl rounded-md sm:mt-8 ">
        <div className=" flex flex-col">
          <div className=" flex flex-row text-xl mb-2 font-bold">
            <h2>Just Say Hello!</h2>
          </div>
          <div className=" flex lg:flex-row">
          <div className=" flex flex-row w-full sm:justify-normal sm:text-xs  ">
            <p className=" text-wrap sm:justify-normal text-Lightgray ">
              Our customer service department is working round-the clock to
              ensure you have a smooth process. Feel free to contact us if you
              have any issues.
            </p>
          </div>

          <div className="  w-full hidden lg:flex md:flex"></div>
          </div>
        </div>

        <div className="flex sm:flex-col lg:flex-row py-4 sm:gap-4 ">
          {/* name */}
          <div className=" w-full ">
            <input
              type="text"
              placeholder="Type in your name"
              width={300}
              className="pl-4 pr-4 py-3 bg-white rounded-md border border-neutral-200 focus:outline-none focus:border-DarkGreen3 focus:border-2 w-full sm:text-xs md:text-sm lg:text-md "
            />
          </div>
          {/* email */}
          <div className="  w-full">
            <input
              type="text"
              placeholder="Type in your email"
              width={300}
              className=" pl-4 pr-4 py-3 bg-white rounded-md border border-neutral-200 w-full focus:outline-none focus:border-DarkGreen3 focus:border-2 sm:text-xs md:text-sm lg:text-md "
            />
          </div>
        </div>

        {/* message box */}
        <div>
          <div className=" pb-6 w-full">
            <textarea
              placeholder="Type your message here"
              className="text-neutral-400 pl-4 pr-4 py-2 bg-white rounded-md border border-neutral-200 w-full focus:outline-none focus:border-DarkGreen3 focus:border-2 sm:text-xs md:text-sm lg:text-md"
              rows={5}
            />
          </div>
        </div>
        {/* Button */}
        <div>
          <button className="text-white bg-Green2 font-semibold py-2 px-4 rounded-full inline-flex items-center lg:mt-5 sm:mt-2 text-center hover:bg-DarkGreen sm:text-xs">
            <span className="">Send Message</span>
          </button>
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
    </>
  );
};

export default page;
