import { RxCross2 } from "react-icons/rx";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { useAtom } from "jotai";
import { menuAtom } from "../../reducer/atom";
import { CiCrop } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";

const CreatePost = ({ user }) => {
  const [open, setOpen] = useAtom(menuAtom);

  return (
    <div>
      <div
        className="fixed top-0 left-0  h-screen  bg-white/50  w-screen  text-black flex items-center justify-center "
        style={{ zIndex: 999 }}
      >
        <div className="h-[65vh] w-[50vw] rounded-lg shadow-lg  bg-white  ">
          <div className="heading flex justify-between  mx-4 h-[8vh] items-center">
            <div className="nothing"></div>
            <div className="text-xl font-semibold ">Create post</div>
            <div
              onClick={() => setOpen(!open)}
              className="Cross bg-[#f0f2f6] rounded-full p-2 cursor-pointer hover:bg-third duration-200 transition-all"
            >
              <RxCross2 className="text-[24px] text-gray-600 " />
            </div>
          </div>

          <div className="splitter w-screen h-[1px] bg-third"></div>
          <div className="Container flex  h-[57vh] w-full ">
            {/* ===================== LEFT ======================= */}
            <div className="add_photo  group relative cursor-pointer duration-300 bg-lightThird w-[30vw] hover:bg-third  flex items-center justify-center">
              <div className="add flex flex-col items-center">
                <IoMdPhotos className="text-[60px] rounded-full p-3 text-gray-500 bg-zinc-300" />
                <div className="text-md font-semibold">Add photos/videos</div>
                <div className="text-sm text-gray-600">or drag and drop</div>
              </div>
              <div className="crop absolute left-0 bottom-0 p-4 z-99 cursor-not-allowed rounded-full">
                <CiCrop className="text-2xl" />
              </div>
            </div>
            {/* ===================== LEFT ======================= */}

            <div className="Post_form p-4">
              <div className="user">
                <div className="flex items-center gap-2">
                  <img
                    src={user.picture}
                    alt="profile_pic"
                    className="h-8 w-8 rounded-full"
                  />
                  <div className="text-sm font-medium">
                    {user.first_name} {user.last_name}
                  </div>
                </div>
              </div>

              <div className="caption_form items-start justify-start text-start">
                <textarea
                  id="message"
                  rows="4"
                  className="block my-4  w-[20vw] text-md text-gray-900 rounded-lg outline-none border p-2 placeholder-gray-400 scrollbar "
                  style={{ resize: "none" }}
                  placeholder="Write your thoughts here..."
                ></textarea>
                <div className="footer flex justify-between items-center">
                  <div className="emoji text-darkThird p-2 rounded-full duration-300 cursor-pointer hover:bg-lightThird">
                    <BsEmojiSmile />
                  </div>
                  <div className="span text-xs">0/2000</div>
                </div>

                <div className="bottom">
                  <div className="addLocation px-2 my-3">
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        className="w-full border-none outline-none"
                        placeholder="Add Location"
                      />
                      <div className="tag text-darkThird">
                        <MdLocationOn className="text-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-24">
                    <div className=""></div>
                    <div className="post text-sm font-semibold text-white bg-primary rounded-full px-4 py-2 cursor-pointer hover:bg-blue-600 bg-[#3b82f6] duration-300">
                      Post
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
