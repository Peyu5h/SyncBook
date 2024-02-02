import { stories } from "../../../data/home";
import { ArrowRight, Plus } from "../../../svg";
import StoryMap from "./StoryMap";

const Stories = () => {
  return (
    <div
      className="stories relative grid gap-[10px] py-[6px] z-0 "
      style={{ gridTemplateColumns: "repeat(6, 95px)" }}
    >
      <div className="createStories relative h-[190px] w-full rounded-[10px] overflow-hidden cursor-pointer shadow-md">
        <img
          className="absolute h-[75%] w-full object-cover "
          src="../../images/default_pic.png"
          alt=""
        />
        <div className="plus absolute left-[50%] top-[65%] w-10 h-10 rounded-full transform translate-x-[-50%] flex items-center justify-center bg-blue-500 border-[4px] border-white ">
          <Plus color="#fff" />
        </div>
        <div className="createStories_text absolute text-black left-[20%] top-[87%] text-xs">
          ADD STORY
        </div>
      </div>
      {stories.map((story, index) => (
        <StoryMap key={index} story={story} />
      ))}
      <div className="arrow w-10 h-10 rounded-full bg-white flex items-center justify-center absolute top-[50%] right-[-5px] transform translate-y-[-50%] col-start-6 col-end-7">
        <ArrowRight color="#65676b" />
      </div>
    </div>
  );
};

export default Stories;
