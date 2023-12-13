import React, { useState } from "react";
import logo from "../../../public/assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import Container from "@/components/container/container";
const Navbar = () => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/" },
    { title: "Account", path: "/" },
    { title: "About Us", path: "/" },
    { title: "Contact Us", path: "/" },
  ];

  return (
    <header>
      
      <div className=" flex gap-1 justify-end items-center mt-1 ">
        <div className="text-stone-500  text-sm font-normal font-['Poppins'] leading-none">
          Sign In
        </div>
        <div className="text-stone-500 text-sm font-normal font-['Poppins'] leading-none">
          /
        </div>
        <div className="text-stone-500 text-sm font-normal font-['Poppins'] leading-none">
          Sign Up
        </div>
      </div>
      <hr className=" my-2 " />
      
      <nav className=" flex justify-between mt-2">
        {/* image */}
        <a href="/">
          {" "}
          <Image src={logo} alt="logo" />
        </a>
        {/* search bar */}
        <div className=" inline-flex">
          <div className="flex items-center gap-2 border-2 p-1 rounded">
            <form action="">
              <div className=" flex items-center gap-3 ">
                <div className=" text-2xl">
                  <CiSearch />
                </div>
                <input
                  type="text"
                  name="search"
                  id="srch"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          {/*  search button */}
          <button
            type="submit"
            className=" bg-green-500 text-white px-4 py-1 rounded"
          >
            Search
          </button>
        </div>

        {/* Shoping cart */}
        <div className=" mt-2">
          <a href="/" className=" flex items-center gap-2">
            <SlHandbag /> LKR 570.00
          </a>
        </div>
      </nav>
      
      <hr className=" my-2 " />
      {/* category */}
     
      <div className=" py-4 bg-green-900 justify-between items-center inline-flex w-full lg:flex sm:w-full">
      {/* padding */}
        <div className="justify-start items-center gap-8 flex mx-5">
          <ul className=" justify-start items-center gap-5 flex  text-neutral-400">
            {navItems.map(({ title, path }) => (
              <li key={title} className=" hover:text-white">
                <Link href="/">{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* phone icon and number */}
        <div className=" justify-between items-center gap-2 inline-flex me-5">
          <div className=" relative text-white justify-between ">
            <FiPhoneCall />
          </div>
          <div className=" text-white justify-start "> (94) 76 889 654</div>
        </div>
        
      </div>
      
    </header>
  );
};

export default Navbar;
