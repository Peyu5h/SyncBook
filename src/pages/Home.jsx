import Header from "../components/Header/Header";
import Left from "../components/Home/Left/Left";
import Right from "../components/Home/Right/Right";
import Stories from "../components/Home/Story/Stories";

const Home = () => {
  return (
    <div className="min-h-screen bg-secondary flex">
      <Header />
      <Left className="flex-1" />
      <div className="flex-1 mt-[75px] ml-[31.8vw]">
        <Stories />
      </div>
      <Right className="flex-1" />
    </div>
  );
};

export default Home;
