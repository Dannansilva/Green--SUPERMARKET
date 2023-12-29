"use client";
import React, { useState } from "react";
import logo from "../../../public/assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { PiHandbagFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import path from "path";
import { IoClose } from "react-icons/io5";
import { title } from "process";
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
    { title: "HOME", path: "/" },
    { title: "SHOP", path: "/shop" },
    { title: "ACCOUNT", path: "/" },
    { title: "ABOUT US", path: "/aboutus" },
    { title: "CONTACT US", path: "/contactus" },
  ];

  return (
    <header>
      <>
        <nav>
          <div className=" mx-2 sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36 justify-between items-center">
            {/* navbar first row */}
            <div className="h-[42px]  hidden justify-between text-Gray text-xs items-center  sm:hidden md:flex lg:flex xl:flex md:flex-row lg:flex-row xl:flex-row">
              {/* location */}
              <div className="hidden sm:hidden items-center md:flex lg:flex xl:flex md:flex-row lg:flex-row xl:flex-row">
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
              <div className="hidden md:flex lg:flex xl:flex md:flex-row lg:flex-row xl:flex-row">
                <p className=" pr-1">Sign In</p>
                <p className=" pr-1">/</p>
                <p className=" pr-1">Sign Up</p>
              </div>
            </div>

            <hr className=" hidden md:block lg:block xl:block" />

            {/* navbar second row */}
            <div className="h-[110px] flex flex-row items-center w-full justify-between md:justify-between lg:justify-between xl:justify-between  sm:-mt-6 sm:ml-2 pt-4 py-0">
              {/* logo */}

              <div className="flex items-center md:h-6 lg:h-full xl:h-full">
                <a href={``}>
                  <Image
                    src={logo}
                    alt="Logo"
                    height={38}
                    width={137}
                    className="img-fluid md:h-full "
                  />
                </a>
              </div>

              {/* search bar for md, lg,xl*/}
              {/* <form className="relative justify-between w-[498px] hidden md:hidden lg:flex xl:flex md:px-4 lg:px-0 xl:px-0">
                  <div className="w-full relative flex items-center border rounded-xl">
                    <div className="absolute left-4">
                      <IoSearch size={24} className="text-gray-500 text-xl" />
                    </div>
                    <input
                      type="search"
                      placeholder="Search"
                      className="w-full pl-12 pr-4 py-1 rounded-xl focus:outline-none focus:border-transparent"
                    />
                    <button className="py-3 px-10 bg-green rounded-tr-xl rounded-br-xl ml-2 flex items-center justify-center bg-Green text-white w-[98px]">
                      Search
                    </button>
                  </div>
                </form> */}

              {/* shopping cart */}

              <div className="flex flex-row items-center focus:mr-10 justify-center mr-4">
                {/* md search bar */}
                <div className="  flex-row hidden sm:hidden lg:flex xl:flex md:hidden ">
                  <form
                    action="input"
                    className={`  first-letter:relative mx-auto w-max items-center  ${
                      isClicked ? "centered" : ""
                    }`}
                  >
                    <div className="mr-2 relative items-center 0">
                      <input
                        type="search"
                        className="peer cursor-pointer relative z-10 sm:z-10 md:z-20 lg:z-20 xl:z-30 h-12 w-12 rounded-full bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:pl-14 focus:pr-4 hover:shadow-md "
                        onClick={handleClick}
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <IoSearch size={20} className="w-full ml-0.5 mt-0.5" />
                      </div>
                    </div>
                  </form>
                </div>

                <div>
                  <SlHandbag
                    size={35}
                    className="pr-3 text-DarkGreen  hidden sm:hidden md:hidden lg:block xl:block "
                  />
                  <div className="flex flex-row items-center">
                    <div className="flex flex-row justify-between justify items-center">
                      <SlHandbag
                        size={24}
                        className=" pr-2 sm:block md:block lg:hidden xl:hidden text-DarkGreen"
                      />
                      <p className="pr-2 text-black text-[11px] sm:block md:block lg:hidden xl:hidden font-semibold">
                        Rs.0.00
                      </p>
                      <div className="sm:block md:hidden lg:hidden xl:hidden pr-2">
                        <p className="text-black font-light ">|</p>
                      </div>
                      <FaUser
                        size={14}
                        className=" text-black  sm:block md:hidden lg:hidden xl:hidden"
                      />

                      <div className="sm:flex md:flex lg:hidden xl:hidden">
                        <button
                          onClick={isMenuOpen ? closeMenu : toggleMenu}
                          className="pl-2"
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
                            className={`fixed top-0 right-0 bg-DarkGreen h-full w-[260px] duration-300 ease-in-out transform z-50 ${
                              isMenuOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                          >
                            {/* button inside */}
                            <div className="flex flex-row items-center justify-end mt-8 mr-4">
                              <button
                                onClick={isMenuOpen ? closeMenu : toggleMenu}
                                className="text-white"
                              >
                                {isMenuOpen ? <IoClose /> : <RiMenu3Fill />}
                              </button>
                            </div>

                            {/* searchbar sm: */}
                            <div className="flex-row hidden sm:flex md:flex lg:hidden">
                              <form
                                action="input"
                                className={`first-letter:relative w-max items-start ${
                                  isClicked ? "centered" : ""
                                }`}
                              >
                                <div className="relative items-center ml-4 mt-4">
                                  <input
                                    type="search"
                                    placeholder="Search"
                                    className="cursor-pointer relative z-10 h-12 border rounded-full bg-white pl-4 outline-DarkGreen2 border-DarkGreen2 w-full focus:w-full focus:cursor-text focus:-mr-2 hover:shadow-md px-8 focus:pl-4 focus:pr-10"
                                    onClick={handleClick}
                                  />
                                </div>
                              </form>
                            </div>

                            {/* navitems sm: */}
                            <ul className="px-4 py-2 mt-2">
                              {navItems.map(({ title, path }) => (
                                <Link
                                  key={title}
                                  href={path}
                                  onClick={closeMenu}
                                >
                                  <li className="py-4 text-white flex items-center justify-between">
                                    <IoMdArrowDropleft className="mr-2" />
                                    {title}
                                  </li>
                                </Link>
                              ))}
                            </ul>

                            <hr className="mx-4 border-Lightgray mt-4" />

                            {/* Profile */}
                          </div>
                        )}
                      </div>

                      {/* md: lg: xl: */}
                    </div>
                  </div>
                </div>
                <div className=" justify-between">
                  <div className=" items-end justify-between ">
                    <p className="pr-1 text-Gray2 text-[11px] hidden md:hidden lg:hidden xl:hidden font-medium text-sm">
                      Shopping cart:
                    </p>
                    <p className="pr-1 text-Gray text-[11px] hidden md:hidden lg:block xl:block font-semibold">
                      Rs.0.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* md, lg ,xl menu */}
          </div>
          <div className="bg-DarkGreen h-[60px] hidden  md:hidden lg:flex xl:flex lg:flex-row xl:flex-row justify-between items-center md:h-12 lg:h-[55px] xl:h-[55px] md:-mt-2  ">
            <div className="h-full flex flex-row md:text-xs lg:text-sm xl:text-md inset-0">
              <ul className="flex items-center md:gap-[30px] lg:gap-[40px] xl:gap-[50px] text-Lightgray2 md:mx-16 lg:mx-24 xl:mx-36">
                {navItems.map(({ title, path }) => (
                  <li
                    key={title}
                    className="hover:text-white duration-300 ease-in-out transform cursor-pointer hover:scale-105  hover:flex-grow-0 w-max"
                  >
                    <Link className="" href={path}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* sm screen menu */}
            {/* <div className="sm:hidden md:hidden lg:hidden xl:hidden ">
              <button onClick={toggleMenu}>
                <RiMenu3Fill size={18} className="font-bold text-black" />
              </button>
              <ul
                className={`bg-white text-Brown px-4 py-2 ${
                  isMenuOpen ? "" : "hidden"
                }`}
              >
                {navItems.map(({ title, path }) => (
                
                    <a href={path}>{title}</a>
                  </li>  <li
                    key={title}
                    className="hover:text-white duration-500 ease-in-out transform cursor-pointer hover:scale-105 hover:font-semibold hover:text-lg "
                  >
                ))}
              </ul>
            </div> */}

            {/* call */}
            <div className="flex felx-row justify-between items-center px-2 text-white font-light text-xs md:text-sm lg:text-sm xl:text-sm md:mx-16 lg:mx-24 xl:mx-36 w-max">
              <FiPhoneCall size={16} className="text-white mr-2" />
              <div className=" w-max">
                <p className=" ">+94 762630010</p>
              </div>
            </div>
          </div>
        </nav>
      </>
    </header>
  );
};

export default Navbar;
