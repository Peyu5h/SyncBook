const DisplayAccessibility = ({ setVisible }) => {
  return (
    <div className="absolute_wrap py-[0.3rem] absolute top-0 bottom-0 left-0 right-0 w-[360px] shadow-lg h-fit rounded-lg bg-primary p-[10px]">
      <div className="absolte_wrap_header flex items-center gap-[10px] font-bold text-2xl">
        <div
          onClick={() => setVisible(0)}
          className="circle rounded-full hover:bg-[#f0f2f6] hover:duration-200 w-[28px] h-[28px] flex items-center justify-center p-1 "
        >
          <i className="arrow_back_icon"></i>
        </div>
        Display & accessibilty
      </div>
      <div className=" relative flex items-center mt-[5px] p-[7px]  text-sm rounded-xl cursor-default  ">
        <div className="small_circle cursor-default  ">
          <i className="dark_filled_icon"></i>
        </div>
        <div className="flex flex-col">
          <span className=" font-semibold">Dark Mode</span>
          <span className="text-xs text-third">
            Adjust the appearance of Linkbook
          </span>
        </div>
      </div>
      <label
        htmlFor="darkOff"
        className="flex items-center justify-between ml-[50px] font-semibold cursor-pointer rounded-lg  h-10 px-2 hover:bg-[#f0f2f6] hover:duration-200 "
      >
        <span>Off</span>
        <input
          className="w-[20px] h-[20px]"
          type="radio"
          name="dark"
          id="darkOff"
        />
      </label>

      <label
        htmlFor="darkOn"
        className="flex items-center justify-between ml-[50px] font-semibold cursor-pointer rounded-lg h-10 px-2 hover:bg-[#f0f2f6] hover:duration-200"
      >
        <span>On</span>
        <input
          className="w-[20px] h-[20px]"
          type="radio"
          name="dark"
          id="darkOn"
        />
      </label>

      <div className=" relative flex items-center mt-[5px] p-[7px]  text-sm rounded-xl cursor-default  ">
        <div className="small_circle cursor-default w-[50px]  ">
          <i className="activity_log_icon"></i>
        </div>
        <div className="flex flex-col">
          <span className=" font-semibold">Compact Mode</span>
          <span className="text-xs text-third">
            Make your font size smaller so that more content can fit on the
            screen.
          </span>
        </div>
      </div>
      <label
        htmlFor="compactOff"
        className="flex items-center justify-between ml-[50px] font-semibold cursor-pointer rounded-lg  h-10 px-2 hover:bg-[#f0f2f6] hover:duration-200 "
      >
        <span>Off</span>
        <input
          className="w-[20px] h-[20px]"
          type="radio"
          name="compact"
          id="compactOff"
        />
      </label>

      <label
        htmlFor="compactOn"
        className="flex items-center justify-between ml-[50px] font-semibold cursor-pointer rounded-lg h-10 px-2 hover:bg-[#f0f2f6] hover:duration-200"
      >
        <span>On</span>
        <input
          className="w-[20px] h-[20px]"
          type="radio"
          name="compact"
          id="compactOn"
        />
      </label>

      <div className="menu_item">
        <div className="small_circle">
          <i className="keyboard_icon"></i>
        </div>
        <span>Keyboard</span>
        <div className="right_arrow absolute top-1/2 right-[10px] transform translate-y-[-50%]">
          <i className="right_icon"></i>
        </div>
      </div>
    </div>
  );
};

export default DisplayAccessibility;
