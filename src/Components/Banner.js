import React, { useEffect, useState } from "react";
import bannerImage from "../Asset/newsimage.jpg";
import bannerImage2 from "../Asset/newsimage2.jpg";
import bannerImage3 from "../Asset/newsimage3.jpg";
import bannerImage4 from "../Asset/newimage5.jpg";

export default function Banner() {
  const [number, setnumber] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setnumber((number + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, [number]);
  return (
    <div className=" relative w-full h-full  flex flex-row  overflow-hidden">
      <div
        className={` relative w-full h-full flex  duration-700 ease-in-out transform -translate-x-[${
          number * 100
        }%] flex-row`}
      >
        <div className=" relative w-full h-full overflow-hidden shrink-0 ">
          <div className=" w-1/3 bottom-2 h-[70px] items-center justify-center flex  bg-black backdrop-filter backdrop-blur-md rounded-r-full bg-opacity-50 absolute">
            <p className=" font-bold text-white">
              Defence University Student Uniform Changed
            </p>
          </div>

          <img src={bannerImage2} className=" w-full h-full  object-cover  " />
        </div>
        <div className=" relative w-full h-full overflow-hidden shrink-0 ">
          <div className=" w-1/3 bottom-2 h-[70px] items-center justify-center flex  bg-black backdrop-filter backdrop-blur-md rounded-r-full bg-opacity-50 absolute">
            <p className=" font-bold text-white">
              Defence University Student Uniform Changed
            </p>
          </div>

          <img src={bannerImage} className=" w-full h-full  object-cover  " />
        </div>
        <div className=" relative w-full h-full overflow-hidden shrink-0 ">
          <div className=" w-1/3 bottom-2 h-[70px] items-center justify-center flex  bg-black backdrop-filter backdrop-blur-md rounded-r-full bg-opacity-50 absolute">
            <p className=" font-bold text-white">
              Defence University Student Uniform Changed
            </p>
          </div>

          <img src={bannerImage3} className=" w-full h-full  object-cover  " />
        </div>
        <div className=" relative w-full h-full overflow-hidden shrink-0 ">
          <div className=" w-1/3 bottom-2 h-[70px] items-center justify-center flex  bg-black backdrop-filter backdrop-blur-md rounded-r-full bg-opacity-50 absolute">
            <p className=" font-bold text-white">
              Defence University Student Uniform Changed
            </p>
          </div>

          <img src={bannerImage4} className=" w-full h-full  object-cover  " />
        </div>
      </div>
    </div>
  );
}
