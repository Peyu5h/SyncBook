import React from "react";

const Contacts = ({ user }) => {
  return (
    <div className="contact flex items-center gap-[12px] text-sm p-[5px] rounded-lg cursor-pointer text-primary hover:bg-third transition-all duration-300 ">
      <div className="contact_img">
        <img
          className="w-[36px] h-[36px] rounded-full object-cover"
          src={user?.picture}
          alt=""
        />
      </div>
      <span className="transform translate-y-[-4px]">
        {user?.first_name} {user?.last_name}
      </span>
    </div>
  );
};

export default Contacts;
