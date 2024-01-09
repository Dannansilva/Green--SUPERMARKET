'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "@/components/admin/Products";
import queryString from "query-string";

const getProducts = async (searchParams) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    "price[gte]": searchParams.min,
    "price[lte]": searchParams.max,
    "ratings[gte]": searchParams.ratings,
  };

  const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get(
    `${process.env.API_URL}/api/products?${searchQuery}`
  );
  return data;
};

const HomePage: React.FC<{ searchParams: any }> = ({ searchParams }) => {
  const [productsData, setProductsData] = useState<any>(null);


  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(searchParams);
      setProductsData(data);
    };

    fetchProducts();
  }, [searchParams]);

  if (!productsData) {
    // You might want to render a loading state here
    return null;
  }

  return <Products data={productsData} />;
};

export default HomePage;
