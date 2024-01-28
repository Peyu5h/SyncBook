import { useSelector } from "react-redux";
import CreatePost from "../components/CreatePost/CreatePost";
import Header from "../components/Header/Header";
import Left from "../components/Home/Left/Left";
import Right from "../components/Home/Right/Right";
import Stories from "../components/Home/Story/Stories";

const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="min-h-screen bg-secondary flex  ">
      <Header />
      <Left className="flex-1 z-10" />
      <div className=" mt-[75px] mx-auto z-0">
        <div>
          <Stories />
          <CreatePost user={user} />
        </div>
      </div>
      <Right className=" z-10" />
    </div>
  );
};

export default Home;
