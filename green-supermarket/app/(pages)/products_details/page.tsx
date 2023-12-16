"use client"
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import Products from "@/public/assets/Products";
import Image from "next/image";


// interface Product {
//   id: string;
//   title: string;
//   category: string;
//   price: number;
//   image: string;
// }





  



// const SingleProducts: React.FC = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/Products.json");
  //       const data = await response.json();
  //       const productData = data.find((p: Product) => p.id === id);
  //       console.log(productData);
  //       setProduct(productData || null);
  //     } catch (error) {
  //       console.log("ERROR FETCHING DATA:", error);
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  // if (!product) {
  //   return <div>Loading...</div>;
  // }

  // const { title, price, image } = product;
  const SingleProducts = () => {

  return (
    <div className=" mt-28 max-w-screen-2xl container mx-auto  xl:px-28 px-4">
      <div className=" p-3 max-w-7xl m-auto">
        <div >
          <a href="/" className="  text-gray-400">Home</a>
          <a href="/shop" className=" font-bold text-black"> / Shop</a>
        </div>
        <div className=" mt-6 sm:mt-10">
          {Products.map(({id , location , name}) => (

          
          <div key={id} className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
            <div>
              <Image
               alt=""
               src={location}
               width={10}
               height={10}
               className=" w-full"/>
               
            </div>
           
            {/* Products details */}
            <div>
              <h1 className=" title text-left">{name}</h1>
              <p className=" mt-3 text-gray-600 text-base leading-6  text-justify sm:text-left sm:mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati provident placeat perspiciatis nam veniam repudiandae.
                Dolores, asperiores! Animi sint ipsam delectus consequatur, hic
                fugit obcaecati neque, ratione ex cumque culpa mollitia iste
                suscipit illo at.</p>
                <span className=" my-2 text-xl text-yellow-500 flex items-center gap-2 sm:my-4">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </span>
              <p className=" text-xl text-red-500 font-semibold sm:text-2xl">$</p>
              <div className=" mt-4">
              <div className=" text-left flex flex-col gap-2 w-full">
                <label className=" font-semibold">Quantity</label>
                <input type="number" name="price" id="price" defaultValue={1} required className=" border border-e-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-500"/>
              </div>
              <div className=" w-full text-left my-4">
                <button className=" flex justify-center items-center gap-2 w-full py-3 px-4bg bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"><span>Confirmed Order</span> <FaArrowAltCircleRight/> </button>
              </div>
            </div>
            </div>
            

          </div>
           ))}
        </div>
        <div className=" mt-12 text-black">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex, ipsum vero, similique eligendi possimus dolorum optio, sint sequi iure dolore odit suscipit excepturi et hic! Dicta facere voluptatibus quis magni sed vitae soluta, doloribus quaerat exercitationem impedit aspernatur! Impedit blanditiis minus sapiente similique repellat libero illo dicta maiores atque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex, ipsum vero, similique eligendi possimus dolorum optio, sint sequi iure dolore odit suscipit excepturi et hic! Dicta facere voluptatibus quis magni sed vitae soluta, doloribus quaerat exercitationem impedit aspernatur! Impedit blanditiis minus sapiente similique repellat libero illo dicta maiores atque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex, ipsum vero, similique eligendi possimus dolorum optio, sint sequi iure dolore odit suscipit excepturi et hic! Dicta facere voluptatibus quis magni sed vitae soluta, doloribus quaerat exercitationem impedit aspernatur! Impedit blanditiis minus sapiente similique repellat libero illo dicta maiores atque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex, ipsum vero, similique eligendi possimus dolorum optio, sint sequi iure dolore odit suscipit excepturi et hic! Dicta facere voluptatibus quis magni sed vitae soluta, doloribus quaerat exercitationem impedit aspernatur! Impedit blanditiis minus sapiente similique repellat libero illo dicta maiores atque.</p>
        </div>
      </div>
    </div>
  );
          };




export default SingleProducts;
