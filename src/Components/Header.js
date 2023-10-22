import React, { useState } from "react";
import logo from "../Asset/logo.svg";
import InputContainer from "./InputContainer";
import { FiSearch } from "react-icons/fi";
import { FaAngleDown, FaMoon, FaSun } from "react-icons/fa";
import useDarkSide from "../Hooks/UseDarkSide";

export default function Header() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    console.log(darkSide);
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div className=" w-full h-[200px] bg-blue-500 flex flex-col">
      <div className=" w-full h-[150px] flex flex-row justify-between  items-center dark:bg-zinc-900 bg-white p-2">
        <div className=" rounded-full   items-center justify-center flex  h-[150px]">
          <img
            src={logo}
            alt="logo"
            className="w-[90px] h-[90px] rounded-full overflow-hidden "
          />
          <div className=" flex flex-col mr-2 ml-2">
            <h1 className=" font-bold text-4xl text-blue-500">መከላከያ ዩኒቨርሲቲ</h1>
            <h1 className=" font-bold text-2xl text-yellow-500">
              Deffence University
            </h1>
          </div>
        </div>
        <div className="flex h-full  w-1/2  items-center justify-center">
          <div className="flex flex-row">
            <div className=" w-[300px] h-[40px]  rounded-lg  overflow-hidden bg-red-100 dark:bg-zinc-100">
              <InputContainer />
            </div>
            <div className=" flex items-center justify-center rounded-md w-[40px] h-[40px]  bg-blue-500">
              <FiSearch size={20} className=" font-bold text-white" />
            </div>
          </div>
          <div className=" h-[40px] w-[40px] mx-5 dark:text-white  flex items-center justify-center  font-bold">
            en <FaAngleDown />
          </div>
          <div
            onClick={() => toggleDarkMode(colorTheme)}
            className=" bg-zinc-50 rounded-md shadow-md  h-[40px] w-[40px] mx-5  flex items-center justify-center  font-bold"
          >
            {darkSide && <FaSun className=" text-orange-500" />}{" "}
            {!darkSide && <FaMoon className=" text-black" />}
          </div>
        </div>
      </div>
      <div className=" flex flex-row w-full bg-blue-600 h-[50px] justify-center">
        <div className=" mx-2  font-semibold bg-blue-500 px-4 flex items-center justify-center h-full">
          <p className=" text-white ">Home</p>
        </div>
        <div className=" mx-2   px-4 flex items-center justify-center h-full">
          <p className=" text-white flex flex-row items-center ">
            Latest
            <FaAngleDown className=" text-gray-400" />
          </p>
        </div>
        <div className=" mx-2   px-4 flex items-center justify-center h-full">
          <p className=" text-white flex flex-row items-center ">
            About-Du
            <FaAngleDown className=" text-gray-400" />
          </p>
        </div>
        <div className=" mx-2   px-4 flex items-center justify-center h-full">
          <p className=" text-white flex flex-row items-center ">
            Staff
            <FaAngleDown className=" text-gray-400" />
          </p>
        </div>
        <div className=" mx-2   px-4 flex items-center justify-center h-full">
          <p className=" text-white flex flex-row items-center ">
            Study
            <FaAngleDown className=" text-gray-400" />
          </p>
        </div>
        <div className=" mx-2   px-4 flex items-center justify-center h-full">
          <p className=" text-white flex flex-row items-center ">
            Research
            <FaAngleDown className=" text-gray-400" />
          </p>
        </div>
        <div className=" mx-2   px-4 flex items-center justify-center h-full">
          <p className=" text-white flex flex-row items-center ">
            Cooporations
            <FaAngleDown className=" text-gray-400" />
          </p>
        </div>
      </div>
    </div>
  );
}
