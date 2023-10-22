import React from "react";
import images from "../Asset/militaryEnginners.png";

export default function NewsCard() {
  const news = {
    headline: "New Defense Technology Unveiled: Keeping Our Nation Safe",
    discription:
      "The Defense University is proud to announce the launch of our new defense technology program. This program will provide students with the skills and knowledge they need to work in the defense industry. We are excited about this opportunity and look forward to seeing what our students accomplish!",
    datePosted: "May 20, 2021",
  };
  return (
    <div className=" relative w-full h-full  items-center    bg-cover flex flex-row  ">
      <img
        src={images}
        alt="news"
        className=" w-[150px] h-[120px] object-cover"
      />
      <div className=" w-full h-[120px] ">
        <h1 className=" mx-2 font-bold line-clamp-1  text-lg dark:text-blue-400 text-blue-900">
          {news.headline}
        </h1>
        <p className="mx-2 font-bold  text-orange-500">{news.datePosted}</p>
        <p className=" line-clamp-2 mx-2 dark:text-white">{news.discription}</p>
      </div>
    </div>
  );
}
