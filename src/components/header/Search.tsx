import React from "react";
import searchIcon from "./../../../public/search.svg";
import Image from "next/image";

function Search() {
  return (
    <div className="flex">
      <label className="bg-gray-100 rounded-l px-3 py-2" htmlFor="search">
        <Image src={searchIcon} alt="search" />
      </label>
      <input className="bg-gray-100 rounded-r w-90" id="search" type="text" placeholder="search"/>
    </div>
  );
}

export default Search;
