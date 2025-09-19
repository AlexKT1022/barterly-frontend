const ProfileStats = ({ profileStats }) => {
  const itemsListed = profileStats.total;
  return (
    <>
      <div className="flex mt-5 gap-5 justify-center">
        <div className="items-listed border rounded-lg border-zinc-300 w-60 h-30 p-5">
          <p className="text-sm font-semibold mb-5">Items Listed</p>
          <p className="text-xl font-bold">
            {itemsListed >= 1 ? itemsListed : 0}
          </p>
        </div>
        <div className="items-traded items-listed border rounded-lg border-zinc-300 w-60 h-30 p-5">
          <p className="text-sm font-semibold mb-5">Items Traded</p>
          <p className="text-xl font-bold">0</p>
        </div>
        <div className="total-trades items-listed border rounded-lg border-zinc-300 w-60 h-30 p-5">
          <p className="text-sm font-semibold mb-5">Total Trades</p>
          <p className="text-xl font-bold">0</p>
        </div>
      </div>
    </>
  );
};

export default ProfileStats;
