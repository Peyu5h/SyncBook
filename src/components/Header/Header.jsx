import { Link } from "react-router-dom";
import {
  Logo,
  Search,
  HomeActive,
  Friends,
  Watch,
  Menu,
  Messenger,
  Notifications,
  ArrowDown,
  Home,
  FriendsActive,
} from "../../svg";
import { useRef, useState } from "react";
import { useAtom } from "jotai";
import { searchMenuAtom } from "../../lib/atom";

import { useSelector } from "react-redux";
import SearchMenu from "../SearchMenu";
import UserMenu from "./UserMenu/UserMenu";
import ClickOutside from "../../helpers/ClickOutside";
import Notification from "./Notification/Notification";
import MessengerMenu from "./Messenger/MessengerMenu";
import CreatePostMenu from "./CreatePost/CreatePostMenu";

const Header = () => {
  const { user } = useSelector((user) => ({ ...user }));
  const color = "#65676b";
  const [activeNav, setActiveNav] = useState("home");

  const [searchMenu, setSeachMenu] = useAtom(searchMenuAtom);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotificationMenu, setShowNotificationMenu] = useState(false);
  const [showMessengerMenu, setShowMessengerMenu] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);

  const userMenu = useRef(null);
  const notificationMenu = useRef(null);
  const messengerMenu = useRef(null);
  const createMenu = useRef(null);

  ClickOutside(userMenu, () => {
    setShowUserMenu(false);
  });

  ClickOutside(notificationMenu, () => {
    setShowNotificationMenu(false);
  });

  ClickOutside(messengerMenu, () => {
    setShowMessengerMenu(false);
  });

  ClickOutside(createMenu, () => {
    setShowCreateMenu(false);
  });

  return (
    <header style={{ zIndex: 999 }} className="select-none">
      <div className="fixed h-14 top-0 px-4 z-99 w-full shadow-md grid grid-cols-3 bg-primary text-primary ">
        {/* =====================================================  LEFT ================================================================ */}

        <div className="left  flex items-center gap-x-3 px-[5px] py-[0.7rem] ">
          <Link to="/">
            <div className="circle w-8 h-8 rounded-full cursor-pointer flex justify-center items-center ">
              <Logo />
            </div>
          </Link>
          <div
            onClick={() => setSeachMenu(true)}
            className="search flex items-center gap-2 p-[10px] lg:pr-8 rounded-full bg-forth "
          >
            <Search color={color} />
            <input
              type="text"
              placeholder="Search Facebook"
              className=" hidden lg:flex hide_mobo outline-none border-none bg-transparent text-sm font-seg placeholder:translate-y-[-1px] placeholder-[#65676b]"
            />
          </div>
        </div>
        {searchMenu && <SearchMenu className="z-999" />}

        {/* =====================================================  CENTER ================================================================ */}

        <div
          className={`center hidden xs:flex justify-center items-center gap-x-[12px] transform translate-x-[-3px] `}
        >
          <Link
            onClick={() => setActiveNav("home")}
            to="/"
            className={`md:flex  hidden relative items-center justify-center sm:w-28 w-12 h-10 cursor-pointer transform translate-x-[-2px] ${
              activeNav === "home"
                ? "border-b-[3.5px] border-blue hover:bg-transparent"
                : "border-b-[3.5px] border-b-transparent hover:bg-forth rounded-md"
            } px-[2.6rem]  py-6`}
          >
            {activeNav === "home" ? <HomeActive /> : <Home color={color} />}
          </Link>
          <Link
            onClick={() => setActiveNav("friends")}
            to="/"
            className={`flex mr-[5rem] xs:mr-0 relative items-center justify-center w-28 h-14 sm:h-10 cursor-pointer transform translate-x-[-2px] ${
              activeNav === "friends"
                ? "border-b-blue border-b-[0px] xs:border-b-[3.5px] hover:bg-transparent"
                : "border-b-[3.5px] border-b-transparent hover:bg-forth rounded-md"
            } px-[2.6rem] md:px-[1.6rem] xs:px-[1rem] py-6`}
          >
            {activeNav === "friends" ? (
              <FriendsActive />
            ) : (
              <Friends color={color} />
            )}
          </Link>
          <Link
            onClick={() => setActiveNav("watch")}
            to="/"
            className={`xs:flex hidden relative items-center justify-center w-28 h-10 cursor-pointer transform translate-x-[-2px] ${
              activeNav === "watch"
                ? "border-b-blue border-b-[3.5px]  hover:bg-transparent"
                : "border-b-[3.5px] border-b-transparent hover:bg-forth rounded-md"
            } px-[2.8rem] py-6`}
          >
            <div className="wrapper">
              <div className="notifcation absolute px-[5px] py-[1px] bg-red-500 rounded-full top-0 right-[1.9rem] text-white text-xs ">
                9+
              </div>
              {activeNav === "watch" ? (
                <Watch color={color} />
              ) : (
                <Watch color={color} />
              )}
            </div>
          </Link>
        </div>

        {/* =====================================================  RIGHT ================================================================ */}

        <div
          className={`right flex  absolute right-0 top-1/2 transform -translate-y-1/2`}
        >
          <div ref={createMenu}>
            <div
              onClick={() => setShowCreateMenu(!showCreateMenu)}
              className={`icons ${
                searchMenu ? "hidden" : "flex"
              } sm:flex hidden relative h-10 w-10 rounded-full  items-center justify-center mr-2 bg-third cursor-pointer hover:bg-[#dadce0] transition-all `}
            >
              <Menu />
            </div>
            {showCreateMenu && <CreatePostMenu user={user} />}
          </div>

          <div ref={messengerMenu}>
            <div
              onClick={() => setShowMessengerMenu(!showMessengerMenu)}
              className={`icons ${
                searchMenu ? "hidden" : "flex"
              } xss:flex  relative h-10 w-10 rounded-full  items-center justify-center mr-2 bg-third cursor-pointer hover:bg-[#dadce0] transition-all `}
            >
              <Messenger />
            </div>
            {showMessengerMenu && <MessengerMenu user={user} />}
          </div>

          <div ref={notificationMenu}>
            <div
              onClick={() => setShowNotificationMenu(!showNotificationMenu)}
              className={`icons ${
                searchMenu ? "hidden" : "flex"
              } xs:flex  relative h-10 w-10 rounded-full  items-center justify-center mr-2 bg-third cursor-pointer hover:bg-[#dadce0] transition-all `}
            >
              <Notifications />
              <div className="absolute  text-white text-[13px] bg-red-500 top-[-6px] right-[-5px] rounded-full py-[1px] px-[6px]">
                5
              </div>
            </div>
            {showNotificationMenu && <Notification user={user} />}
          </div>

          <div ref={userMenu}>
            <div
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="icons relative h-10 w-10 rounded-full flex items-center justify-center mr-2 bg-third cursor-pointer hover:bg-[#dadce0] transition-all"
            >
              <ArrowDown />
            </div>
            {showUserMenu && <UserMenu user={user} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
