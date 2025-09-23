const UserProfileCard = ({ data }) => {
  // console.log(data);
  return (
    <>
      <div
        className="mx-auto mt-5 max-w-6xl px-4 border rounded-lg border-zinc-300 
                 gap-5 p-5 hover:shadow-md transition-shadow
                 md:flex md:flex-col lg:grid lg:grid-cols-[96px_minmax(0,1fr)_120px]"
      >
        <div
          className="w-24 h-24 rounded-full bg-zinc-800 
                  overflow-hidden shrink-0 place-self-center md:place-self-start"
        >
          <img src={data.profile_image_url} alt="" className="rounded-full" />
        </div>

        <div className="user-details flex flex-col justify-center">
          <p className="text-lg font-semibold">{data.username}</p>

          <div className="flex text-xs items-center mb-2">
            <p>{data.location}</p>
            {/* <p className="bg-black text-white rounded-full pl-2 pr-2 pt-1 pb-1">
              Verified Seller
            </p> */}
            {/* <p>⭐ 4.7 (127 reviews)</p> */}
          </div>
          <p className="text-zinc-600 mb-2 italic">
            Member Since {data.created_at.slice(0, 4)}
          </p>
          <div>{data.bio === "no bio provided" ? "" : data.bio}</div>
        </div>
        <button className="bg-black text-white h-10 rounded-lg text-sm relative top-1 transition-colors duration-300 hover:bg-zinc-500">
          Message
        </button>
      </div>
    </>
  );
};

export default UserProfileCard;
