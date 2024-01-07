'use client'
import Image from "next/image";
import refreshicon from "../../public/assets/Settings images/refresh_icon.png";
import shoppingicon from "../../public/assets/Settings images/shoppingcart_icon.png";
import settingsicon from "../../public/assets/Settings images/settings_icon.png";
import logouticon from "../../public/assets/Settings images/logout_icon.png";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Category } from "../home/Categories";
import { SettingsNavItems } from "./settingsNavItems";
import { ChevronDown } from 'lucide-react';



const Navigationpopup = () => {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const [isOpen, setIsOpen] = useState(false);

  const [selectedSort, setSelectedSort] = useState<string>("sort");

  const toggleDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSortOption = (Option: string) => {
    setSelectedSort(Option);
    setIsOpen(false);
  };

  /*navitems in sm devices */
  const [showCategories, setShowCategories] = useState(false);

  const handleFilterClick = () => {
    setShowCategories(!showCategories);
  };

  /* nav items animation */
  const [clickedButtonId, setClickedButtonId] = useState(null);

  const handleClick = (categoryId: any) => {
    console.log(categoryId);
    setClickedButtonId(categoryId === clickedButtonId ? null : categoryId);
  };

  const navItems = [{ home: "Home", path: "/" }];

  const productclick = () => {
    router.push("/products_details");
  };

  const [isHover, setIsHovered] = useState(false);

  const getTabStyle = (tab: string) => {
    return {
      backgroundColor: selectedTab === tab ? "#EDF2EE" : "transparent",
      color: selectedTab === tab ? "#1A1A1A" : "#666666",
    };
  };

  return (
    <div className="relative inline-block py-4 -mt-6">
           <div
                className="relative inline-block cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}

                // onMouseLeave={() => setIsHovered(false)}

              >
                 <button
                    onClick={handleFilterClick}
                    className="  h-full w-full text-center items-center justify-center  bg-White text-white rounded-md hover:shadow-lg hover:border hover:border-Gray3 py-3 px-4    "
                  >
                    <div className="flex flex-row items-center justify-center text-center  text-xs font-medium gap-4">
                      {/* <p className="pl-1">Filter</p>
                        <MdKeyboardArrowDown className=" h-[15px] w-[15px]" /> */}
                          <p className=" text-lg text-Green font-semibold hover:text-Gray2">navigation</p>
                       
                      <ChevronDown className=" h-4 w-4 text-Green font-semibold " />
                    </div>
                  </button>

                {isHover && (
                  <div
                    className="absolute flex flex-col z-20 -mt-0.5 bg-white border p-4 rounded-md border-green-600"
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <>
                      {SettingsNavItems.map((navitem) => (
                        <Link key={navitem.id} href={``}>
                          <div className="flex flex-col hover:scale-105 justify-start text-start px-2 hover:transition-all hover:duration-750 hover:ease-in-out">
                            <div className="flex flex-row items-center text-center gap-1">
                              {/* <GoSquareFill className="text-green-400 w-[7px] h-[7px]" /> */}
                              <button
                                key={navitem.id}
                                onClick={() => handleClick(navitem.id)}
                                className={`text-items-center text-center text-sm m-2 transition duration-300 text-Gray2 ease-in-out hover:font-semibold w-max ${
                                  clickedButtonId === navitem.id
                                    ? "border-b-4 border-b-Green pb-1 text-DarkGreen font-semibold"
                                    : ""
                                }`}
                              >
                                <div className="items-center justify-between gap-4 flex flex-row">{navitem.image}{navitem.name}</div>
                                
                              </button>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </>
                  </div>
                )}
              </div>
    </div>
  );
};

export default Navigationpopup;
