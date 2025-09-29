const UsersStats = ({ stats }) => {
  const allPosts = stats.allPosts;
  //   console.log(allPosts);

  // Checks for all posts open & pending
  const activePosts = (posts) => {
    let count = 0;
    posts.map((post) => {
      if (post.status === "open" || post.status === "pending") {
        count++;
      }
    });
    return count;
  };

  const monthlyPosts = (posts) => {
    let count = 0;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    posts.map((post) => {
      const normalizeDate = new Date(post.createdAt);
      const postYear = normalizeDate.getFullYear();
      const postMonth = normalizeDate.getMonth();

      if (postYear === currentYear && postMonth === currentMonth) {
        count++;
      }
    });
    return count;
  };

  return (
    <>
      <div className="mt-3 flex justify-center gap-5">
        <div className="flex flex-col h-20 w-24 md:h-28 md:w-40 border border-zinc-300 rounded-md justify-evenly pl-2 md:pl-3">
          <p className="text-sm">Total Users</p>
          <p className="font-semibold text-xl">{stats.total}</p>
        </div>

        <div className="flex flex-col h-20 w-24 md:h-28 md:w-40 border border-zinc-300 rounded-md justify-evenly pl-2 md:pl-3">
          <p className="text-sm">Active Trades</p>
          <p className="font-semibold text-xl">{activePosts(allPosts)}</p>
        </div>

        {/* Need to figure out how the below would work */}
        <div className="flex flex-col h-20 w-24 md:h-28 md:w-40 border border-zinc-300 rounded-md justify-evenly pl-2 md:pl-3">
          <p className="text-sm">Posts This Month</p>
          <p className="font-semibold text-xl">{monthlyPosts(allPosts)}</p>
        </div>
      </div>
    </>
  );
};

export default UsersStats;
