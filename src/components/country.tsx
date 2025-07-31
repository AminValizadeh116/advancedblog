import Link from "next/link";
import React from "react";

function Country({
  countryName,
}: {
  countryName: "united states of america" | "Iran" | "germany" | "canada";
}) {
  return (
    <div className="col-span-1 max-xl:col-span-2 ">
      <Link
        className="cursor-pointer"
        href={{
          pathname: "/country",
          query: { name: countryName },
        }}
      >
        <div className="hover:bg-amber-50 hover:border-black hover:border-2 hover:text-black text-white h-15 max-md:h-10 lg:h-20 rounded-full bg-amber-700 flex items-center justify-center">
          <span className="max-sm:text-sm text-2xl 2xl:text-3xl"> {countryName} </span>
        </div>
      </Link>
    </div>
  );
}

export default Country;
