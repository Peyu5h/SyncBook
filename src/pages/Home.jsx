import { useSelector } from "react-redux";
import CreatePost from "../components/CreatePost/CreatePost";
import Header from "../components/Header/Header";
import Left from "../components/Home/Left/Left";
import Right from "../components/Home/Right/Right";
import Stories from "../components/Home/Story/Stories";
import CreatePostPopup from "../components/CreatePost/CreatePostPopup";
import { useAtom } from "jotai";
import { menuAtom } from "../reducer/atom";
import UserPost from "../components/UserPost/UserPost";

const Home = () => {
  const user = useSelector((state) => state.user);
  const [open] = useAtom(menuAtom);

  return (
    <>
      <div className="overflow-hidden">
        {open && <CreatePostPopup user={user} />}
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
            <CreatePost user={user} />
            <UserPost user={user} />
          </div>
        </div>
        <Right className=" z-10" />
      </div>
    </>
  );
};

export default Home;
