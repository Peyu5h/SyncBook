const Notification = () => {
  return (
    <div>
      <div className="menu py-[0.3rem] absolute top-[115%] right-0 w-[360px] rounded-lg bg-primary shadow-md z-999 select-none p-[10px]">
        <div className="heading">
          <div className="h1 text-2xl font-bold font-sans my-2 mb-4">
            Notifications
          </div>
          <div className="notification_container flex flex-col gap-y-2">
            {/* ======================================================================== */}
            <div className="user flex gap-x-3 rounded-xl px-[6px] py-[6px] cursor-pointer hover:bg-hover">
              <div className="picture">
                <img
                  className="pic w-14 h-14 rounded-full"
                  src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"
                  alt="userPicture"
                />
              </div>
              <div className="info text-xs">
                <div className="name text-sm font-medium">Arya Jagtap</div>
                <div className="message">Sent You a friend request</div>
                <div className="time">23 hours ago</div>
              </div>
            </div>
            {/* ======================================================================== */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
