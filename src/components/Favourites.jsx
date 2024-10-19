import React from "react";

function Favourites({ values }) {
  return (
    <div className="flex bg-[#A594F9] px-4 py-1 rounded-md gap-4">
      <h3 className="text-sm font-mono text-[#F5EFFF]">Favourites</h3>
      <h2 className="text-sm font-mono text-[#F5EFFF]">{values}</h2>
    </div>
  );
}

export default Favourites;
