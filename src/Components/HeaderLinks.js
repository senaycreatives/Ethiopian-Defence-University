import React from "react";

export default function HeaderLinks({ name, active }) {
  return (
    <div
      className={` mx-2  font-bold bg-blue-500 px-4 flex items-center justify-center h-full`}
    >
      <p className=" text-white ">{name}</p>
    </div>
  );
}
