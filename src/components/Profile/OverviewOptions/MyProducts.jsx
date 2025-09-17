const MyProducts = () => {
  return (
    <>
      <div className="flex justify-evenly mt-5 mb-5">
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col rounded-lg border border-zinc-300 w-80 h-80 p-5 hover:shadow-md transition-shadow">
            <img
              src=""
              alt=""
              className="w-full h-full bg-black rounded-lg mb-1"
            />
            <p className="font-semibold">Product Name</p>
            <div>
              <p className="text-md mb-1">Category</p>
              <p className="text-xs inline-block px-2 py-1 rounded bg-green-100 text-green-600">
                Status
              </p>
            </div>
            <div className="flex justify-around">
              <button className="w-32 bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300">
                Edit
              </button>
              <button className="w-32 bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProducts;
