import React from "react";

export default function Footer() {
  return (
    <div className=" w-full h-[300px] mt-4 bg-blue-600 dark:bg-zinc-900 flex  flex-row">
      <div className=" flex flex-col w-1/3   justify-center items-center">
        <div className=" flex flex-col">
          <p className=" text-white font-semibold  mt-2 ">
            Defence University Communications
          </p>
          <p className=" text-white font-semibold mt-2  ">
            Email: Deu@gmail.com
          </p>
          <p className=" text-white font-semibold mt-2 ">Tel: +2519******</p>
          <p className="text-white font-semibold  mt-2">POBox:000 </p>
        </div>
      </div>
      <div className=" flex flex-col w-1/3   justify-center items-center">
        <div className=" flex flex-col">
          <h2 className=" font-bold  text-2xl text-white">Direct Link</h2>
          <p className=" text-white font-semibold  mt-2 ">
            Enginnering student Portal
          </p>
          <p className=" text-white font-semibold mt-2  ">Rsm Student Portal</p>
          <p className=" text-white font-semibold mt-2 ">
            Health Student Portal
          </p>
          <p className="text-white font-semibold  mt-2">Library </p>
        </div>
      </div>
      <div className=" flex flex-col w-1/3   justify-center items-center">
        <div className=" flex flex-col">
          <h2 className=" font-bold  text-2xl text-white">
            Emergency Services
          </h2>
          <p className=" text-white font-semibold  mt-2 ">
            Defence University Communications
          </p>
          <p className=" text-white font-semibold mt-2  ">
            Email: Deu@gmail.com
          </p>
          <p className=" text-white font-semibold mt-2 ">Tel: +2519******</p>
          <p className="text-white font-semibold  mt-2">POBox:000 </p>
        </div>
      </div>
    </div>
  );
}
