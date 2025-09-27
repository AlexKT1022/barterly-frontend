const ProfileCard = ({ meProfileData }) => {
  const normalizeDate = (date) => {
    const dateChange = new Date(date);
    const year = dateChange.getFullYear();
    return year;
  };

  return (
    <>
      <div
        className="mt-5 md:w-2xl lg:w-6xl px-4 border rounded-lg border-zinc-300 
                 gap-5 p-5 hover:shadow-md transition-shadow grid
                 md:flex md:flex-col lg:grid lg:grid-cols-[96px_minmax(0,1fr)_120px]"
      >
        <div
          className="profile-photo w-24 h-24 rounded-full bg-zinc-800 
                  overflow-hidden shrink-0 place-self-center md:place-self-start"
        >
          <img
            src={meProfileData.profile_image_url}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="user-details flex flex-col justify-center text-center md:text-left">
          <p className="text-lg font-semibold">{meProfileData.username}</p>
          <p className="text-xs items-center">{meProfileData.location}</p>
          <p className="text-zinc-600 mb-2 italic">
            Member Since {normalizeDate(meProfileData.created_at) || "Unknown"}
          </p>
        </div>
        <button className="bg-black text-white h-10 rounded-lg text-sm relative top-1 transition-colors duration-300 hover:bg-zinc-500">
          Edit Profile
        </button>
      </div>
    </>
  );
};

export default ProfileCard;
