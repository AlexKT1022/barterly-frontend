const ProfileCard = () => {
  return (
    <>
      <div className="user-profile mx-auto mt-5 h-42 border rounded-lg border-zinc-300 grid grid-cols-[100px_minmax(900px,_1fr)_100px] gap-5 p-5">
        <div className="profile-photo w-24 h-24 rounded-full bg-zinc-800 justify-self-center self-center"></div>
        <div className="user-details flex flex-col justify-center">
          <p className="text-lg font-semibold">John Doe</p>
          <p className="text-zinc-600 mb-3">johndoe@example.com</p>
          <div className="flex text-xs items-center mb-2">
            <p className="bg-black text-white rounded-full pl-2 pr-2 pt-1 pb-1">
              Verified Seller
            </p>
            <p>⭐ 4.7 (127 reviews)</p>
          </div>
          <div>
            Experienced seller with a passion for tech and collectibles. Member
            since 2025. Fast shipping and excellent customer service.
          </div>
        </div>
        <button className="bg-black text-white h-10 rounded-lg text-sm relative top-1 transition-colors duration-300 hover:bg-zinc-500">
          Edit Profile
        </button>
      </div>
    </>
  );
};

export default ProfileCard;
