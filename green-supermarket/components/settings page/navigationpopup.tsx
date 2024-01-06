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

  /* filter button in sm devices */
  const [showCategories, setShowCategories] = useState(false);

  const handleFilterClick = () => {
    setShowCategories(!showCategories);
  };

  /* filter category animation */
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
    <div className="relative inline-block">
           <div
                className="relative inline-block cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}

                // onMouseLeave={() => setIsHovered(false)}

              >
                 <button
                    onClick={handleFilterClick}
                    className="  h-full w-full text-center items-center justify-center  bg-White text-white rounded-full hover:shadow-md py-1a    "
                  >
                    <div className="flex flex-row items-center justify-center text-center px-3 py-1 w-full  text-xs font-medium ">
                      {/* <p className="pl-1">Filter</p>
                        <MdKeyboardArrowDown className=" h-[15px] w-[15px]" /> */}
                      <HiAdjustmentsHorizontal className=" h-[25px] w-full text-Green" />
                    </div>
                  </button>

                {isHover && (
                  <div
                    className="absolute flex flex-col z-20 -mt-0.5 bg-white border p-4 rounded-md border-green-600"
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <>
                      {Category.map((category) => (
                        <Link key={category.id} href={`/shop/${category.id}`}>
                          <div className="flex flex-col hover:scale-105 justify-start text-start px-2 hover:transition-all hover:duration-750 hover:ease-in-out">
                            <div className="flex flex-row items-center text-center gap-1">
                              {/* <GoSquareFill className="text-green-400 w-[7px] h-[7px]" /> */}
                              <button
                                key={category.id}
                                onClick={() => handleClick(category.id)}
                                className={`text-items-center text-center text-sm m-2 transition duration-300 text-Gray2 ease-in-out hover:font-semibold w-max ${
                                  clickedButtonId === category.id
                                    ? "border-b-4 border-b-Green pb-1 text-DarkGreen font-semibold"
                                    : ""
                                }`}
                              >
                                {category.name}
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
