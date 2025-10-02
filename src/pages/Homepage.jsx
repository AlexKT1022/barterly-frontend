import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { FaTshirt, FaTv, FaCar, FaPeopleCarry } from "react-icons/fa";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://barterly-backend.onrender.com/api/posts?q=${searchQuery.trim()}`);
        const data = await response.json();
        setSearchResults(data); // Update the search results with the fetched data
      } catch (error) {
        console.error('Error fetching search results:', error);
        setSearchResults([]); // Clear search results on error
      } finally {
        setLoading(false); // Stop loading in both success and error cases
      }
    };
  
    fetchSearchResults();
  }, [searchQuery]);
  


  const onSearchSubmit = (e) => {
    e.preventDefault();
    const resultQuery = searchQuery.trim();
    if (!resultQuery) return;

    navigate(`/search?q=${resultQuery}`);
  };

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

        <div className="w-full mb-4 ">
          <form
            onSubmit={onSearchSubmit}
            className="w-full flex flex-col sm:flex-row items-stretch gap-3"
          >
            <input
              className="w-full h-10 rounded-md border border-zinc-400 px-3"
              placeholder="Search for items or services..."
              id="home-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
          </form>

          {/* Live search results */}
          {searchQuery.trim() && (
            <div className="mt-2 w-full max-h-64 overflow-y-auto rounded-md border border-zinc-300 bg-white shadow-md text-left">
              {loading && (
                <p className="p-3 text-zinc-500 text-center">Loading...</p>
              )}

              {!loading && searchResults.length === 0 && (
                <p className="p-3 text-zinc-500 text-center">No results found</p>
              )}

              {!loading && searchResults.map((post) => (
                  <Link
                    key={post.id}
                    to={`/product/${post.id}`}
                    className="block px-4 py-2 hover:bg-zinc-100 border-b border-zinc-200 last:border-none"
                    onClick={() => setSearchQuery('')} // clear search on click
                  >
                    <div className="font-semibold">{post.title}</div>
                    <div className="text-sm text-zinc-600 truncate max-w-full">
                      {/* {post.description || "No description"} */}
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Categories carousel or grid */}
          <Link
            to="/categories/electronics"
            className="rounded-xl border border-zinc-200 p-3 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <FaTv className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              <p className="text-sm sm:text-base">Electronics</p>
            </div>
          </Link>

          <Link
            to="/categories/clothing"
            className="rounded-xl border border-zinc-200 p-3 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <FaTshirt className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              <p className="text-sm sm:text-base">Clothing</p>
            </div>
          </Link>

          <Link
            to="/categories/automotive"
            className="rounded-xl border border-zinc-200 p-3 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <FaCar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              <p className="text-sm sm:text-base">Automotive</p>
            </div>
          </Link>

          <Link
            to="/categories/services"
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
