import { useSelector } from "react-redux";
import LeftLink from "./LeftLink";
import ShortCut from "./ShortCut";

const Left = () => {
  const { user } = useSelector((user) => ({ ...user }));

  return (
    <div
      style={{ zIndex: 1 }}
      className="fixed z-1 mt-[72px] max-h-screen w-[300px] overflow-y-auto text-primary px-[15px] text-sm scrollbar"
    >
      <div className="left_link flex items-center px-[5px] py-[10px] rounded-lg cursor-pointer font-medium mb-[2px] hover:bg-[#f0f2f6]  hover:duration-200 transition ">
        <img
          className="w-[36px] h-[36px] rounded-full mr-[11px]"
          src={user?.picture}
          alt=""
        />
        <span className="mb-[4px] mr-[1px]">
          {user?.first_name} {user?.last_name}
        </span>
      </div>
      <div className="All_Link">
        <LeftLink img={"friends"} text={"Find friends"} />
        <LeftLink img={"memories"} text={"Memories"} />
        <LeftLink img={"groups"} text={"Groups"} notification={"5 new"} />
        <LeftLink img={"watch"} text={"Watch"} notification={"9 new videos"} />
        <LeftLink img={"messenger"} text={"Messenger"} />
        <LeftLink img={"saved"} text={"Saved"} />
      </div>
      <div className="splitter h-[1.6px] bg-third ml-[6px] mt-[9px] mr-[2px]"></div>
      <div className="shortcut group flex items-center justify-between">
        <div className="heading font-semibold text-secondary pt-[13px] pr-[10px] pb-[11px] pl-[8px]">
          Your Shortcuts
        </div>
        <div className="edit font-sm text-blue hidden group-hover:block cursor-pointer group-hover:duration-300 mr-2">
          Edit
        </div>
      </div>
      <div className="shortcut_list">
        <ShortCut
          link="https:www.youtube.com"
          img="../../images/ytb.png"
          name="Youtube"
        />
        <ShortCut
          link="https:www.instagram.com"
          img="../../images/insta.png"
          name="Instagram"
        />
      </div>
    </div>
  );
};

export default Left;
