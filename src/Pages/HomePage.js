import React from "react";
import Banner from "../Components/Banner";
import commandantpic from "../Asset/commandant.jpg";
import Button from "../Components/Button";
import NewsCard from "../Components/NewsCard";
import ReactPlayer from "react-player";
import logos from "../Asset/log.svg";
import france from "../Asset/French_Army.svg";
import R from "../Asset/R.svg";

export default function HomePage() {
  return (
    <div className=" min-h-screen w-full bg-zinc-50 dark:bg-zinc-900">
      <div className=" w-full h-[400px]">
        <Banner />
      </div>
      <div className=" mt-3 flex flex-row w-full  ">
        <div className=" w-3/4  ">
          <div className=" w-full mt-7 flex items-center  flex-row">
            <div className="w-[100px] self-end h-[3px]  rounded-full mb-1 bg-blue-500"></div>
            <div className=" font-bold text-2xl dark:text-white font-Roboto ">
              Commandant Message
            </div>
            <div className="w-[100px] self-end h-[3px]  rounded-full mb-1 bg-blue-500"></div>
          </div>
          <div className="relative w-3/4 flex items-center flex-row rounded-lg mt-3 h-[250px] bg-white dark:bg-zinc-800 ">
            <img
              src={commandantpic}
              alt="commandantpic"
              className=" w-[270px] h-[240px] object-cover"
            />
            <div className=" bottom-0 h-[50px] w-[270px] backdrop-filter backdrop-blur-sm bg-opacity-50  bg-black absolute flex items-center flex-col justify-center">
              <p className=" font-bold text-white ">Lt.General Kebede</p>
              <p className="font-semibold text-white">
                Defence University Commandant
              </p>
            </div>

            <div className="  mx-2  w-full flex-col h-full  flex items-center justify-center">
              <p className="  overflow-hidden text-ellipsis dark:text-white  font-Roboto  w-11/12 h-[140px]">
                Welcome to the Defense University! We are delighted to have you
                join our prestigious institution dedicated to excellence in
                defense education and research. At Defense University, we strive
                to provide an unparalleled learning experience and equip our
                students with the knowledge, skills, and values necessary to
                excel in the field of defense. As a student at Defense
                University, you will have access to state-of-the-art facilities,
                world-class faculty members, and a vibrant community of
                like-minded individuals who share your passion for defense and
                security. Our comprehensive curriculum covers a wide range of
                subjects, including military strategy, technology advancements,
                international relations, and ethical considerations.
              </p>
              <div className=" h-[40px] rounded-md mt-2 ">
                <Button />
              </div>
            </div>
          </div>
          <div className=" w-full mt-[60px] flex items-center   flex-row">
            <div className="w-[100px] self-end h-[3px]  rounded-full mb-1 bg-blue-500"></div>
            <div className=" font-bold text-xl dark:text-white font-Roboto ">
              Latest News
            </div>
            <div className="w-[100px] self-end h-[3px]  rounded-full mb-1 bg-blue-500"></div>
          </div>
          <div className=" flex  flex-col  w-[800px] flex-wrap  pt-3 ">
            <div className=" w-[550px] bg-white dark:bg-zinc-800 m-2 h-[150px] rounded-lg overflow-hidden shrink-0">
              <NewsCard />
            </div>
            <div className=" w-[550px] bg-white  dark:bg-zinc-800 m-2 h-[150px] rounded-lg overflow-hidden shrink-0">
              <NewsCard />
            </div>
            <div className=" w-[550px] bg-white dark:bg-zinc-800 m-2 h-[150px] rounded-lg overflow-hidden shrink-0">
              <NewsCard />
            </div>
            <div className="  ml-[200px] w-[100px] h-[40px] bg-blue-400">
              <Button />
            </div>
          </div>
        </div>
        <div className="w-1/4   h-[500px] flex items-center flex-col ">
          <div className=" text-xl flex items-center justify-center font-bold h-[50px] dark:text-white font-Roboto ">
            Quick Link
          </div>
          <div className=" h-[40px]  font-bold  text-blue-400 flex items-center justify-center">
            Collages
          </div>
          <div className=" h-[40px]  font-bold  text-blue-400 flex items-center justify-center">
            Mail Services
          </div>
          <div className=" h-[40px]  font-bold  text-blue-400 flex items-center justify-center">
            Research Institiutes
          </div>
          <div className=" h-[40px]  font-bold  text-blue-400 flex items-center justify-center">
            Collages
          </div>
          <div className="  text-xl flex items-center justify-center font-bold h-[50px]  dark:text-white font-Roboto">
            Events
          </div>
          <div className=" p-3 relative flex flex-row w-11/12 my-2 h-[60px] shadow-sm justify-center bg-white dark:bg-zinc-800">
            <div className=" flex top-0 left-0 items-center justify-center animate-pulse absolute bg-red-500 rounded-lg h-[15px]  w-[50px]">
              <p className=" text-white font-bold text-center">New</p>
            </div>
            <div className=" w-1/4 h-full flex flex-col">
              <p className=" text-black  dark:text-white font-Roboto font-bold text-center">
                May
              </p>
              <p className=" text-blue-600 font-Roboto font-bold text-center">
                20
              </p>
            </div>
            <div className=" w-3/4 h-full ">
              <p className="  text-black dark:text-white font-semibold text-center line-clamp-2">
                Registration for 2021/22 Academic Year
              </p>
            </div>
          </div>
          <div className=" p-3 relative flex flex-row dark:bg-zinc-800 w-11/12 my-2 h-[60px] shadow-sm justify-center bg-white">
            <div className=" flex top-0 left-0 items-center justify-center animate-pulse absolute bg-red-500 rounded-lg h-[15px]  w-[50px]">
              <p className=" text-white  font-bold text-center">New</p>
            </div>
            <div className=" w-1/4 h-full flex flex-col">
              <p className=" text-black dark:text-white font-Roboto font-bold text-center">
                May
              </p>
              <p className=" text-blue-500 font-Roboto font-bold text-center">
                20
              </p>
            </div>
            <div className=" w-3/4 h-full ">
              <p className=" text-black dark:text-white  font-Roboto  text-center line-clamp-2">
                Registration for 2021/22 Academic Year
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full  flex items-center  my-7 flex-row">
        <div className="w-[100px] self-end h-[3px]  rounded-full mb-1 bg-blue-500"></div>
        <div className=" font-bold text-2xl dark:text-white font-Roboto ">
          Featured Video
        </div>
        <div className="w-[100px] self-end h-[3px]  rounded-full mb-1 bg-blue-500"></div>
      </div>
      <div className=" w-full h-[500px] bg-white dark:bg-zinc-800 flex-col  flex items-center justify-center">
        <ReactPlayer
          url="https://youtu.be/u2NjQrt5kL0?si=pD3IT6KtmnTP8knb"
          playing={true}
          width={"60%"}
          height={"100%"}
          muted={true}
        />
      </div>
      <div className=" w-full  flex items-center  my-7 flex-row">
        <div className="w-[100px] self-end h-[3px]  rounded-full mb-1 bg-blue-500"></div>
        <div className=" font-bold text-2xl dark:text-white font-Roboto ">
          Working With
        </div>
        <div className="w-[100px] self-end h-[3px]  rounded-full mb-1 bg-blue-500"></div>
      </div>
      <div className="  h-[230px]  mt-[30px] items-center justify-center  bg-white dark:bg-zinc-800 flex flex-row">
        <div className="w-[200px] hover:scale-[1.03] h-[200px]  duration-700 mx-4 flex flex-col items-center justify-center">
          <img
            src={france}
            className=" shadow-md shadow-black bg-white  rounded-xl "
            alt="logo"
          />
          <p className="  dark:text-white font-Roboto text-black font-bold">
            France Defence Force
          </p>
        </div>
        <div className="w-[200px] h-[200px] hover:scale-[1.03] duration-700  mx-4 flex flex-col items-center justify-center">
          <img
            src={logos}
            alt="logo"
            className="duration-700 dark:bg-white bg-black rounded-xl "
          />
          <p className="   dark:text-white font-Roboto text-black font-bold">
            DebreBirhan University
          </p>
        </div>
        <div className="w-[200px] h-[200px] hover:scale-[1.03] duration-700  mx-4 flex flex-col items-center justify-center">
          <img
            src={R}
            className=" shadow-md shadow-black bg-white  w-[200px] h-[150px] rounded-xl"
            alt="logo"
          />
          <p className="  dark:text-white font-Roboto text-black font-bold">
            Masachusets University
          </p>
        </div>
      </div>
    </div>
  );
}
