import { useSelector } from "react-redux";
import { Search } from "../../../svg";
import Contacts from "./Contacts";

const Right = () => {
  const { user } = useSelector((user) => ({ ...user }));
  const color = "#65676b";

  return (
    <div
      style={{ zIndex: 2 }}
      className="fixed z-2 left-[80.7vw] top-[72px] w-[18vw] h-screen overflow-y-hidden hover:overflow-y-auto scrollbar"
    >
      <div className="contact_wrap">
        <div className="header relative flex items-center justify-between pt-[12px] pb-[7px] pl-[10px] font-medium text-secondary">
          <div className="left">Contacts</div>
          <div className="right flex items-center">
            <div className=" contact_circle w-[36px] h-[36px] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#f0f2f6] transition-all duration-300">
              <Search color={color} />
            </div>
          </div>
        </div>
        <div className="contact_list p-[5px]">
          <Contacts user={user} />
        </div>
      </div>
    </div>
  );
};

export default Right;
