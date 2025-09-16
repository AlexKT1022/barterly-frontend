import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center h-12">
        <NavLink to="">
          <div className="font-bold flex items-center text-lg">
            <img
              src="/bartley_outline.svg"
              className="mr-1 h-6 w-auto hover-underline-animation"
            />
            Barterly
          </div>
        </NavLink>
        <div className="flex gap-5 text-lg">
          <NavLink to="">
            <p className="hover-underline-animation">Explore</p>
          </NavLink>
          <NavLink to="">
            <p className="hover-underline-animation">Categories</p>
          </NavLink>
          <NavLink to="">
            <p className="hover-underline-animation">How It Works</p>
          </NavLink>
        </div>

        <div className="flex gap-5">
          <button className="px-4 h-10 rounded-md bg-zinc-800 text-white transition-colors duration-300 hover:bg-zinc-500 shadow-sm">
            Sign Up
          </button>
          <button className="px-4 h-10 rounded-md border-1 border-zinc-500 transition-colors duration-300 hover:bg-zinc-500 hover:text-white hover:border-transparent shadow-sm">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
