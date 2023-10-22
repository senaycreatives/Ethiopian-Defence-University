import React, { useState } from "react";
import logo from "../Asset/logo.svg";
import InputContainer from "./InputContainer";
import { FiSearch } from "react-icons/fi";
import { FaAngleDown, FaMoon, FaSun } from "react-icons/fa";
import image from "../Asset/logo.svg";
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
            onClick={toggleDarkMode}
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
        <div className=" relative mx-2  hover:cursor-pointer  group  px-4 flex items-center justify-center h-full">
          <p className=" text-white flex flex-row items-center ">
            Latest
            <FaAngleDown className=" text-gray-400" />
          </p>
          <div className=" group-hover:flex  justify-center items-center flex-col hidden duration-500  absolute z-10 top-[50px] left-0 w-[170px] h-[160px] bg-blue-500">
            <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
              <p className="  text-white text-sm"> Announcment</p>
            </div>
            <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
              <p className="  text-white text-sm"> News</p>
            </div>
            <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
              <p className="  text-white text-sm"> Research</p>
            </div>
          </div>
        </div>
        <div className=" mx-2  relative  group  hover:cursor-pointer px-4 flex items-center justify-center h-full">
          <p className=" text-white flex flex-row items-center ">
            About-Du
            <FaAngleDown className=" text-gray-400" />
          </p>
          <div className=" group-hover:flex flex-row hidden duration-500  absolute z-10 top-[50px] left-0 w-[600px] h-[220px] bg-blue-500">
            <div className=" flex flex-col items-center h-full w-1/2 justify-center">
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm">History</p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm">Vision</p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm">Morals</p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm">objectives</p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm">Commandants</p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm">Contacts</p>
              </div>
            </div>
            <div className=" h-full flex flex-col w-1/2  items-center ">
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm">Symbols</p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm">Documents</p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm">Service and facilities</p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm">community outrich</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative group hover:cursor-pointer  mx-2   px-4 flex items-center justify-center h-full">
          <p className=" text-white flex flex-row items-center ">
            Acadamics
            <FaAngleDown className=" text-gray-400" />
          </p>
          <div className=" group-hover:flex flex-row hidden duration-500  absolute z-10 top-[50px] left-0 w-[700px]  p-2 bg-blue-500">
            <div className=" flex flex-col items-center h-full w-1/2">
              <div className=" p-2 h-[30px]  w-5/6 flex font-bold text-white items-center justify-center ">
                Collages
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm">Enginnering Campus</p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Resource and Managment Campus
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm">Health Science</p>
              </div>
              <div className=" p-2 h-[30px]  w-5/6 flex font-bold text-white items-center justify-center ">
                Admission Info
              </div>

              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Scollarships and Grants
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Civilian studies
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  International students
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Military students: Support and Allowances
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Foreign education recognition
                </p>
              </div>
            </div>
            <div className=" flex flex-col items-center h-full w-1/2  border-l-2  mt-4 border-white">
              <div className=" p-2 h-[30px]  w-5/6 flex font-bold text-white items-center justify-center ">
                Acadamics
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Academic Leader
                </p>
              </div>

              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Research Institiutes
                </p>
              </div>

              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Inter institutional agreements
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Major and Minor
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Academic calendar and timetables
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Academic programs
                </p>
              </div>
              <div className=" p-2 h-[30px]  w-5/6 flex font-bold text-white items-center justify-center ">
                Registrar
              </div>

              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Registration and enrollment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative group hover:cursor-pointer mx-2   px-4 flex items-center justify-center h-full">
          <p className=" text-white flex flex-row items-center ">
            Staff
            <FaAngleDown className=" text-gray-400" />
          </p>
          <div className=" group-hover:flex flex-row hidden duration-500  absolute z-10 top-[50px] -left-[100px] w-[550px] p-2 bg-blue-500">
            <div className=" flex flex-col items-center h-full w-1/2 ">
              <div className=" p-2 h-[30px]  w-5/6 flex font-bold text-white items-center justify-center ">
                Commandant Office
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-full  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Change Management and Transformation
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-full  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Ethics and Anti-corruption
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-full  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  External Relations, Partnerships and Communications
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-full  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Academic Standards and Quality Enhancement
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-full  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  HIV/AIDS Prevention & Control
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-full  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Legal Services
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-full  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Strategic Planning
                </p>
              </div>
            </div>
            <div className=" flex flex-col items-center h-full w-1/2  border-l-2 border-white">
              <div className=" p-2 h-[30px]  w-full flex font-bold text-white items-center justify-center ">
                Vise Commandant Office
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Academic Office
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Research and Technology Transfer
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Administration and Student Services
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Institutional Development
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Strategic Communications and Internationalization
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Strategic Planning and Reform
                </p>
              </div>
              <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
                <p className="  text-white text-sm line-clamp-1">
                  Board of Directors
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group hover:cursor-pointer mx-2   px-4 flex items-center justify-center h-full">
          <p className=" text-white flex flex-row items-center ">
            Research
            <FaAngleDown className=" text-gray-400" />
          </p>
          <div className=" group-hover:flex  items-center flex-col hidden duration-500  absolute z-10 top-[50px] left-0 w-[200px] h-[100px] bg-blue-500">
            <div className=" p-2 h-[30px]  w-full flex font-bold text-white items-center justify-center ">
              Research Institiutes
            </div>
            <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
              <p className="  text-white text-sm line-clamp-1">
                Defence institution of technology
              </p>
            </div>
            <div className=" p-2 border-white border-opacity-50 h-[30px] flex items-center justify-center  text-white   w-5/6  mt-[5px]  border-b-[1px]">
              <p className="  text-white text-sm line-clamp-1">
                institution of Science
              </p>
            </div>
          </div>
        </div>
        <div className=" relative group hover:cursor-pointer mx-2   px-4 flex items-center justify-center h-full">
          <p className=" text-white flex flex-row items-center ">
            Cooporations
            <FaAngleDown className=" text-gray-400" />
          </p>
          <div className=" group-hover:flex  flex-row hidden duration-500  p-2 absolute z-10 top-[50px] -left-[200px] w-[500px]  bg-blue-500">
            <div className=" text-white font-semibold flex flex-col items-center h-full w-1/2 ">
              <img
                src={image}
                alt="corpimages"
                className="w-[200px] h-[100px] object-cover rounded-md"
              />
              Defence Enginnering
            </div>
            <div className=" text-white font-semibold flex flex-col items-center h-full w-1/2 ">
              <img
                src={image}
                alt="corpimages"
                className="w-[200px] h-[100px] object-cover rounded-md"
              />
              Defence Enginnering
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
