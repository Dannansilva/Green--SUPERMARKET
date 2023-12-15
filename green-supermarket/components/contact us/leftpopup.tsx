import Image from 'next/image'
import React from 'react'
import Mapicon from "../../public/assets/Contact us images/Map Pin.png"
import Emailicon from "../../public/assets/Contact us images/Email.png"
import Phoneicon from "../../public/assets/Contact us images/PhoneCall.png" 

const leftpopup = () => {
  return (
    <div className=' px-5 bg-white rounded-lg shadow flex-col items-start justify-items-center grid md:inline-flex'>
        {/* Location */}
        <div className=' py-6 rounded-[10px] flex-col justify-start items-center gap-4 inline-flex'>
            <Image src={Mapicon} alt="mapicon" width={45} height={45} />
            <p>Colombo 05, Sri Lanka</p>
        </div>
        <hr className="my-4 w-full border-gray-300" />
        {/* Email */}
        <div className=' py-6 rounded-[10px] flex-col justify-start items-center gap-4 inline-flex'>
            <Image src={Emailicon} alt="mapicon" width={45} height={45} />
            <p>green.s.lk@gmail.com</p>
        </div>
        <hr className="my-4 w-full border-gray-300" />
        {/* Phone */}
        <div className=' py-6 rounded-[10px] flex-col justify-start items-center gap-4 inline-flex'>
            <Image src={Phoneicon} alt="mapicon" width={45} height={45} />
            <p>(94) 76 889 654</p>
            <p>Hotline: 112 657 876</p>
        </div>
    </div>
  )
}

export default leftpopup