const ProfileCard = ({ meProfileData }) => {

  const created = meProfileData?.created_at?.slice(0, 4);
  return (
    <>
      <div
        className="mx-auto mt-5 max-w-6xl px-4 border rounded-lg border-zinc-300 
                 gap-5 p-5 hover:shadow-md transition-shadow
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

        <div className="user-details flex flex-col justify-center">
          <p className="text-lg font-semibold">{meProfileData.username}</p>

          <div className="flex text-xs items-center mb-2">
            <p>{meProfileData.location}</p>
            {/* <p className="bg-black text-white rounded-full pl-2 pr-2 pt-1 pb-1">
              Verified Seller
            </p> */}
            {/* <p>⭐ 4.7 (127 reviews)</p> */}
          </div>
          <p className="text-zinc-600 mb-2 italic">
            Member Since {meProfileData?.created_at?.slice?.(0, 4) || "Unknown"}
          </p>
          {/* <div>
            Experienced seller with a passion for tech and collectibles. Member
            since 2025. Fast shipping and excellent customer service.
          </div> */}
        </div>
        <button className="bg-black text-white h-10 rounded-lg text-sm relative top-1 transition-colors duration-300 hover:bg-zinc-500">
          Edit Profile
        </button>
      </div>
    </>
  );
};

export default ProfileCard;
