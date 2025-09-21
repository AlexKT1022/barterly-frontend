import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { token, logout } = useAuth();
  return (
    <>
      <nav className="">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="font-bold flex items-center justify-center lg:justify-normal text-lg">
            <img src="/bartley_outline.svg" className="mr-1 h-6 w-auto" />
            <NavLink to="/"> Barterly </NavLink>
          </div>
          <div className="flex w-full justify-center gap-5 lg:text-lg md:text-md md:auto">
            <NavLink to="/explore" className="hover-underline-animation">
              Explore
            </NavLink>
            <NavLink to="/categories" className="hover-underline-animation">
              Categories
            </NavLink>
            <NavLink to="/how-it-works" className="hover-underline-animation">
              How It Works
            </NavLink>
            <NavLink to="/about" className="hover-underline-animation">
              About
            </NavLink>
          </div>
          <div className="flex gap-5"></div>

          <div className="flex gap-5 justify-center mt-1">
            {token ? (
              <>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink onClick={logout}>Log Out</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/register">
                  <button className="px-4 w-24 h-10 rounded-md bg-zinc-800 text-white transition-colors duration-300 hover:bg-zinc-500 shadow-sm">
                    Sign Up
                  </button>
                </NavLink>
                <NavLink to="/login">
                  <button className="px-4 w-24 h-10 rounded-md border-1 border-zinc-500 transition-colors duration-300 hover:bg-zinc-500 hover:text-white hover:border-transparent shadow-sm">
                    Login
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
