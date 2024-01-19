import { IoIosExpand } from "react-icons/io";
import { Search } from "../../../svg";

function trimStringWithEllipsis(inputString) {
  const maxLength = 35;

  if (inputString.length <= maxLength) {
    return inputString;
  }

  const trimmedString = inputString.substring(0, maxLength).trim();
  const trimmedStringWithEllipsis = trimmedString + "...";

  return trimmedStringWithEllipsis;
}

const MessengerMenu = () => {
  const originalString =
    "Lor emsipsumu rssdfsdssdasdasf sdfsdgdfgdfgd fsdsadipisicinita";

  return (
    <div className="menu py-[0.3rem] absolute top-[115%] right-0 w-[360px] rounded-lg bg-primary shadow-md z-999 select-none p-[10px]">
      <div className="Container"></div>
      <div className="heading  flex justify-between items-center px-2">
        <div className="h1 text-2xl font-bold font-sans my-2 mb-2">Chats</div>
        <div className="expand mr-2  text-xl cursor-pointer">
          <IoIosExpand />
        </div>
      </div>

      <div className="search my-2">
        <div className="search flex items-center gap-2 pt-[9px] pr-[44px] pb-[9px] pl-[12px]  rounded-full bg-forth ">
          <Search />
          <input
            type="text"
            placeholder="Search Messenger"
            className="hide_mobo outline-none pl-1 border-none bg-hover text-sm font-seg placeholder:translate-y-[-1px] placeholder-[#65676b]"
          />
        </div>
      </div>

      <div className="notification_container flex flex-col gap-y-2 my-2">
        {/* ======================================================================== */}
        <div className="user flex gap-x-3 rounded-xl px-[6px] py-[6px] cursor-pointer hover:bg-hover">
          <div className="picture w-12 ">
            <img
              className="pic w-12 h-12 rounded-full object-cover"
              src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"
              alt="userPicture"
            />
          </div>
          <div className="info text-xs">
            <div className="name text-sm font-medium">Arya Jagtap</div>
            <div className="message text flex gap-x-1">
              <div className="message-wrapper">
                {trimStringWithEllipsis(originalString)}
              </div>
              <div className="time flex ">
                <span>- </span>
                <span className="text-[10px]">12 min</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================================== */}
      </div>
    </div>
  );
};

export default MessengerMenu;
