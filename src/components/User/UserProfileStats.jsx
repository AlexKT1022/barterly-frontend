const UserProfileStats = ({ data }) => {
  const totalItems = data.posts.length;
  const userPosts = data.posts;

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
      <div className="flex mt-5 mb-5 gap-5 justify-center">
        <div className="flex flex-col h-20 w-24 md:h-28 md:w-40 border border-zinc-300 rounded-md justify-evenly pl-2 md:pl-3">
          <p className="text-sm font-semibold">Open Items</p>
          <p className="text-xl font-bold">{openPosts(userPosts)}</p>
        </div>
        <div className="flex flex-col h-20 w-24 md:h-28 md:w-40 border border-zinc-300 rounded-md justify-evenly pl-2 md:pl-3">
          <p className="text-sm font-semibold">Items Traded</p>
          <p className="text-xl font-bold">{completedPosts(userPosts)}</p>
        </div>
        <div className="flex flex-col h-20 w-24 md:h-28 md:w-40 border border-zinc-300 rounded-md justify-evenly pl-2 md:pl-3">
          <p className="text-sm font-semibold">Total Items Listed</p>
          <p className="text-xl font-bold">
            {totalItems >= 1 ? totalItems : 0}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserProfileStats;
