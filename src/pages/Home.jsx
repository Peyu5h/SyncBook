import Header from "../components/Header/Header";
import Left from "../components/Home/Left/Left";
import Right from "../components/Home/Right/Right";
import Stories from "../components/Home/Story/Stories";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <Left />
      <div className="middle mt-[75px] ml-[31.8vw]">
        <Stories />
      </div>
      <Right />
    </div>
  );
};

export default Home;
