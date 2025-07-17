import React from "react";
import Category from "./category";
import tec from './../../public/tec.webp'
import health from './../../public/health.webp'
import crime from './../../public/Crimes.jpg'

function Categories() {
  return (
    <div className="bg-gray-700 p-10 mt-10">
      <h1 className="text-4xl font-black text-white">categories</h1>
      <ul className="grid grid-cols-3 gap-8 mt-10 mx-20">
        <Category image={tec} altImage="technology" title="technology"/>
        <Category image={health} altImage="health" title="health"/>
        <Category image={crime} altImage="crime" title="crime"/>
      </ul>
    </div>
  );
}

export default Categories;
