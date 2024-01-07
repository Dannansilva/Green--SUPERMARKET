import React from 'react'; // Make sure to import React if you haven't already

import Navbar from "@/components/common ui/navbar/Navbar";
import Banner from "@/components/home/Banner";
import PopCategories from "@/components/home/PopCategories";
import TopSales from "@/components/home/TopSales";
import axios from "axios";
import queryString from 'query-string';

// const getProducts = async (searchParams: any) => {
//   // const searchParams = new URLSearchParams(window.location.search);
//   const urlParams = {
//     keyword: searchParams.keyword
//   }

//   const searchQuery = queryString.stringify(urlParams)

//   const { data } = await axios.get(`${process.env.API_URL}/api/products?${searchQuery}`);
//   return data;
// };

// const Home = async ({ searchParams }: { searchParams: any }) => {
//   const productsData = await getProducts(searchParams);


  const Home = () => {

  return (
    <div>
      <Banner />
      <TopSales />
      <PopCategories />
    </div>
  );
}

export default Home;
