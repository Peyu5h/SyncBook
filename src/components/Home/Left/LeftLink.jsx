export default function LeftLink({ img, text, notification }) {
  return (
    <div
      style={{ zIndex: 1 }}
      className="left_link z-1 flex items-center px-[5px] py-[10px] rounded-lg cursor-pointer font-medium mb-[2px] hover:bg-[#f0f2f6]  hover:duration-200 transition "
    >
      <img
        className="w-[36px] h-[36px] rounded-full mr-[11px]"
        src={`../../../left/${img}.png`}
        alt=""
      />
      {notification !== undefined ? (
        <div className="col ml-[2px] transform translate-y-[-2px]">
          <div className="col_1 transform translate-y-[-1px]">{text}</div>
          <div className="col_2 relative text-xs text-blue font-normal ml-[9px] mt[2px]">
            <div className="w-[6px] h-[6px] bg-blue-500 rounded-full absolute left-[-8px] bottom-[3px] "></div>
            {notification}
          </div>
        </div>
      ) : (
        <span className="mb-[4px] mr-[1px]">{text}</span>
      )}
    </div>
  );
}
