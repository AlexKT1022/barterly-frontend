const UserProfileStats = ({ profileStats }) => {
  // const totalItems = profileStats.userPosts.total;
  // const mePosts = profileStats.userPosts.posts;

  const openPosts = (posts) => {
    let total = 0;
    posts.map((post) => {
      if (post.status === "open" || post.status === "pending") {
        total++;
      }
    });
    return total;
  };

  // const completedPosts = (posts) => {
  //   let total = 0;
  //   posts.map((post) => {
  //     if (post.status === "closed") {
  //       total++;
  //     }
  //   });
  //   return total;
  // };

  return (
    <>
      <div className="flex mt-5 mb-5 gap-5 justify-center">
        <div className="items-listed border rounded-lg border-zinc-300 w-60 h-30 p-5">
          <p className="text-sm font-semibold mb-5">Open Items</p>
          <p className="text-xl font-bold"></p>
        </div>
        <div className="items-traded items-listed border rounded-lg border-zinc-300 w-60 h-30 p-5">
          <p className="text-sm font-semibold mb-5">Items Traded</p>
          <p className="text-xl font-bold"></p>
        </div>
        <div className="total-trades items-listed border rounded-lg border-zinc-300 w-60 h-30 p-5">
          <p className="text-sm font-semibold mb-5">Total Items Listed</p>
          <p className="text-xl font-bold">
            {/* {totalItems >= 1 ? totalItems : 0} */}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserProfileStats;
