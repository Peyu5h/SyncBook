import React, { useState } from "react";
import { Feeling, LiveVideo, Photo } from "../../svg";
import { useAtom } from "jotai";
import { menuAtom } from "../../reducer/atom";

const CreatePost = ({ user }) => {
  const [open, setOpen] = useAtom(menuAtom);

  return (
    <div>
      <div className="create_post bg-primary rounded-[10px] shadow-md mt-[1.1rem] cursor-pointer pb-2">
        <div className="header flex gap-[8px] items-center pt-[10px] pr-[17px] pb-[5px] pl-[15px] ">
          <img
            className="h-12 w-12 rounded-full"
            src={user.picture}
            alt="profile_pic"
          />
          <div
            onClick={() => setOpen(!open)}
            className="openPost cursor-pointer h-10 flex-1 rounded-full text-md bg-forth hover:bg-third text-secondary flex items-center pl-[10px]"
          >
            What&apos;s on your mind, {user?.first_name}?
          </div>
        </div>
        <div className="splitter h-[1px] w-[95%] bg-third my-[7px] mx-[10px] cursor-default"></div>
        <div className="createPost_body px-[10px] grid grid-cols-3">
          <div className="create_icon flex gap-x-2 hover:bg-[#f0f2f6] py-2  items-center justify-center rounded-lg">
            <LiveVideo color="#f3425f" />
            Live Video
          </div>
          <div className="create_icon flex gap-x-2 hover:bg-[#f0f2f6]  py-2 items-center justify-center rounded-lg ">
            <Photo color="#4bbf67" />
            Photo/Video
          </div>
          <div className="create_icon flex gap-x-2 hover:bg-[#f0f2f6]  py-2 items-center justify-center rounded-lg">
            <Feeling color="#f7b928" />
            Feeling
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
