// "use client";
// import Image from "next/image";
// import React from "react";
// import drink from "../../public/assets/products images/Beverages.jpg";
// import { IoStarSharp } from "react-icons/io5";
// import { FaPlus, FaMinus } from "react-icons/fa6";
// import checkicon from "../../public/assets/About us images/Checkicon.png";
// import customer1 from "../../public/assets/customers/Image1.png";
// import customer2 from "../../public/assets/customers/Image2.png";
// import customer3 from "../../public/assets/customers/Image3.png";
// import user from "../../public/assets/customers/User 1.png";
// import { useState } from "react";
// import products from "../../app/(pages)/shop/Products";

// const Productesdetails = () => {
//   const [quantity, setQuantity] = useState(1);

//   const increaseValue = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseValue = () => {
//     setQuantity(quantity - 1);
//   };

//   return (
//     <div>
//        {
//          products.map((product) => ( 
//           <>  
          
//           </>
//          ))
//        }
       
//       <div className=" lg:grid lg:gap-4 lg:grid-cols-2">
//         <div>
//           {/* main image */}
//           <div>
//             <Image src={drink} alt="drink" width={500} height={500} />
//           </div>
//           {/* sub images */}
//           <div className=" inline-flex gap-1 mt-1">
//             <Image src={drink} alt="drink" width={200} height={200} />
//             <Image src={drink} alt="drink" width={200} height={200} />
//           </div>
//         </div>
//         <div>
//           {/* heading */}
//           <div className=" inline-flex items-center gap-3 lg:mt-5 ">
//             <h1 className="text-zinc-900 text-4xl font-semibold font-['Poppins'] leading-[43.20px]">
//               Cabbage{" "}
//             </h1>
//             <div className="w-[71px] h-[29px] px-2 py-1 bg-green-600 bg-opacity-20 rounded justify-center items-center gap-2.5 inline-flex">
//               <div className="text-green-800 text-sm font-normal font-['Poppins'] leading-[21px]">
//                 In Stock
//               </div>
//             </div>
//           </div>
//           {/* review */}
//           <div>
//             <div className=" inline-flex gap-3 text-yellow-500">
//               <IoStarSharp />
//               <IoStarSharp />
//               <IoStarSharp />
//               <IoStarSharp />
//               <div className="text-stone-500 text-sm font-normal font-['Poppins'] leading-[21px]">
//                 {" "}
//                 4 Review
//               </div>
//             </div>
//           </div>
//           {/* price */}
//           <div className=" inline-flex gap-3 items-center">
//             <div className="text-zinc-400 text-xl font-normal font-['Poppins'] line-through leading-[30px  ">
//               LKR150.00
//             </div>
//             <div className="text-green-800 text-2xl font-medium font-['Poppins'] leading-9">
//               LKR96.00
//             </div>
//             {/* discount */}
//             <div className="w-[73px] h-[27px] px-2.5 py-[3px] bg-red-500 bg-opacity-10 rounded-[30px] justify-start items-start gap-1.5 inline-flex">
//               <div className="text-red-500 text-sm font-medium font-['Poppins'] leading-[21px]">
//                 25% Off
//               </div>
//             </div>
//           </div>
//           <hr className="my-4 w-full border-gray-300" />
//           <p className=" text-zinc-500 text-sm font-normal leading-[21px] mt-5">
//             Class aptent taciti sociosqu ad litora torquent per conubia nostra,
//             per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
//             ultrices et ipsum. Nulla varius magna a consequat pulvinar.{" "}
//           </p>
//           <hr className="my-4 w-full border-gray-300" />

//           {/* item qunatity */}
//           <div className="w-[124px] h-[50px] p-2 bg-white rounded-[170px] border border-neutral-200 justify-center items-center inline-flex">
//             {/* minus */}
//             <div className="w-[34px] h-[34px] relative">
//               <div className="w-[34px] h-[34px] left-0 top-0 items-center bg-zinc-100 rounded-[170px]">
//                 <button onClick={decreaseValue} className=" pt-2 ml-2">
//                   <FaMinus />
//                 </button>
//               </div>
//             </div>

//             {/* quantity */}
//             <div className="w-10 text-center text-zinc-900 text-base font-normal leading-normal">
//               {quantity}
//             </div>
//             {/* plus */}
//             <div className="w-[34px] h-[34px] relative">
//               <div className="w-[34px] h-[34px] left-0 top-0 items-center bg-zinc-100 rounded-[170px]">
//                 <button onClick={increaseValue} className=" pt-2 ml-2">
//                   <FaPlus />
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* add to cart button */}
//           <div className="  justify-center items-center gap-6  inline-flex  ">
//             <button className="text-white bg-green-500 hover:bg-green-850 font-bold py-2   px-20 rounded-full inline-flex items-center mt-5 hover:bg-green-800">
//               <span className="mr-2">Add to Cart</span>
//             </button>
//           </div>
//           <div>
//             {" "}
//             <div className=" inline-flex gap-2">
//               <h2 className=" text-zinc-900 text-sm font-medium  leading-[21px]">
//                 Category:
//               </h2>

//               <h2 className=" text-zinc-500 text-sm font-normal   leading-[21px]">
//                 Vegetables
//               </h2>
//             </div>{" "}
//           </div>

//           {/*tag */}
//           <div>
//             <div className=" inline-flex gap-2">
//               <h2 className=" text-zinc-900 text-sm font-medium  leading-[21px]">
//                 Tag:
//               </h2>
//               <h2 className=" text-zinc-500 text-sm font-normal   leading-[21px]">
//                 Vegetables Healthy Healthy Green Cabbage
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* description */}
//       <div className="items-center  bg-white self-stretch flex w-full flex-col justify-center px-16 max-md:max-w-full max-md:px-5 mt-5">
//         <div className="flex items-stretch gap-0">
//           <div className="text-zinc-900 text-base font-medium  leading-normal">
//             Descriptions
//           </div>
//         </div>
//       </div>
//       <hr className="my-4 w-full border-gray-300" />
//       {/* description paragraph */}
//       <div>
//         <p className=" text-zinc-500 text-sm font-normal leading-[21px] mb-8">
//           Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
//           posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
//           vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
//           porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
//           Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
//           et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
//           scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
//           commodo quis, egestas elementum leo. Donec convallis mollis enim.
//           Aliquam id mi quam. Phasellus nec fringilla elit.
//         </p>
//         <div className="grid gap-4 grid-cols grid-rows-4">
//           {/* first check  */}
//           <div className=" inline-flex gap-2 items-center ">
//             <Image src={checkicon} alt="checkicon" width={30} height={30} />
//             <p className="w-[620px] text-zinc-500 text-sm font-normal leading-tight">
//               100 g of fresh leaves provides.
//             </p>
//           </div>
//           {/* second check */}
//           <div className=" inline-flex gap-2 items-center ">
//             <Image src={checkicon} alt="checkicon" width={30} height={30} />
//             <p className="w-[620px] text-zinc-500 text-sm font-normal leading-tight">
//               Aliquam ac est at augue volutpat elementum.
//             </p>
//           </div>
//           {/* third check */}
//           <div className=" inline-flex gap-2 items-center ">
//             <Image src={checkicon} alt="checkicon" width={30} height={30} />
//             <p className="w-[620px] text-zinc-500 text-sm font-normal leading-tight">
//               Quisque nec enim eget sapien molestie.
//             </p>
//           </div>
//           {/* fourth check */}
//           <div className=" inline-flex gap-2 items-center ">
//             <Image src={checkicon} alt="checkicon" width={30} height={30} />
//             <p className="w-[620px] text-zinc-500 text-sm font-normal leading-tight">
//               Proin convallis odio volutpat finibus posuere.
//             </p>
//           </div>
//         </div>
//         <p className=" text-zinc-500 text-sm font-normal leading-[21px] mt-8 mb-8">
//           Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
//           blandit eros non turpis lobortis iaculis at ut massa.{" "}
//         </p>
//         <hr />
//         <div className="items-center  bg-white self-stretch flex w-full flex-col justify-center px-16 max-md:max-w-full max-md:px-5">
//           <div className="flex items-stretch gap-0">
//             <div className="text-zinc-900 text-base font-medium  leading-normal mb-8  lg:mb-16 lg:mt-10">
//               Customer Feedback
//             </div>
//           </div>
//         </div>
//         {/* customer feedback */}
//         <div className="items-stretch flex max-w-[760px] flex-col">
//           <div className="flex w-full items-stretch justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
//             <div className="flex items-stretch justify-between gap-3">
//               <Image
//                 src={customer1}
//                 alt="customer1"
//                 className="aspect-square object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
//               />
//               <div className="items-stretch flex grow basis-[0%] flex-col pr-5 py-px">
//                 <div className="text-zinc-900 text-sm font-medium leading-5 whitespace-nowrap">
//                   Kristin Watson
//                 </div>
//                 <div className=" inline-flex gap-2 text-yellow-500">
//                   <IoStarSharp />
//                   <IoStarSharp />
//                   <IoStarSharp />
//                   <IoStarSharp />
//                   <IoStarSharp />
//                 </div>
//               </div>
//             </div>
//             <div className="text-neutral-400 text-right text-sm leading-5 self-center my-auto">
//               2 min ago
//             </div>
//           </div>
//           <div className="text-zinc-500 text-sm leading-5 w-full mt-3 max-md:max-w-full">
//             Duis at ullamcorper nulla, eu dictum eros.
//           </div>
//           <div className="flex w-full items-stretch justify-between gap-5 mt-10 px-5 max-md:max-w-full max-md:flex-wrap">
//             <div className="flex items-stretch justify-between gap-3">
//               <Image
//                 src={user}
//                 alt="user"
//                 className="aspect-square object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full"
//               />
//               <div className="items-stretch flex grow basis-[0%] flex-col pr-4 py-px">
//                 <div className="text-zinc-900 text-sm font-medium leading-5 whitespace-nowrap">
//                   Jane Cooper
//                 </div>
//                 <div className=" inline-flex gap-2 text-yellow-500">
//                   <IoStarSharp />
//                   <IoStarSharp />
//                   <IoStarSharp />
//                   <IoStarSharp />
//                   <IoStarSharp />
//                 </div>
//               </div>
//             </div>
//             <div className="text-neutral-400 text-right text-sm leading-5 self-center my-auto">
//               30 Apr, 2021
//             </div>
//           </div>
//           <div className="text-zinc-500 text-sm leading-5 w-full mt-3 max-md:max-w-full">
//             Keep the soil evenly moist for the healthiest growth. If the sun
//             gets too hot, Chinese cabbage tends to &quot;bolt&quot; or go to
//             seed; in long periods of heat, some kind of shade may be helpful.
//             Watch out for snails, as they will harm the plants.
//           </div>
//           <div className="flex w-full items-stretch justify-between gap-5 mt-10 px-5 max-md:max-w-full max-md:flex-wrap">
//             <div className="flex items-stretch justify-between gap-3">
//               <Image
//                 src={customer2}
//                 alt="user"
//                 className="aspect-square object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
//               />
//               <div className="items-stretch flex grow basis-[0%] flex-col py-px">
//                 <div className="text-zinc-900 text-sm font-medium leading-5 whitespace-nowrap">
//                   Jacob Jones
//                 </div>
//                 <div className=" inline-flex gap-2 text-yellow-500">
//                   <IoStarSharp />
//                   <IoStarSharp />
//                   <IoStarSharp />
//                   <IoStarSharp />
//                 </div>
//               </div>
//             </div>
//             <div className="text-neutral-400 text-right text-sm leading-5 self-center my-auto">
//               2 min ago
//             </div>
//           </div>
//           <div className="text-zinc-500 text-sm leading-5 w-full mt-3 max-md:max-w-full">
//             {" "}
//             Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.
//           </div>
//           <div className="flex w-full items-stretch justify-between gap-5 mt-10 px-5 max-md:max-w-full max-md:flex-wrap">
//             <div className="flex items-stretch justify-between gap-3">
//               <Image
//                 src={customer3}
//                 alt="customer3"
//                 className="aspect-square object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
//               />
//               <div className="items-stretch flex grow basis-[0%] flex-col py-px">
//                 <div className="text-zinc-900 text-sm font-medium leading-5 whitespace-nowrap">
//                   Ralph Edwards
//                 </div>
//                 <div className=" inline-flex gap-2 text-yellow-500">
//                   <IoStarSharp />
//                   <IoStarSharp />
//                   <IoStarSharp />
//                 </div>
//               </div>
//             </div>
//             <div className="text-neutral-400 text-right text-sm leading-5 self-center my-auto">
//               2 min ago
//             </div>
//           </div>
//           <div className="text-zinc-500 text-sm leading-5 w-full mt-3 max-md:max-w-full lg:mb-8 mb-7">
//             {`200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO
//             Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok
//             Choi, from USA`}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Productesdetails;
