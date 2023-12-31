import React, { Component } from "react";
import Container from "@/components/container/container";
import Navigationpopup from "../../../components/settings page/navigationpopup";
import { useState } from "react";
import Link from "next/link";
import { Category } from "@/components/home/Categories";
import { GoSquareFill } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { LiaHomeSolid } from "react-icons/lia";

const page = () => {
  const navItems = [{ home: "Home", path: "/" }];
  return (
    <div>
      <div
        className="flex  w-full bg-cover bg-no-repeat items-center  max-h-[90px] sm:max-h-[60px] md:max-h-[90px] mb-6 "
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
            {navItems.map(({ home, path }) => (
              <a key={home} href={path}>
                <div>
                  <LiaHomeSolid className="text-Lightgray hover:text-white sm:text-xs md:text-base lg:text-md" />
                </div>
              </a>
            ))}
          </div>

          <div className=" text-Lightgray hover:text-white cursor-auto ">
            <p className=" sm:text-xs md:text-base lg:text-md ">{`>`}</p>
          </div>
          <div className="flex text-Lightgray hover:text-white ">
            <p className="text-Green hover:text-white sm:text-xs md:text-base lg:text-md">
              Order Details
            </p>
          </div>
        </div>
      </div>
      <Container>
        <div>
          <div className="flex lg:flex-row sm:flex-col justify-between gap-2">
            <div className="hidden lg:flex">
              <Navigationpopup />
            </div>

            <div>
              <div className=" flex flex-row lg:hidden  ">
                <div className="items-center justify-center text-center">
                  <button className=" w-[65px] sm:block items-center  bg-Green text-white rounded-full py-1  hover:shadow-lg mb- ">
                    <div className="flex flex-row items-center justify-between gap- px-2 py-0.5   text-xs font-medium">
                      <p className="pl-1">Filter</p>
                      <MdKeyboardArrowDown className=" h-[15px] w-[15px]" />
                    </div>
                  </button>
                </div>

                <div className=" absolute flex flex-col  z-50 mt-8 bg-white ">
                  <></>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="justify-between flex flex-row border my-3">
                <div className="flex flex-row">
                  <div>
                    <p>Order Details • December 24,2023 • 3 Products</p>
                  </div>
                </div>
                <div>
                  <p className="text-Green">Back to list</p>
                </div>
              </div>
              <div className="justify-between flex flex-col">
                <div className="flex flex-row justify-between border">
                  <div className="flex flex-col border w-full mb-8">
                    <div className=" flex flex-row w-full py-3.5 border items-center text-center grid grid-cols-2">
                      <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center text-center ml-5">
                        <p>Billing Address</p>
                      </div>
                      <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center text-center">
                        <p>Shipping Address</p>
                      </div>
                    </div>

                    <div className=" flex flex-row w-full py-3.5  items-center text-center grid grid-cols-2">
                      <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center ml-5 ">
                        <p>Mark Dillon</p>
                      </div>

                      <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center">
                        <p>Mark Dillon</p>
                      </div>
                    </div>

                    <div className=" flex flex-row w-full py-3.5 items-center text-center grid grid-cols-2">
                      <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row  items-center text-wrap  text-center ml-5">
                        <p>Kandana,Sri Lanka</p>
                      </div>

                      <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center  text-wrap text-center">
                        <p>Kandana,Sri Lanka</p>
                      </div>
                    </div>

                    <div className=" flex flex-row w-full py-3.5 grid grid-cols-2">
                      <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row ml-5">
                        <p>
                          Email
                          <br />
                          <br />
                          dillonjohnes@gmail.com
                        </p>
                      </div>

                      <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row ">
                        <p>
                          Email
                          <br />
                          <br />
                          dillonjohnes@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className=" flex flex-row w-full py-3.5 text-center grid grid-cols-2">
                      <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row ml-5">
                        <p>
                          Phone No
                          <br />
                          <br />
                          0728844656
                        </p>
                      </div>

                      <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center ">
                        <p>
                          Phone No
                          <br />
                          <br />
                          0728844656
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <div className="flex flex-col border w-full">
                      <div className=" flex flex-row w-full justify-between gap-5 py-3.5 gird grid-cols-2">
                        <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center ml-6">
                          <p>
                            Order ID:
                            <br />
                            #4152
                          </p>
                        </div>
                        <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center ml-6 mr-6">
                          <p>
                            Payment Method:
                            <br />
                            Visa
                          </p>
                        </div>
                      </div>

                      <div className=" flex flex-row w-full justify-between py-3.5 border grid grid-cols-2">
                        <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center ml-6 ">
                          <p>Subtotal:</p>
                        </div>

                        <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center ml-6 mr-6">
                          <p>LKR365.00</p>
                        </div>
                      </div>

                      <div className=" flex flex-row w-full justify-between py-3.5 items-center text-center border grid grid-cols-2">
                        <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row  items-center text-wrap  text-center ml-6">
                          <p>Discount</p>
                        </div>

                        <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center  text-wrap text-center ml-6 mr-6 ">
                          <p>20%</p>
                        </div>
                      </div>

                      <div className=" flex flex-row w-full justify-between py-3.5 border grid grid-cols-2  ">
                        <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row ml-6">
                          <p>Shipping</p>
                        </div>

                        <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center ml-6  mr-6">
                          <p>Free</p>
                        </div>
                      </div>

                      <div className=" flex flex-row w-full justify-between py-3.5 border grid grid-cols-2  ">
                        <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row ml-6">
                          <p>Total</p>
                        </div>

                        <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center ml-6 mr-6 ">
                          <p>LKR8400.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col border w-full mb-8">
                <div className="bg-zinc-100 flex flex-row w-full justify-between gap-5 py-3.5">
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center ml-5">
                    <p>Product</p>
                  </div>
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center">
                    <p>Price</p>
                  </div>
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center">
                    <p>Quantity</p>
                  </div>
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items mr-5">
                    <p>Subtotal</p>
                  </div>
                </div>

                <div className=" flex flex-row w-full justify-between py-3.5 border">
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center ml-5 ">
                    <img
                      src=" \assets\ShopPage\vegetables\carrot.jpg"
                      width={60}
                      height={50}
                      alt="image1"
                    />
                    <p>Carrot</p>
                  </div>
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center">
                    <p>LKR560.00</p>
                  </div>
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center">
                    <p>x10</p>
                  </div>
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center mr-5">
                    <p>LKR5600.00</p>
                  </div>
                </div>

                <div className=" flex flex-row w-full justify-between py-3.5 items-center text-center border">
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row  items-center text-wrap  text-center ml-5">
                    <img
                      src="/assets/ShopPage/vegetables/Capsicum 1.png"
                      width={60}
                      height={50}
                      alt="image2"
                    />
                    <p>Capsicum</p>
                  </div>
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center text-wrap  text-center">
                    <p>LKR340.00</p>
                  </div>
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center text-wrap text-center">
                    <p>x10</p>
                  </div>
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center  text-wrap text-center mr-5">
                    <p>LKR3400.00</p>
                  </div>
                </div>

                <div className=" flex flex-row w-full justify-between py-3.5 border   ">
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row ml-5">
                    <img
                      src="/assets/ShopPage/vegetables/Green chili peppers.png"
                      width={60}
                      height={50}
                      alt="image3"
                    />
                    <p>Green Chili</p>
                  </div>
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center">
                    <p>LKR260.00</p>
                  </div>
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-center">
                    <p>x10</p>
                  </div>
                  <div className="text-neutral-600 text-xs font-medium leading-3 uppercase flex flex-row items-cente mr-5 ">
                    <p>LKR2600.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
