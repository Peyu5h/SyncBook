import { Link } from "react-router-dom";
import {
  Logo,
  Search,
  HomeActive,
  Friends,
  Watch,
  Market,
  Gaming,
  Menu,
  Messenger,
  Notifications,
  ArrowDown,
} from "../svg";
import { useState } from "react";

import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((user) => ({ ...user }));
  console.log(user);
  const color = "#65676b";
  const [activeNav, setActiveNav] = useState("home");
  console.log(activeNav);
  return (
    <div>
      <header className="fixed h-14 top-0 px-4 z-99 w-full shadow-md grid grid-cols-3 bg-primary text-primary">
        {/* =====================================================  LEFT ================================================================ */}

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

        {/* =====================================================  CENTER ================================================================ */}

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

        {/* =====================================================  RIGHT ================================================================ */}

        <div className="right flex absolute right-0 top-1/2 transform -translate-y-1/2">
          <Link
            to="/profile"
            className="flex items-center gap-[5px] cursor-pointer py-[3px] pr-[10px] pl-[6px] font-semibold text-sm mr-[10px]  rounded-full hover:bg-forth transition-all "
          >
            <img
              src={user?.picture}
              alt=""
              className="w-[29px] h-[29px] rounded-full  border-[1px] border-[#b0b3b8] transform translate-x-[-1px] "
            />
            <span>{user.first_name}</span>
          </Link>
          <div className="icons relative h-10 w-10 rounded-full flex items-center justify-center mr-2 bg-third cursor-pointer hover:bg-[#dadce0] transition-all ">
            <Menu />
          </div>
          <div className="icons relative h-10 w-10 rounded-full flex items-center justify-center mr-2 bg-third cursor-pointer hover:bg-[#dadce0] transition-all">
            <Messenger />
          </div>
          <div className="icons relative h-10 w-10 rounded-full flex items-center justify-center mr-2 bg-third cursor-pointer hover:bg-[#dadce0] transition-all">
            <Notifications />
            <div className="absolute my-auto text-white text-[13px] bg-red-500 top-[-6px] right-[-5px] rounded-full py-[1px] px-[6px]">
              5
            </div>
          </div>
          <div className="icons relative h-10 w-10 rounded-full flex items-center justify-center mr-2 bg-third cursor-pointer hover:bg-[#dadce0] transition-all">
            <ArrowDown />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
