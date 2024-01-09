import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <h1 className="text-3xl my-5 ml-4 font-bold">12 Products</h1>
              <table className="w-full text-sm text-left">
                <thead className="text-l text-gray-700 uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Stock
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-2">Product name</td>
                    <td className="px-6 py-2">12</td>
                    <td className="px-6 py-2">$456</td>
                    <td className="px-6 py-2">
                      <div>
                        <Link
                          to={`/admin/products/upload_images`}
                          className="px-2 py-2 inline-block text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                        >
                          <i className="fa fa-image" aria-hidden="true"></i>
                        </Link>

                        <Link
                          to={`/admin/products`}
                          className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                        >
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </Link>
                        <a className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        
  );
};

export default Products;