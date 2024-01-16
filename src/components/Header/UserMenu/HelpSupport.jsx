const HelpSupport = ({ setVisible }) => {
  return (
    <div className="absolute_wrap py-[0.3rem] absolute top-0 bottom-0 left-0 right-0 w-[360px] shadow-lg h-fit rounded-lg bg-primary select-none p-[10px]">
      <div className="absolte_wrap_header flex items-center gap-[10px] font-bold text-2xl">
        <div
          onClick={() => setVisible(0)}
          className="circle rounded-full hover:bg-[#f0f2f6] hover:duration-200 w-[28px] h-[28px] flex items-center justify-center p-1 "
        >
          <i className="arrow_back_icon"></i>
        </div>
        Help & support
      </div>
      <div className="menu_item   ">
        <div className="small_circle">
          <i className="help_center_icon"></i>
        </div>
        <span>Help Center</span>
      </div>

      <div className="menu_item   ">
        <div className="small_circle">
          <i className="email_icon"></i>
        </div>
        <span>Support Inbox</span>
      </div>

      <div className="menu_item   ">
        <div className="small_circle">
          <i className="info_filled_icon"></i>
        </div>
        <span>Report a Problem</span>
      </div>
    </div>
  );
};

export default HelpSupport;
