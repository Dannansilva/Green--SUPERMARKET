import Image from "next/image";
import React from "react";
import refreshicon from "../../public/assets/Settings images/refresh_icon.png"
import shoppingicon from "../../public/assets/Settings images/shoppingcart_icon.png"
import settingsicon from "../../public/assets/Settings images/settings_icon.png"
import logouticon from "../../public/assets/Settings images/logout_icon.png"

const navigationpopup = () => {
  return (
    <div className="w-[312px] h-[306px] pb-3 bg-white rounded-lg border border-neutral-200 flex-col justify-start items-start inline-flex">
      <div className="pl-5 pt-6 pb-4 justify-start items-start inline-flex">
        <div className="text-zinc-900 text-xl font-medium font-['Poppins'] leading-[30px]">
          Navigation
        </div>
      </div>

      <div className="px-5 py-4 justify-center items-center gap-2.5 inline-flex">
        <div className="w-6 h-6 p-1 justify-center items-center flex" />
        <Image src={refreshicon} alt="orderhistory" width={24} height={24}/>
        <div className="w-[238px] text-stone-500 text-base font-normal font-['Poppins'] leading-normal">
          Order History
        </div>
      </div>

      <div className="px-5 py-4 justify-center items-center gap-2.5 inline-flex">
        <div className="w-6 h-6 relative" />
        <Image src={shoppingicon} alt="shoppingcart" width={24} height={24}/>
        <div className="w-[238px] text-stone-500 text-base font-normal font-['Poppins'] leading-normal">
          Shopping Cart
        </div>
      </div>

      <div className="px-5 py-4 justify-center items-center gap-2.5 inline-flex">
        <div className="w-6 h-6 px-[2.30px] py-0.5 justify-center items-center flex" />
        <Image src={settingsicon} alt="settings" width={24} height={24}/>
        <div className="w-[238px] text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
          Settings
        </div>
      </div>

      <div className="px-5 py-4 justify-center items-center gap-2.5 inline-flex">
        <div className="w-6 h-6 p-[3px] justify-center items-center flex" />
        <Image src={logouticon} alt="logout" width={24} height={24}/>
        <div className="w-[238px] text-stone-500 text-base font-normal font-['Poppins'] leading-normal">
          Log-out
        </div>
      </div>

    </div>
  );
};

export default navigationpopup;