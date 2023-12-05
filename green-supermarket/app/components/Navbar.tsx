import React from "react";
import logo from "../../public/Logo.png";
import { FaSearch } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";

const Navbar = () => {
  return (
    <header>
      <nav className=" flex justify-between">
        {/* image */}
        <a href="/">
          {" "}
          {/* need to put images */}
          {/* <img src={logo} alt="" />{" "} */}
        </a>
        {/* search bar */}
        <div className="flex items-center gap-2 border-2 p-1 rounded">
          <form action="">
            <div className=" flex items-center gap-3 ">
              <FaSearch />
              <input type="text" name="search" id="srch" placeholder="Search" />
              <button type="submit" className=" bg-green-400 text-white px-4 py-1 rounded">Search</button>
            </div>
          </form>
        </div>
        {/* Shoping cart */}
        <div>
          <a href="/" className=" flex items-center gap-2">
            <SlHandbag /> LKR 570.00
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;