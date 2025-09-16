const Homepage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold">Trade goods and services directly</h1>
        <h2 className="text-center">
          Barterly is a platform for swapping items and skills without the use
          of money. Start trading today!
        </h2>
        <button className="px-4 h-10 rounded-md bg-sky-500/75 text-white transition-colors duration-300 hover:bg-sky-700 shadow-sm">
          Get Started
        </button>
        <div>
          <form>
            <input
              className="w-lg h-10 rounded-md border-1 border-zinc-400"
              placeholder="Search for items or services..."
              id="home-search"
            ></input>
            <button className="px-4 h-10 rounded-md bg-sky-500/75 text-white transition-colors duration-300 hover:bg-sky-700 shadow-sm">
              Search
            </button>
          </form>
        </div>
        <div className="grid grid-cols-4 gap-20">
          <div className="flex flex-col justify-center items-center">
            <img src="src\assets\electronics.png"></img>
            <p>Electronics</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="src\assets\clothing.png"></img>
            <p>Clothing</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="src\assets\automotive.png"></img>
            <p>Automotive</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="src\assets\services.png"></img>
            <p>Services</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
