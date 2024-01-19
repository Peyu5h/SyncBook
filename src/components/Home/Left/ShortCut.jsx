import React from "react";

const ShortCut = ({ link, img, name }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-[12px] px-[10px] py-[8px] cursor-pointer rounded-lg text-sm "
    >
      <img
        className="w-[36px] h-[36px] object-cover rounded-lg "
        src={img}
        alt="shoortcut"
      />
      <span>{name}</span>
    </a>
  );
};

export default ShortCut;
