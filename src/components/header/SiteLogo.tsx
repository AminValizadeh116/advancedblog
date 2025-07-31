import React from "react";


function SiteLogo() {
  return (
    <div >
      <div className="flex max-sm:gap-3 gap-5 mt-10">
        <div className="rounded flex items-center justify-center rotate-15 bg-linear-to-r from-red-400 to-red-500 text-white h-15 w-15 font-black text-2xl max-sm:w-10 max-sm:h-8 max-sm:text-xl max-sm:font-bold">
          B
        </div>
        <div className="rounded -rotate-10 w-15 h-15 flex items-center justify-center font-black text-3xl bg-linear-to-r from-red-700 to-red-500 text-white max-sm:w-10 max-sm:h-8 max-sm:text-xl max-sm:font-bold">
          L
        </div>
        <div className="rounded rotate-7 w-15 h-15 flex items-center justify-center font-bold text-3xl bg-linear-to-r from-red-600 to-red-500 text-white max-sm:w-10 max-sm:h-8 max-sm:text-xl max-sm:font-bold">
          o
        </div>
        <div className="rounded rotate-30 w-15 h-15 flex items-center justify-center font-bold text-3xl bg-linear-to-r from-red-600 to-red-700 text-white max-sm:w-10 max-sm:h-8 max-sm:text-xl max-sm:font-bold">
          G
        </div>
      </div>
    </div>
  );
}

export default SiteLogo;
