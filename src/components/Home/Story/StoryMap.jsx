const StoryMap = ({ story }) => {
  return (
    <div>
      <div className="story cursor-pointer relative h-[190px] w-full rounded-[10px] overflow-hidden shadow-md ">
        <img
          className="w-full h-full object-cover transition-all duration-200 hover:scale-110 "
          src={story.image}
          alt="profile_story"
        />
        <div className="story_profile absolute h-10 w-10 left-0 top-0  rounded-full overflow-hidden border-[3px]  ">
          <img
            className="h-10 w-10 object-cover rounded-full"
            src={story.profile_picture}
            alt="profile_pic"
          />
        </div>
        <div className="story_name absolute left-[50%] transform translate-x-[-50%] bottom-[10px] break-words text-white text-sm pl-[10px] w-[100px]">
          {story.profile_name}
        </div>
      </div>
    </div>
  );
};

export default StoryMap;
