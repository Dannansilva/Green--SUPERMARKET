"use client";
import Link from "next/link";
import React, { useContext } from "react";

const Sidebar = () => {
//   const { user } = useContext(AuthContext);

//   const logoutHandler = () => {
//     signOut();
//   };

  return (
    <div className="md:w-1/3 lg:w-1/4 ">
      <ul className="sidebar px-4 py-3">
        {/* {user?.role === "admin" && ( */}
          <>
            <li>
              {" "}
              <Link
                href="/admin/products/new"
                className="block px-3 py-3  text-Green2 hover:bg-Green2 hover:text-white rounded-md text-sm"
              >
                New Product <span className="text-DarkGreen">(Admin)</span>
              </Link>
            </li>

            <li>
              {" "}
              <Link
                href="/admin/products"
                className="block px-3 py-3  text-Green2 hover:bg-Green2 hover:text-white rounded-md text-sm"
              >
                All Products <span className="text-DarkGreen">(Admin)</span>
              </Link>
            </li>

            <li>
              {" "}
              <Link
                href="/admin/orders"
                className="block px-3 py-3  text-Green2 hover:bg-Green2 hover:text-white rounded-md text-sm"
              >
                All Orders <span className="text-DarkGreen">(Admin)</span>
              </Link>
            </li>

            <li>
              {" "}
              <Link
                href="/admin/users"
                className="block px-3 py-3  text-Green2 hover:bg-Green2 hover:text-white rounded-md text-sm"
              >
                All Users <span className="text-DarkGreen">(Admin)</span>
              </Link>
            </li>

            <hr className=" " />
          </>
        {/* )} */}

        <li>
          {" "}
          <Link
            href="/me"
            className="block px-3 py-3  text-Green2 hover:bg-Green2 hover:text-white rounded-md text-sm"
          >
            Your Profile
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href="/me/orders"
            className="block px-3 py-3 text-Green2 hover:bg-Green2 hover:text-white rounded-md text-sm"
          >
            Orders
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href="/me/update"
            className="block px-3 py-3  text-Green2 hover:bg-Green2 hover:text-white rounded-md text-sm"
          >
            Update Profile
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href="/me/update_password"
            className="block px-3 py-3 text-Green2 hover:bg-Green2 hover:text-white rounded-md text-sm"
          >
            Update Password
          </Link>
        </li>

        <li>
          {" "}
          <a
            className="block px-3 py-3 text-red-600 hover:text-white hover:bg-red-600 hover:text-white-500 rounded-md cursor-pointer text-sm"
            // onClick={logoutHandler}
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;