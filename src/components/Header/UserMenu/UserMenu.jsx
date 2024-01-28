import { useState } from "react";
import { Link } from "react-router-dom";
import SettingPrivacy from "./SettingPrivacy";
import HelpSupport from "./HelpSupport";
import DisplayAccessibility from "./DisplayAccessibility";

const UserMenu = ({ user }) => {
  const [visible, setVisible] = useState(0);

  return (
    <div className="select-auto">
      <div className="menu py-[0.3rem] absolute top-[115%] right-0 w-[360px] rounded-lg bg-primary shadow-md z-999 select-none p-[10px]">
        {visible == 0 && (
          <div>
            <Link
              to="/profile"
              className="menu_header flex items-center p-[5px] rounded-lg gap-[10px]"
            >
              <img
                className="w-[60px] h-[60px] rounded-full object-cover"
                src={user?.picture}
                alt=""
              />
              <div className="menu_col flex flex-col justify-center ">
                <span className="font-semibold text-md ">
                  {user?.first_name} {user?.last_name}
                </span>
                <span className="text-sm">See your profile</span>
              </div>
            </Link>
            <div className="menu_splitter w-full h-[1px] bg-third mt-[5px]"></div>
            <div className="menu_main p-[10px] mt-[5px] flex items-center gap-[5px] cursor-pointer hover:bg-[#f0f2f6]   hover:duration-200 transition rounded-xl">
              <div className="small_circle">
                <i className="report_filled_icon"></i>
              </div>
              <div className="menu_col">
                <div className="menu_span1 text-sm">Give feedback</div>
                <div className="menu_span2 text-xs text-secondary">
                  Help us improve
                </div>
              </div>
            </div>
            <div className="menu_splitter w-full h-[1px] bg-third mt-[5px]"></div>
            <div
              onClick={() => setVisible(1)}
              className="menu_item cursor-pointer "
            >
              <div className="small_circle ">
                <i className="settings_filled_icon"></i>
              </div>
              <span>Settings & privacy</span>
              <div className="right_arrow absolute top-1/2 right-[10px] transform translate-y-[-50%] ">
                <i className="right_icon"></i>
              </div>
            </div>

            <div
              onClick={() => setVisible(2)}
              className="menu_item cursor-pointer  "
            >
              <div className="small_circle ">
                <i className="help_filled_icon"></i>
              </div>
              <span>Help & support</span>
              <div className="right_arrow absolute top-1/2 right-[10px] transform translate-y-[-50%]">
                <i className="right_icon"></i>
              </div>
            </div>

            <div
              onClick={() => setVisible(3)}
              className="menu_item cursor-pointer"
            >
              <div className="small_circle ">
                <i className="dark_filled_icon"></i>
              </div>
              <span>Display & accessibilty</span>
              <div className="right_arrow absolute top-1/2 right-[10px] transform translate-y-[-50%]">
                <i className="right_icon"></i>
              </div>
            </div>

            <div className="menu_item cursor-pointer">
              <div className="small_circle ">
                <i className="logout_filled_icon"></i>
              </div>
              <span>Logout</span>
            </div>
          </div>
        )}

        {visible === 1 && <SettingPrivacy setVisible={setVisible} />}
        {visible === 2 && <HelpSupport setVisible={setVisible} />}
        {visible === 3 && <DisplayAccessibility setVisible={setVisible} />}
      </div>
    </div>
  );
};

export default UserMenu;
