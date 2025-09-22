import { Link } from "react-router";
import { FaTshirt, FaTv, FaCar, FaPeopleCarry } from "react-icons/fa";

const Homepage = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-25 pb-12 flex flex-col items-center text-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl max-w-3xl">
          Trade goods and services directly
        </h1>

        <h2 className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl mb-5">
          Barterly is a platform for swapping items and skills without the use
          of money. Start trading today!
        </h2>

        <Link to="/register">
          <button className="w-full sm:w-auto px-4 h-10 rounded-md bg-zinc-800 text-white hover:bg-zinc-500 transition-colors duration-300 shadow-sm mb-6">
            Get Started
          </button>
        </Link>

        <div className="w-full mb-10">
          <form className="w-full flex flex-col sm:flex-row items-stretch gap-3">
            <input
              className="w-full h-10 rounded-md border border-zinc-400 px-3"
              placeholder="Search for items or services..."
              id="home-search"
            />
            <Link to="" className="sm:w-auto w-full">
              <button className="w-full sm:w-auto px-8 h-10 rounded-md bg-zinc-800 text-white transition-colors duration-300 hover:bg-zinc-500 shadow-sm">
                Search
              </button>
            </Link>
          </form>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <Link
            to="/categories"
            className="rounded-xl border border-zinc-200 p-3 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <FaTv className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              <p className="text-sm sm:text-base">Electronics</p>
            </div>
          </Link>

          <Link
            to="/categories"
            className="rounded-xl border border-zinc-200 p-3 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <FaTshirt className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              <p className="text-sm sm:text-base">Clothing</p>
            </div>
          </Link>

          <Link
            to="/categories"
            className="rounded-xl border border-zinc-200 p-3 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <FaCar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              <p className="text-sm sm:text-base">Automotive</p>
            </div>
          </Link>

          <Link
            to="/categories"
            className="rounded-xl border border-zinc-200 p-3 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <FaPeopleCarry className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              <p className="text-sm sm:text-base">Services</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
