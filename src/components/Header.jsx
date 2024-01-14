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
import { useState } from "react";

const Header = () => {
  const color = "#65676b";
  const [activeNav, setActiveNav] = useState("");
  console.log(activeNav);
  return (
    <div>
      <header className="fixed h-14 top-0 px-4 z-99 w-full shadow-md grid grid-cols-3 bg-primary text-primary">
        <div className="left flex items-center gap-x-3 px-[5px] py-[0.7rem] ">
          <Link to="/">
            <div className="circle w-8 h-8 rounded-full cursor-pointer flex justify-center items-center ">
              <Logo />
            </div>
          </Link>
          <div className="search flex items-center gap-2 p-[10px] pr-8 rounded-full bg-forth ">
            <Search color={color} />
            <input
              type="text"
              placeholder="Search Facebook"
              className="hide_mobo outline-none border-none bg-transparent text-sm font-seg placeholder:translate-y-[-1px] placeholder-[#65676b]"
            />
          </div>
        </div>
        <div className="center flex  justify-center items-center gap-x-[12px] transform translate-x-[-3px] ">
          <Link
            onClick={() => setActiveNav("home")}
            to="/"
            className={`flex relative items-center justify-center w-28 h-10 cursor-pointer transform translate-x-[-2px] ${
              activeNav === "home"
                ? "border-b-[3px] border-blue-400 hover:bg-transparent"
                : "border-b-[3px] border-b-transparent hover:bg-forth rounded-md"
            } px-[2.8rem] py-6`}
          >
            <HomeActive />
          </Link>
          <Link
            onClick={() => setActiveNav("friends")}
            to="/"
            className={`flex relative items-center justify-center w-28 h-10 cursor-pointer transform translate-x-[-2px] ${
              activeNav === "friends"
                ? "border-b-blue-400 border-b-[3px] hover:bg-transparent"
                : "border-b-[3px] border-b-transparent hover:bg-forth rounded-md"
            } px-[2.8rem] py-6`}
          >
            <Friends color={color} />
          </Link>
          <Link
            onClick={() => setActiveNav("watch")}
            to="/"
            className={`flex relative items-center justify-center w-28 h-10 cursor-pointer transform translate-x-[-2px] ${
              activeNav === "watch"
                ? "border-b-blue-400 border-b-[3px] hover:bg-transparent"
                : "border-b-[3px] border-b-transparent hover:bg-forth rounded-md"
            } px-[2.8rem] py-6`}
          >
            <div className="wrapper">
              <div className="notifcation absolute px-[5px] py-[1px] bg-red-500 rounded-full top-0 right-[1.9rem] text-white text-xs ">
                9+
              </div>
              <Watch color={color} />
            </div>
          </Link>
          <Link
            onClick={() => setActiveNav("market")}
            to="/"
            className={`flex relative items-center justify-center w-28 h-10 cursor-pointer transform translate-x-[-2px] ${
              activeNav === "market"
                ? "border-b-blue-400 border-b-[3px] hover:bg-transparent"
                : "border-b-[3px] border-b-transparent hover:bg-forth rounded-md"
            } px-[2.8rem] py-6`}
          >
            <Market color={color} />
          </Link>
          <Link
            onClick={() => setActiveNav("gaming")}
            to="/"
            className={`flex relative items-center justify-center w-28 h-10 cursor-pointer transform translate-x-[-2px] ${
              activeNav === "gaming"
                ? "border-b-blue-400 border-b-[3px] hover:bg-transparent"
                : "border-b-[3px] border-b-transparent hover:bg-forth rounded-md"
            } px-[2.8rem] py-6`}
          >
            <Gaming color={color} />
          </Link>
        </div>
        <div className="right"></div>
      </header>
    </div>
  );
};

export default Header;
