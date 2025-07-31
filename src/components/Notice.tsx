import Image from "next/image";
import React from "react";
import news from "./../../public/news.jpg";

function Notice() {
  return (
    <div className="grid grid-cols-5 gap-4 items-center relative">
      <Image
        width={750}
        height={500}
        className="min-lg:col-span-3 max-lg:col-span-5"
        src={news}
        alt="mmad"
      />
      <div className="flex gap-5 rounded-2xl p-5 absolute min-xl:bottom-4 min-xl:left-25 min-lg:bottom-3 min-lg:left-10 min-md:bottom-68 min-md:left-40 min-sm:bottom-60 min-sm:left-25 max-sm:bottom-70 max-sm:left-10">
        <button className="hover:border-2 px-3 py-2 hover:border-amber-800 hover:bg-white hover:text-amber-950 border-2 border-amber-800 cursor-pointer text-lg rounded-xl text-white bg-amber-800 min-xl:rounded-3xl min-xl:text-2xl min-xl:px-8 min-xl:py-3 max-sm:text-xs">
          create your Article
        </button>
        <button className="hover:border-2 px-3 py-2 hover:border-orange-50 hover:bg-orange-50 border-2 cursor-pointer text-lg rounded-xl bg-white text-amber-900 min-xl:rounded-3xl min-xl:text-2xl min-xl:px-8 min-xl:py-3 max-sm:text-xs min-sm:text-lg">
          read Articles
        </button>
      </div>
      <div className="min-lg:col-span-2 max-lg:col-span-5">
        <h2 className="font-black max-sm:text-3xl text-5xl p-5">title</h2>
        <p className="p-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, aut,
          quo alias cupiditate voluptatum quis sit eligendi natus doloremque et
          ducimus. Culpa debitis inventore provident doloribus, vero eveniet
          ducimus aliquid.
        </p>
      </div>
    </div>
  );
}

export default Notice;
