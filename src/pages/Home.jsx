import { useSelector } from "react-redux";
import CreatePost from "../components/CreatePost/CreatePost";
import Header from "../components/Header/Header";
import Left from "../components/Home/Left/Left";
import Right from "../components/Home/Right/Right";
import Stories from "../components/Home/Story/Stories";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMdPhotos } from "react-icons/io";

const Home = () => {
  const user = useSelector((state) => state.user);
  const [createPost, setCreatePost] = useState(false);

  return (
    <>
      <div className="overflow-hidden">
        {createPost && (
          <div
            className="fixed top-0 left-0  h-screen  bg-white/50  w-screen  text-black flex items-center justify-center "
            style={{ zIndex: 999 }}
          >
            <div className="h-[65vh] w-[60vw] rounded-lg shadow-lg  bg-white  ">
              <div className="heading flex justify-between  mx-4 h-[8vh] items-center">
                <div className="nothing"></div>
                <div className="text-xl font-semibold ">Create post</div>
                <div
                  onClick={() => setCreatePost(!createPost)}
                  className="Cross bg-[#f0f2f6] rounded-full p-2 cursor-pointer hover:bg-third duration-200 transition-all"
                >
                  <RxCross2 className="text-[24px] text-gray-600 " />
                </div>
              </div>

              <div className="splitter w-screen h-[1px] bg-third"></div>
              <div className="Container flex  h-[57vh] ">
                {/* ===================== LEFT ======================= */}
                <div className="add_photo group cursor-pointer duration-300 bg-lightThird w-[50%] hover:bg-third  flex items-center justify-center">
                  <div className="add flex flex-col items-center">
                    <IoMdPhotos className="text-[60px] rounded-full p-3 text-gray-500 bg-zinc-300" />
                    <div className="text-md font-semibold">
                      Add photos/videos
                    </div>
                    <div className="text-sm text-gray-600">
                      or drag and drop
                    </div>
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
                      <div className="text-md font-medium">
                        {user.first_name} {user.last_name}
                      </div>
                    </div>
                  </div>

                  <div className="caption_form items-start justify-start text-start">
                    <input
                      type="text"
                      placeholder="Write a caption...."
                      className="w-[28vw] pb-28"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="min-h-screen bg-secondary flex z-1  "
        style={{ zIndex: 1 }}
      >
        <Header />
        <Left className=" z-10" />
        <div className=" mt-[75px] mx-auto z-0">
          <div>
            <Stories />
            <CreatePost
              createPost={createPost}
              setCreatePost={setCreatePost}
              user={user}
            />
          </div>
        </div>
        <Right className=" z-10" />
      </div>
    </>
  );
};

export default Home;
