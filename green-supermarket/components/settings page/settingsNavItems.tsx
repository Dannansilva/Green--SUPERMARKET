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
  },

  {
    id: 2,
    image: <SlHandbag />,
    name: "Shopping Cart",
  },

  {
    id: 3,
    image: <IoSettingsSharp />,
    name: "Settings",
  },

  {
    id: 4,
    image: <FiLogOut />,
    name: "Log-out",
  },
];
