import Image from "next/image"; 
import React from "react";
import news from "./../../public/news.jpg";

function Notice() {
  return (
    <div className="grid grid-cols-5 gap-4 items-center relative">
      <Image width={750} height={500} className="col-span-3 " src={news} alt="mmad" />
      <div className="flex gap-5 rounded-2xl p-5 absolute bottom-4 left-25">
        <button className="hover:border-2 hover:border-amber-800 hover:bg-white hover:text-amber-950 border-2 border-amber-800 cursor-pointer text-2xl rounded-3xl bg-amber-800 px-8 py-3 text-white">
          create your Article
        </button>
        <button className="hover:border-2 hover:border-orange-50 hover:bg-orange-50 border-2 cursor-pointer text-2xl rounded-3xl bg-white px-8 py-3 text-amber-900">
          read Articles
        </button>
      </div>
      <div className=" col-span-2">
        <h2 className="font-black text-5xl p-5">title</h2>
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