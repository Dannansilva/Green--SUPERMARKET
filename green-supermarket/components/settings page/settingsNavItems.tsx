import React from "react";
import { TbListDetails } from "react-icons/tb";
import { SlHandbag } from "react-icons/sl";
import { IoSettingsSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

export const SettingsNavItems = [
  {
    id: 1,
    image: <TbListDetails />,
    name: "Order Details",
    navigate:'/shoppingcart' ,
  },


  {
    id: 2,
    image: <SlHandbag />,
    name: "Shopping Cart",
    navigate:'/shoppingcart' ,
  },

  // {
  //   id: 3,
  //   image: <IoSettingsSharp />,
  //   name: "",
  // },

  {
    id: 3,
    image: <FiLogOut />,
    name: "Log-out",
  },
];
