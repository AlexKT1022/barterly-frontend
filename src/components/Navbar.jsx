import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center h-12">
        <div className="font-bold flex items-center text-lg">
          <img src="/bartley_outline.svg" className="mr-1 h-6 w-auto" />
          Barterly
        </div>
        <div className="flex gap-5 text-lg">
          <p className="hover-underline-animation">Explore</p>
          <p className="hover-underline-animation">Categories</p>
          <p className="hover-underline-animation">How It Works</p>
        </div>
        <div className="flex gap-5">
          <button className="px-4 h-10 rounded-md bg-sky-500/75 text-white transition-colors duration-300 hover:bg-sky-700 shadow-sm">
            Sign Up
          </button>
          <button className="px-4 h-10 rounded-md border-2 border-zinc-400 transition-colors duration-300 hover:bg-sky-700 hover:text-white hover:border-transparent shadow-sm">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
