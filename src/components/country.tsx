import Link from "next/link";
import React from "react";

function Country({ countryName }: { countryName: string }) {
  return (
    <Link
      className="cursor-pointer"
      href={{
        pathname: "/countynews",
        query: { name: countryName },
      }}
    >
      <div className="hover:bg-amber-50 hover:border-black hover:border-2 hover:text-black text-white h-20 rounded-full col-span-1 bg-amber-700 flex items-center justify-center">
        <span className="text-3xl"> {countryName} </span>
      </div>
    </Link>
  );
}

export default Country;
