import React from "react";


function SiteLogo() {
  return (
    <div>
      <div className="flex gap-5 mt-10">
        <div className="rounded rotate-15 w-15 h-15 flex items-center justify-center font-bold text-3xl bg-linear-to-r from-red-500 to-red-400 text-white">
          B
        </div>
        <div className="rounded -rotate-10 w-15 h-15 flex items-center justify-center font-bold text-3xl bg-linear-to-r from-red-700 to-red-500 text-white">
          L
        </div>
        <div className="rounded rotate-7 w-15 h-15 flex items-center justify-center font-bold text-3xl bg-linear-to-r from-red-600 to-red-500 text-white">
          o
        </div>
        <div className="rounded rotate-30 w-15 h-15 flex items-center justify-center font-bold text-3xl bg-linear-to-r from-red-600 to-red-700 text-white">
          G
        </div>
      </div>
    </div>
  );
}

export default SiteLogo;
