const RecentActivities = () => {
  return (
    <>
      <div className='flex flex-col mt-5 gap-5'>
        <div className='w-full h-24 border border-zinc-300 rounded-lg p-5 '>
          <div className='flex justify-between'>
            <p>Listed new product</p>
            <p className='text-zinc-500'>2 hours ago</p>
          </div>
          <p className='text-zinc-500'>MacBookPro</p>
        </div>

        <div className='w-full h-24 border border-zinc-300 rounded-lg p-5'>
          <div className='flex justify-between'>
            <p>Listed new product</p>
            <p className='text-zinc-500'>2 hours ago</p>
          </div>
          <p className='text-zinc-500'>MacBookPro</p>
        </div>
      </div>
    </>
  );
};

export default RecentActivities;
