import React from "react";

function Card({ values, handleAddFavourite, index }) {
  const { songName, author, image, isFavourite } = values;

  return (
    <div className="bg-[#CDC1FF] h-fit w-52 px-3 py-2 rounded-md flex gap-3 border-zinc-300 border-[1px]">
      <div className="shrink-0">
        <img className="h-16 w-16 object-cover rounded-md" src={image} alt="" />
      </div>

      <div>
        <h3 className="font-semibold text-sm leading-4 text-[#F5EFFF]">
          {songName}
        </h3>
        <h5 className="font-mono text-[10px] leading-5 text-[#F5EFFF]">
          {author}
        </h5>
        <button
          onClick={() => handleAddFavourite(index)}
          className={`font-bold text-[#E5D9F2] text-[10px] leading-[8px] px-2 py-1 ${
            !isFavourite ? `bg-[#A594F9]` : `bg-red-600`
          } rounded-sm`}
        >
          {isFavourite ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
}

export default Card;
