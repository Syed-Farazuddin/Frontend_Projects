import React from "react";
import image from "../public/assets/images/avatar-jessica.jpeg";
export default function Card() {
  return (
    <div className=" bg-offblack h-[100vh] flex items-center justify-center">
      <div className="bg-darkgrey w-[30%] h-[90%] rounded-lg m-auto p-10 flex flex-col items-center  justify-center text-white">
        <div className="p-2">
          <img className="h-[80px] w-[80px] rounded-full" src={image} alt="" />
        </div>
        <div className="text-white p-1 text-center">
          <h1 className="text-xl my-1 font-bold subpixel-antialiased">
            Jessica Randal
          </h1>
          <h4 className="text-lg text-green font-semibold subpixel-antialiased">
            London, United Kingdom
          </h4>
          <p className="my-4 text-lg font-normal text-gray-50 ">
            Front-end developer and avid reader
          </p>
        </div>
        <div className="bg-grey sm:my-1 sm:p-1 lg:my-2 lg:p-2 cursor-pointer  rounded-md w-[90%] text-center hover:bg-green font-semibold hover:text-black">
          GitHub
        </div>
        <div className="bg-grey sm:my-1 sm:p-1 lg:my-2 lg:p-2 cursor-pointer  rounded-md w-[90%] text-center hover:bg-green font-semibold hover:text-black">
          FrontEnd Mentor
        </div>
        <div className="bg-grey sm:my-1 sm:p-1 lg:my-2 lg:p-2 cursor-pointer  rounded-md w-[90%] text-center hover:bg-green font-semibold hover:text-black">
          Linkedin
        </div>
        <div className="bg-grey sm:my-1 sm:p-1 lg:my-2 lg:p-2 cursor-pointer  rounded-md w-[90%] text-center hover:bg-green font-semibold hover:text-black">
          Twitter
        </div>
        <div className="bg-grey  sm:my-1 sm:p-1lg:my-2 lg:p-2 cursor-pointer rounded-md w-[90%] text-center hover:bg-green font-semibold hover:text-black">
          Instagram
        </div>
      </div>
    </div>
  );
}
