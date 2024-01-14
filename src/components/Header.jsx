import { Link } from "react-router-dom";
import {
  Logo,
  Search,
  HomeActive,
  Friends,
  Watch,
  Market,
  Gaming,
} from "../svg";

const Header = () => {
  const color = "#65676b";
  return (
    <div>
      <header className="fixed top-0  z-99 w-full shadow-md grid grid-cols-3 bg-primary text-primary">
        <div className="left flex items-center gap-x-3 px-[5px] py-[1rem]">
          <Link to="/">
            <div className="circle w-10 h-10 rounded-full cursor-pointer flex justify-center items-center">
              <Logo />
            </div>
          </Link>
          <div className="search flex items-center gap-2 p-[10px] pr-8 rounded-full bg-forth">
            <Search color={color} />
            <input
              type="text"
              placeholder="Search Facebook"
              className="hide_mobo outline-none border-none bg-transparent text-sm font-seg placeholder:translate-y-[-1px] placeholder-[#65676b]"
            />
          </div>
        </div>
        <div className="center flex  justify-center items-center gap-x-20 transform translate-x-[-3px] ">
          <Link
            to="/"
            className="flex relative items-center justify-center w-31 h-12 rounded-[10px] cursor-pointer transform translate-x-[-2px]"
          >
            <HomeActive />
          </Link>
          <Link
            to="/"
            className="flex relative items-center justify-center w-31 h-12 rounded-[10px] cursor-pointer transform translate-x-[-2px]"
          >
            <Friends />
          </Link>
          <Link
            to="/"
            className="flex relative items-center justify-center w-31 h-12 rounded-[10px] cursor-pointer transform translate-x-[-2px]"
          >
            <Watch />
          </Link>
          <Link
            to="/"
            className="flex relative items-center justify-center w-31 h-12 rounded-[10px] cursor-pointer transform translate-x-[-2px]"
          >
            <Market />
          </Link>
          <Link
            to="/"
            className="flex relative items-center justify-center w-31 h-12 rounded-[10px] cursor-pointer transform translate-x-[-2px]"
          >
            <Gaming />
          </Link>
        </div>
        <div className="right"></div>
      </header>
    </div>
  );
};

export default Header;
