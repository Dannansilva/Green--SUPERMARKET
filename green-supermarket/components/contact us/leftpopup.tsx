
import Image from 'next/image'
import React from 'react'
import Mapicon from "../../public/assets/Contact us images/Map Pin.png"
import Emailicon from "../../public/assets/Contact us images/Email.png"
import Phoneicon from "../../public/assets/Contact us images/PhoneCall.png" 
import Container from '../container/container'
const leftpopup = () => {
  return (
    // <div className=' px-5  md:w-max bg-white rounded-lg flex-col items-start justify-items-center grid md:inline-flex shadow-2xl'>
    //     {/* Location */}
    //     <div className=' py-6 rounded-[10px] flex-col justify-start items-center gap-4 inline-flex'>
    //         <Image src={Mapicon} alt="mapicon" width={45} height={45} />
    //         <p>Colombo 05, Sri Lanka</p>
    //     </div>
    //     <hr className="my-4 w-full border-gray-300" />
    //     {/* Email */}
    //     <div className=' py-6 rounded-[10px] flex-col justify-start items-center gap-4 inline-flex'>
    //         <Image src={Emailicon} alt="mapicon" width={45} height={45} />
    //         <p>green.s.lk@gmail.com</p>
    //     </div>
    //     <hr className="my-4 w-full border-gray-300" />
    //     {/* Phone */}
    //     <div className=' py-6 rounded-[10px] flex-col justify-start items-center gap-4 inline-flex'>
    //         <Image src={Phoneicon} alt="mapicon" width={45} height={45} />
    //         <p>(94) 76 889 654</p>
    //         <p>Hotline: 112 657 876</p>
    //     </div>
    // </div>
    <Container>
<div className=" border flex sm:flex-row lg:flex-col border-red-600 ">
  {/* first div */}
  <div className=" flex flex-col mx-2 border ">
    <div className=" items-center ">
      <div className=" items-center justify-center"><Image src="/assets/Contact us images/Map Pin.png" alt="" width={30} height={30} /></div>
      <div className="items-center w-"><p>Colombo 05, Sri Lankka</p></div>
    </div>
    <hr className=" mx-2" />
    <div>
    <div>
      <Image src="/assets/Contact us images/Email.png" alt="" width={30} height={30}/></div>
      <div><p>greens.s.lk@gmail.com</p></div>
    </div>
    <div>
    <div>
      <Image src="/assets/Contact us images/PhoneCall.png" alt=""  width={30} height={30}/></div>
      <div><p>{`(+94) 762630010`}</p></div>
      <div>
        <span><p>{`Hotline: `}</p></span>
        <span><p>{`112 657 876 `}</p></span>
      </div>
    </div>

  </div>
  {/* second div */}
  <div></div>
</div>
</Container>

  )
}

export default leftpopup