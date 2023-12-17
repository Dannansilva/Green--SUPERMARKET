"use client";
import Image from "next/image";
import React, { useState } from "react";
import refreshicon from "../../public/assets/Settings images/refresh_icon.png";
import shoppingicon from "../../public/assets/Settings images/shoppingcart_icon.png";
import settingsicon from "../../public/assets/Settings images/settings_icon.png";
import logouticon from "../../public/assets/Settings images/logout_icon.png";

const navigationpopup = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const getTabStyle = (tab: string) => {
    return {
      backgroundColor: selectedTab === tab ? "#EDF2EE" : "transparent",
      color: selectedTab === tab ? "#1A1A1A" : "#666666",
    };
  };

  return (
    <div className="w-[312px] h-[306px] pb-3 bg-white rounded-lg border border-neutral-200 flex-col justify-start items-start inline-flex">
      <div className="pl-5 pt-6 pb-4 justify-start items-start inline-flex">
        <div className="text-zinc-900 text-xl font-medium leading-[30px]">
          Navigation
        </div>
      </div>

      <div
        className="px-3.5 py-4 justify-center items-center gap-2.5 inline-flex cursor-pointer"
        onClick={() => handleTabClick("orderHistory")}
        style={getTabStyle("orderHistory")}
      >
        <div className="w-6 h-6 p-1 justify-center items-center flex" />
        <Image src={refreshicon} alt="orderhistory" width={24} height={24} />
        <div className="w-[238px] text-base text-stone-500 font-normal leading-normal">
          Order History
        </div>
      </div>

      <div
        className="px-3.5 py-4 justify-center items-center gap-2.5 inline-flex cursor-pointer"
        onClick={() => handleTabClick("shoppingCart")}
        style={getTabStyle("shoppingCart")}
      >
        <div className="w-6 h-6 relative" />
        <Image src={shoppingicon} alt="shoppingcart" width={24} height={24} />
        <div className="w-[238px] text-base text-stone-500 font-normal leading-normal">
          Shopping Cart
        </div>
      </div>

      <div
        className="px-3.5 py-4 justify-center items-center gap-2.5 inline-flex cursor-pointer"
        onClick={() => handleTabClick("settings")}
        style={getTabStyle("settings")}
      >
        <div className="w-6 h-6 px-[2.30px] py-0.5 justify-center items-center flex" />
        <Image src={settingsicon} alt="settings" width={24} height={24} />
        <div className="w-[238px] text-base text-stone-500 font-normal leading-normal">
          Settings
        </div>
      </div>

      <div
        className="px-3.5 py-4 justify-center items-center gap-2.5 inline-flex cursor-pointer"
        onClick={() => handleTabClick("logout")}
        style={getTabStyle("logout")}
      >
        <div className="w-6 h-6 p-[3px] justify-center items-center flex" />
        <Image src={logouticon} alt="logout" width={24} height={24} />
        <div className="w-[238px] text-base text-stone-500 font-normal leading-normal">
          Log-out
        </div>
      </div>
    </div>
  );
};

export default navigationpopup;
