import { useEffect, useRef, useState } from "react";
import { Return, Search } from "../svg";
import ClickOutside from "../helpers/ClickOutside";

import { searchMenuAtom } from "../lib/atom";
import { atom, useAtom } from "jotai";

const SearchMenu = (setShowSearchMenu) => {
  const menu = useRef(null);
  const input = useRef(null);
  const [searchMenu, setSeachMenu] = useAtom(searchMenuAtom);
  const [searchIcon, setSearchIcon] = useState(true);

  ClickOutside(menu, () => {
    setSeachMenu(false);
  });

  useEffect(() => {
    input.current.focus();
  }, []);

  const color = "#65676b";
  return (
    <div
      ref={menu}
      className="z-999 left absolute top-0 left-0 flex items-start flex-col gap-[6px] bg-primary shadow-lg rounded-b-[10px] transition-all duration-200 z-1 min-h-[400px] max-h-[70vh] pt-[8px] pr-[16px] pb-[10px] pl-[6px]"
    >
      <div className="search_wrap flex items-center gap-[6px]">
        <div
          className="header_logo cursor-pointer hover:bg-forth transition-all duration-200 rounded-full  p-2"
          onClick={() => setSeachMenu(false)}
        >
          <div className="cicle">
            <Return />
          </div>
        </div>
        <div className="search mt-1">
          <div className="search flex items-center gap-2 pt-[9px] pr-[44px] pb-[9px] pl-[12px] w-[245px] rounded-full bg-forth ">
            {searchIcon && <Search color={color} />}
            <input
              type="text"
              ref={input}
              placeholder="Search Facebook"
              onFocus={() => setSearchIcon(false)}
              onBlur={() => setSearchIcon(true)}
              className="hide_mobo outline-none pl-1 border-none bg-transparent text-sm font-seg placeholder:translate-y-[-1px] placeholder-[#65676b]"
            />
          </div>
        </div>
      </div>
      <div className="search_history_header w-full flex items-center justify-between p-[10px] text-sm">
        <span className="text-md font-medium">Recent searches</span>
        <a className="cursor-pointer text-blue">Clear all</a>
      </div>
      <div className="search_history w-full "></div>
      <div className="search_result_scrollbar"></div>
    </div>
  );
};

export default SearchMenu;
