const SettingPrivacy = ({ setVisible }) => {
  return (
    <div className="absolute_wrap py-[0.3rem] absolute top-0 bottom-0 left-0 right-0 w-[360px] shadow-lg h-fit rounded-lg bg-primary select-none p-[10px]">
      <div className="absolte_wrap_header flex items-center gap-[10px] font-bold text-2xl">
        <div
          onClick={() => setVisible(0)}
          className="circle rounded-full hover:bg-[#f0f2f6] hover:duration-200 w-[28px] h-[28px] flex items-center justify-center p-1 "
        >
          <i className="arrow_back_icon"></i>
        </div>
        Settings & privacy
      </div>
      <div className="menu_item   ">
        <div className="small_circle">
          <i className="settings_filled_icon"></i>
        </div>
        <span>Settings</span>
      </div>

      <div className="menu_item   ">
        <div className="small_circle">
          <i className="privacy_checkup_icon"></i>
        </div>
        <span>Privacy Checkup</span>
      </div>

      <div className="menu_item   ">
        <div className="small_circle">
          <i className="privacy_shortcuts_icon"></i>
        </div>
        <span>Privacy Shortcuts</span>
      </div>

      <div className="menu_item   ">
        <div className="small_circle">
          <i className="activity_log_icon"></i>
        </div>
        <span>Acivity log</span>
      </div>

      <div className="menu_item   ">
        <div className="small_circle">
          <i className="news_icon"></i>
        </div>
        <span>News feed</span>
      </div>

      <div className="menu_item   ">
        <div className="small_circle">
          <i className="language_icon"></i>
        </div>
        <span>Language</span>
      </div>
    </div>
  );
};

export default SettingPrivacy;
