"use client";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropleft } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }; // Add a closing curly brace here

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    return (
        <header>
            <nav>
                <div className="mx-2 sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36 justify-between items-center">
                    {/* navbar second row */}
                    <div className="h-[110px] flex flex-row items-center w-full justify-between md:justify-between lg:justify-between xl:justify-between sm:-mt-6 pt-4 py-0">
                        {/* cart icon */}
                        <div>
                            <button onClick={toggleCart}>
                                {isCartOpen ? <IoClose /> : <SlHandbag />}
                            </button>

                            {isCartOpen && (
                                <div
                                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
                                    onClick={closeCart}
                                />
                            )}

                            {isCartOpen && (
                                <div
                                    className={`fixed top-0 right-0 bg-DarkGreen h-full w-[260px] duration-300 ease-in-out transform z-50 ${
                                        isCartOpen ? "translate-x-0" : "translate-x-full"
                                    }`}
                                >
                                    {/* button inside */}
                                    <div className="flex flex-row items-center justify-end mt-8 mr-2">
                                        <button onClick={toggleCart}>
                                            {isCartOpen ? <IoClose /> : <SlHandbag size={24} className="pr-2 sm:block md:block lg:hidden xl:hidden text-DarkGreen" />}
                                        </button>
                                    </div>

                                    {/* cart items */}
                                    <ul className="px-4 py-2 mt-2">
                                        {/* Your cart items go here */}
                                    </ul>

                                    <hr className="mx-4 border-Lightgray mt-4" />

                                    {/* Profile */}
                                    <div className="flex flex-row py-4 text-white items-center justify-between px-4">
                                        <IoMdArrowDropleft className="mr-2" />
                                        <div className="flex flex-row gap-2">
                                            <a href="">
                                                <span>LOGIN</span>
                                            </a>
                                            <span>/</span>
                                            <a href="">
                                                <span>REGISTER</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;