"use client";
import React, { useState } from "react";
import logo from "../../../public/assets/Logo.png";
import { SlHandbag } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropleft } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "Acount", path: "/account" },
    { title: "About us", path: "/aboutus" },
    { title: "Contact us", path: "/contactus" },
  ];

  return (
    <header>
      <nav>
        <div className="mx-2 sm:mx-4 md:mx-16 lg:mx-24 xl:mx-36 justify-between items-center">
          {/* navbar first row */}
          {/* <div className="h-[42px]  hidden justify-between text-Gray text-xs items-center lg:flex xl:flex md:flex-row lg:flex-row xl:flex-row"> */}
          {/* location */}
          {/* <div className="hidden sm:hidden items-center lg:flex xl:flex md:hidden lg:flex-row xl:flex-row">
              <Image
                src="/assets/mappin.png"
                width={15}
                height={18}
                alt="location"
                className=" mr-1"
              />
              <p className=" sm:text-xs">
                Store Location: Colombo 05, Sri Lanka
              </p>
            </div>
            {/* sign in/sign up */}
          {/* <div className="hidden lg:flex xl:flex lg:flex-row xl:flex-row">
              <a href={`/login`}>
                <p className=" pr-1">Login</p>
              </a>
              <p className=" pr-1">/</p>
              <a href={`/registration`}>
                <p className=" pr-1">Register</p>
              </a>
            </div>
          </div> */}

          <hr className=" hidden lg:block xl:block" />

          {/* navbar second row */}
          <div className="h-[110px] flex flex-row items-center w-full justify-between md:justify-between lg:justify-between xl:justify-between  sm:-mt-6  pt-4 py-0">
            {/* logo */}
            <div className="flex items-center md:h-6 lg:h-full xl:h-full">
              <a href={`/`}>
                <Image
                  src={logo}
                  alt="Logo"
                  height={38}
                  width={137}
                  className=" md:h-full w-20 md:w-24 "
                />
              </a>
            </div>

            {/* search bar for md, lg, xl*/}
            {/* <div className="flex-row hidden sm:hidden lg:flex xl:flex md:hidden  ">
              <form
                action="input"
                className={`first-letter:relative mx-auto w-full items-center focus:outline-0 focus:border-0 ${
                  isClicked ? "centered" : ""
                }`}
              >
                <div className="mr-2 relative items-center 0">
                  <input
                    type="search"
                    className="peer border-white  cursor-pointer relative z-10 sm:z-10 md:z-20 lg:z-20 xl:z-30 h-12 w-12 rounded-full bg-transparent  outline-none focus:w-full focus:cursor-text focus:pl-14 focus:pr-4 hover:shadow-md focus:shadow-md focus:border-none focus:outline-none  "
                    onClick={handleClick}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <IoSearch size={20} className="w-full ml-0.5 mt-0.5" />
                  </div>
                </div>
              </form>
            </div> */}

            {/* shopping cart */}
            <div className="flex flex-row items-center justify-center ">
              {/* lg search bar */}
              <div className="  flex-row hidden sm:hidden lg:flex xl:flex md:hidden  ">
                <form
                  action="input"
                  className={`  first-letter:relative mx-auto w-full items-center focus:outline-0 focus:border-0 ${
                    isClicked ? "centered" : ""
                  }`}
                >
                  <div className="mr-2 relative items-center 0">
                    <input
                      type="search"
                      className="peer border-white  cursor-pointer relative z-10 sm:z-10 md:z-20 lg:z-20 xl:z-30 h-12 w-12 rounded-full bg-transparent  outline-none focus:w-full focus:cursor-text focus:pl-14 focus:pr-4 hover:shadow-md focus:shadow-md focus:border-none focus:outline-none  "
                      onClick={handleClick}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <IoSearch size={20} className="w-full ml-0.5 mt-0.5" />
                    </div>
                  </div>
                </form>
              </div>

              <div>
                <a href={`/shoppingcart`}>
                  <SlHandbag
                    size={35}
                    className="pr-3 text-DarkGreen hover:text-green-400 hidden sm:hidden md:hidden lg:block xl:block "
                  />
                </a>
                <div className="flex flex-row items-center">
                  <div className="flex flex-row justify-between justify items-center">
                    <a href={`/shoppingcart`}>
                      <SlHandbag
                        size={24}
                        className=" pr-2 sm:block md:block lg:hidden xl:hidden text-DarkGreen"
                      />
                    </a>
                    <p className="pr-2 text-black text-[11px] hidden lg:hidden xl:hidden font-semibold">
                      Rs.0.00
                    </p>
                    {/* <div className="sm:block md:hidden lg:hidden xl:hidden pr-2">
                      <p className="text-black font-light ">|</p>
                    </div> */}
                    <CiUser
                      size={14}
                      className=" text-black  sm:block md:hidden lg:hidden xl:hidden"
                    />

                    <div className="sm:flex md:flex lg:hidden ">
                      <button
                        onClick={toggleMenu}
                        className="pl-2 transition-all delay-100 duration-500 ease-in-out"
                      >
                        {isMenuOpen ? <IoClose /> : <RiMenu3Fill />}
                      </button>

                      {isMenuOpen && (
                        <div
                          className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
                          onClick={closeMenu}
                        />
                      )}

                      {isMenuOpen && (
                        <div
                          className={`fixed top-0 right-0 bg-DarkGreen h-full w-[260px] duration-300 ease-in-out transition-all  transform z-50 ${
                            isMenuOpen ? " ease-in" : "  ease-out"
                          }`}
                        >
                          {/* button inside */}
                          <div className="flex flex-row items-center justify-end mt-8 mr-2 ">
                            <button
                              onClick={isMenuOpen ? closeMenu : toggleMenu}
                              className="text-white transition-all ease-in-out duration-300 "
                            >
                              {isMenuOpen ? <IoClose /> : <RiMenu3Fill />}
                            </button>
                          </div>

                          <div className="flex-row hidden sm:flex md:flex lg:hidden">
                            <form
                              action="input"
                              className={`first-letter:relative w-max items-start ${
                                isClicked ? "centered" : ""
                              }`}
                            >
                              <div className="relative items-center ml-4 mt-4 mr-3 focus:border-none focus:outline-none">
                                <input
                                  type="search"
                                  placeholder="Search"
                                  className="cursor-pointer  relative z-10 h-12 border rounded-full bg-white pl-4 outline-DarkGreen2 border-DarkGreen2 w-full focus:w-full focus:cursor-text focus:-mr-2 hover:shadow-md px-8 focus:pl-4 focus:pr-10 "
                                  onClick={handleClick}
                                />
                              </div>
                            </form>
                          </div>

                          <ul className="px-4 py-2 mt-2">
                            {navItems.map(({ title, path }) => (
                              <Link key={title} href={path} onClick={closeMenu}>
                                <li className="py-4 text-white flex items-center justify-between">
                                  <IoMdArrowDropleft className="mr-2" />
                                  {title}
                                </li>
                              </Link>
                            ))}
                          </ul>

                          <hr className="mx-4 border-Lightgray mt-4 " />

                          <div className=" flex flex-row py-4 text-white items-center justify-between px-4">
                            <IoMdArrowDropleft className="mr-2" />
                            <div className=" flex flex-row gap-2 font-thin text-md ">
                              <a href="">
                                <span>
                                  <p className=" ">Login</p>
                                </span>
                              </a>
                              <span>/</span>
                              <a href="">
                                <span>
                                  <p>Register</p>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" justify-between">
                <div className=" items-end justify-between ">
                  <p className="pr-1 text-Gray2 text-[11px] hidden  lg:hidden xl:hidden font-medium text-sm">
                    Shopping cart:
                  </p>
                  <p className="pr-1 text-Gray text-[11px] hidden  lg:block xl:block font-semibold">
                    Rs.0.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* md, lg ,xl menu */}
        </div>
        <div className=" bg-DarkGreen h-[60px] hidden  lg:flex xl:flex lg:flex-row xl:flex-row justify-between items-center md:h-12 lg:h-[55px] xl:h-[55px] md:-mt-2  ">
          <div className="h-full flex flex-row md:text-xs lg:text-sm xl:text-md inset-0">
            <ul className="flex items-center md:gap-[50px] lg:gap-[60px] xl:gap-[70px] text-Lightgray2 md:mx-16 lg:mx-24 xl:mx-36">
              {navItems.map(({ title, path }) => (
                <li
                  key={title}
                  className="hover:text-white  ease-in-out transform cursor-pointer hover:scale-105 transition-transform duration-200   hover:flex-grow-0 w-max"
                >
                  <Link className="" href={path}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex felx-row justify-between items-center px-2 text-white font-light text-xs md:text-sm lg:text-sm xl:text-sm md:mx-16 lg:mx-24 xl:mx-36 w-max">
            <FiPhoneCall size={16} className="text-white mr-2" />
            <div className=" w-max">
              <p className=" ">+94 762630010</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
