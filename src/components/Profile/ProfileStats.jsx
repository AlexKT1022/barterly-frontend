const ProfileStats = ({ profileStats }) => {
  const totalItems = profileStats?.userPosts?.total ?? 0;
  const mePosts = profileStats?.userPosts?.posts ?? [];

  const openPosts = (posts) => {
    let total = 0;
    posts.map((post) => {
      if (post.status === "open" || post.status === "pending") {
        total++;
      }
    });
    return total;
  };

  const completedPosts = (posts) => {
    let total = 0;
    posts.map((post) => {
      if (post.status === "closed") {
        total++;
      }
    });
    return total;
  };

  return (
    <>
      <div className="md:w-3xl lg:w-6xl flex mt-5 gap-5 justify-center">
        <div className="flex flex-col h-20 w-24 md:h-28 md:w-40 border border-zinc-300 rounded-md justify-evenly pl-2 md:pl-3">
          <p className="text-sm font-semibold mb-5">Open Trades</p>
          <p className="text-xl font-bold">{openPosts(mePosts)}</p>
        </div>
        <div className="flex flex-col h-20 w-24 md:h-28 md:w-40 border border-zinc-300 rounded-md justify-evenly pl-2 md:pl-3">
          <p className="text-sm font-semibold mb-5">Items Traded</p>
          <p className="text-xl font-bold">{completedPosts(mePosts)}</p>
        </div>
        <div className="flex flex-col h-20 w-24 md:h-28 md:w-40 border border-zinc-300 rounded-md justify-evenly pl-2 md:pl-3">
          <p className="text-sm font-semibold mb-5">Total Trades Listed</p>
          <p className="text-xl font-bold">
            {totalItems >= 1 ? totalItems : 0}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileStats;
