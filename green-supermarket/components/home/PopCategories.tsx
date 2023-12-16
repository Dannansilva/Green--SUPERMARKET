import React from "react";
import Image from "next/image";
import Products from "@/public/assets/Products";
import Link from "next/link";
import Productsdetails from "../../app/(pages)/products_details/page";

// const Category = [
//   {
//     id: 1,
//     location: "/assets/products images/Categoryimages/image 1.png",
//     name: "Fresh Fruit",
//   },

//   {
//     id: 2,
//     location: "/assets/products images/Categoryimages/image 1-2.png",
//     name: "Vegetables",
//   },

//   {
//     id: 3,
//     location: "/assets/products images/Categoryimages/image 1-4.png",
//     name: "Meat & Fish",
//   },

//   {
//     id: 4,
//     location: "/assets/products images/Categoryimages/image 1-6.png",
//     name: "Snacks",
//   },
//   {
//     id: 5,
//     location: "/assets/products images/Categoryimages/image 1-7.png",
//     name: "Beverages",
//   },

//   {
//     id: 6,
//     location: "/assets/products images/Categoryimages/image 1-10.png",
//     name: "Beauty & Health",
//   },

//   {
//     id: 7,
//     location: "/assets/products images/Categoryimages/image 1-1.png",
//     name: "Bread & Bakery",
//   },
//   {
//     id: 8,
//     location: "/assets/products images/Categoryimages/image 1-3.png",
//     name: "Baking Needs",
//   },
//   {
//     id: 9,
//     location: "/assets/products images/Categoryimages/image 1-5.png",
//     name: "Cooking",
//   },
//   {
//     id: 10,
//     location: "/assets/products images/Categoryimages/image 1-8.png",
//     name: "Dish Detergents",
//   },
//   {
//     id: 11,
//     location: "/assets/products images/Categoryimages/image 1-9.png",
//     name: "Oil",
//   },
// ];

const Category = [
  {
    id: 1,
    location: "/assets/products images/Categoryimages/image 1.png",
    name: "Fresh Fruit",
  },

  {
    id: 2,
    location: "/assets/products images/Categoryimages/image 1-2.png",
    name: "Vegetables",
  },

  {
    id: 3,
    location: "/assets/products images/Categoryimages/image 1-4.png",
    name: "Meat & Fish",
  },

  {
    id: 4,
    location: "/assets/products images/Categoryimages/image 1-6.png",
    name: "Snacks",
  },
  {
    id: 5,
    location: "/assets/products images/Categoryimages/image 1-7.png",
    name: "Beverages",
  },

  {
    id: 6,
    location: "/assets/products images/Categoryimages/image 1-10.png",
    name: "Beauty & Health",
  },

  {
    id: 7,
    location: "/assets/products images/Categoryimages/image 1-1.png",
    name: "Bread & Bakery",
  },
  {
    id: 8,
    location: "/assets/products images/Categoryimages/image 1-3.png",
    name: "Baking Needs",
  },
  {
    id: 9,
    location: "/assets/products images/Categoryimages/image 1-5.png",
    name: "Cooking",
  },
  {
    id: 10,
    location: "/assets/products images/Categoryimages/image 1-8.png",
    name: "Dish Detergents",
  },
  {
    id: 11,
    location: "/assets/products images/Categoryimages/image 1-9.png",
    name: "Oil",
  },
];

const PopCategories = () => {
  return (
    <>
      <div className="sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36 mb-10 md:mt-[60px] sm:-mt-1">
        {/* first row */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className=" sm:text-lg  md:text-3xl font-semibold text-Black1 ">
              Shop By Category
            </h2>
          </div>
          <div className="items-center sm:hidden">
            <button className="flex text-Green text-base font-medium hover:scale-105 px-4">{`View All ->`}</button>
          </div>
        </div>
      </div>

      {/* second row */}

      <div className="  grid grid-cols-3 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 pt-5 gap-2">
        {Products.map(({ id, location, name }) => (
          <Link key={id} href={`/products_details`}>
            <div
              key={id}
              className="border py-4 px-2 rounded-md hover:border-DarkGreen hover:shadow-sm hover:shadow-Green w-full "
            >
              <div>
                <Image
                  alt=""
                  src={location}
                  width={150}
                  height={100}
                  className="w-full"
                />
              </div>
              <div className="text-center md:pt-[16px] ">
                <p className="sm:text-[10px] md:text-sm font-semibold text-Black1 pt-2">
                  {name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default PopCategories;
