import React from "react";
import { Feeling, LiveVideo, Photo } from "../../svg";

const CreatePost = ({ user }) => {
  return (
    <div>
      <div className="create_post bg-primary rounded-[10px] shadow-md mt-[1.1rem] cursor-pointer">
        <div className="header flex gap-[8px] items-center pt-[10px] pr-[17px] pb-[5px] pl-[15px] ">
          <img
            className="h-12 w-12 rounded-full"
            src={user.picture}
            alt="profile_pic"
          />
          <div className="openPost h-10 flex-1 rounded-full text-md bg-forth text-secondary flex items-center pl-[10px]">
            What&apos;s on your mind, {user?.first_name}?
          </div>
        </div>
        <div className="splitter h-[1px] w-[95%] bg-third my-[7px] mx-[10px]"></div>
        <div className="createPost_body">
          <div className="create_icon">
            <LiveVideo color="#f3425f" />
            Live Video
          </div>
          <div className="create_icon">
            <Photo color="#4bbf67" />
            Photo/Video
          </div>
          <div className="create_icon">
            <Feeling color="#f7b928" />
            Feeling/Activity
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
