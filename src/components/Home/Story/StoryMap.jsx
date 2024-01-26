const StoryMap = ({ story }) => {
  return (
    <div>
      <div className="story cursor-pointer relative h-[190px] w-full rounded-[10px] overflow-hidden shadow-md ">
        <img
          className="w-full h-full object-cover transition-all duration-200 hover:scale-110 "
          src={story.image}
          alt="profile_story"
        />
        <div className="story_profile ">
          <img
            className="w-full h-full object-cover"
            src={story.profile_picture}
            alt="profile_pic"
          />
        </div>
        <div className="story_name">{story.profile_name}</div>
      </div>
    </div>
  );
};

export default StoryMap;
