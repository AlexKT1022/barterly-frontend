import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";

// simple custom hook
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);

    updateMatch();
    media.addEventListener("change", updateMatch);
    return () => media.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
};

const Navbar = () => {
  const { token, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)"); // Tailwind's md breakpoint

  // --- Desktop Layout ---
  if (isDesktop) {
    return (
      <nav className="bg-white shadow">
        <div className="flex justify-between items-center h-12 mx-auto px-4 max-w-6xl">
          {/* Logo */}
          <div className="font-bold flex items-center text-lg">
            <img src="/bartley_outline.svg" className="mr-1 h-6 w-auto" alt="logo" />
            <NavLink to="/">Barterly</NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="flex gap-5 text-lg">
            <NavLink to="/categories" className="hover-underline-animation">Categories</NavLink>
            <NavLink to="/how-it-works" className="hover-underline-animation">How It Works</NavLink>
            <NavLink to="/about" className="hover-underline-animation">About</NavLink>
            <NavLink to="/posts" className="hover-underline-animation">Posts</NavLink>
          </div>

          {/* Desktop Auth */}
          <div className="flex gap-5">
            {token ? (
              <>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink onClick={logout}>Log Out</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/register">
                  <button className="px-4 h-10 rounded-md bg-zinc-800 text-white transition hover:bg-zinc-500 shadow-sm">
                    Sign Up
                  </button>
                </NavLink>
                <NavLink to="/login">
                  <button className="px-4 h-10 rounded-md border border-zinc-500 transition hover:bg-zinc-500 hover:text-white hover:border-transparent shadow-sm">
                    Login
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  }

  // --- Mobile Layout ---
  return (
    <nav className="bg-white shadow">
      <div className="flex justify-between items-center h-12 mx-auto px-4 max-w-6xl">
        {/* Logo */}
        <div className="font-bold flex items-center text-lg">
          <img src="/bartley_outline.svg" className="mr-1 h-6 w-auto" alt="logo" />
          <NavLink to="/">Barterly</NavLink>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="bg-white border-t shadow px-4 py-2 space-y-2">
          <NavLink to="/categories" className="block" onClick={() => setIsMenuOpen(false)}>Categories</NavLink>
          <NavLink to="/how-it-works" className="block" onClick={() => setIsMenuOpen(false)}>How It Works</NavLink>
          <NavLink to="/about" className="block" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/posts" className="block" onClick={() => setIsMenuOpen(false)}>Posts</NavLink>

          <div className="border-t pt-2">
            {token ? (
              <>
                <NavLink to="/profile" className="block" onClick={() => setIsMenuOpen(false)}>Profile</NavLink>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block text-left w-full"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <NavLink to="/register" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full px-4 h-10 rounded-md bg-zinc-800 text-white transition hover:bg-zinc-500 shadow-sm">
                    Sign Up
                  </button>
                </NavLink>
                <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full px-4 h-10 mt-2 rounded-md border border-zinc-500 transition hover:bg-zinc-500 hover:text-white hover:border-transparent shadow-sm">
                    Login
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
