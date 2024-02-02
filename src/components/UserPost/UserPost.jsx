import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { BiSolidComment } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { GoBookmark } from "react-icons/go";
import { GoBookmarkFill } from "react-icons/go";

const UserPost = ({ user }) => {
  return (
    <div>
      <div className=" relative create_post bg-primary rounded-[10px] shadow-md mt-[1.1rem]  pb-2 w-[40.5vw]">
        <div className="header flex gap-[8px] items-center pt-[10px] pr-[17px] pb-[5px] pl-[15px] flex-wrap ">
          <img
            className="h-8 w-8 rounded-full"
            src={user.picture}
            alt="profile_pic"
          />
          <div className="name flex items-center gap-x-2">
            <div className="time cursor-pointer ">
              {user.first_name}&nbsp;
              {user.last_name}
            </div>

            <div className="dot h-1 w-1 bg-gray-400 rounded-full"></div>
            <div className="postTime text-sm ">23h</div>
          </div>
        </div>
        <div className="caption text-sm mx-4 mb-4 flex flex-wrap overflow-hidden">
          <div className="whitespace-normal">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            acdfvf awsfsdfs sdf sd f sf sdf s df dsf sd
          </div>
        </div>
        {/* =====================  POST ====================== */}
        <div className="actualPost w-full h-full flex items-center justify-center">
          <img className="w-full h-full" src={user.picture} alt="" />
        </div>
        {/* ================================================== */}

        <div className=" icons my-2 mx-6 mt-6 text-darkThird flex justify-between font-extralight">
          <div className="left">
            <div className="flex items-center gap-x-6 text-3xl ">
              <div className="like flex items-center cursor-pointer">
                <BiLike />
              </div>
              <div className="comment flex items-center cursor-pointer">
                <BiComment />
              </div>
              <div className="share flex items-center cursor-pointer">
                <IoIosSend />
              </div>
            </div>
          </div>

          <div className="right">
            <div className="flex items-center gap-x-6 text-3xl ">
              <div className="save flex items-center cursor-pointer">
                <GoBookmark />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
