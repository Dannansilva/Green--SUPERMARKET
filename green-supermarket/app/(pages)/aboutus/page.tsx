import React from 'react';
import FirstPart from "../../../components/about us/firstpart";
import Secondpart from '@/components/about us/secondpart';
import ThirdPart from '@/components/about us/thirdpart';
import Container from '@/components/container/container';
import { LiaHomeSolid } from "react-icons/lia";


const Page = () => {
  const navItems = [{ home: "Home", path: "/" }];

  return (
    <div>
      <div
        className="flex  w-full bg-cover bg-no-repeat items-center  max-h-[90px] sm:max-h-[60px] md:max-h-[90px] "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25)), url('/assets/ShopPage/Breadcrumbs.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "120px",
        }}
      >
        <div className="flex flex-row items-center mx-2 sm:mx-2 md:mx-16 lg:mx-24 xl:mx-36  gap-3 flex-1 cursor-pointer">
          <div>
          {navItems.map(({home, path}) => (
          <a key={home} href={path}>
            <div>
              <LiaHomeSolid className="text-Lightgray hover:text-white sm:text-xs md:text-base lg:text-md" />
            </div>
          </a>
          ))}
          </div>

          <div className=" text-Lightgray hover:text-white cursor-auto ">
            <p className=" sm:text-xs md:text-base lg:text-md ">{`>`}</p>
          </div>
          <div className="flex text-Lightgray hover:text-white ">
            <p className="text-Green hover:text-white sm:text-xs md:text-base lg:text-md">
              About Us
            </p>
          </div>
        </div>
      </div>
      <Container>
      <FirstPart />
      <Secondpart />
      <ThirdPart/> 
      </Container>
    </div>
  );
}

export default Page;
