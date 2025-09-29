import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const MakeOfferModal = ({ setActive }) => {
  const [loggedUserPosts, setLoggedUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token =
          typeof window !== "undefined"
            ? sessionStorage.getItem("token")
            : null;
        if (!token) return;

        const payload = jwtDecode(token);
        const id = payload?.id;
        if (!id) return;

        const res = await fetch(`http://localhost:3000/api/users/${id}/posts`);
        const data = await res.json();

        setLoggedUserPosts(data?.posts ?? []);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div
      id="offer-modal"
      className="mx-auto bg-white border border-zinc-300 shadow-xl rounded-lg fixed p-5 inset-x-5 inset-y-25 lg:inset-x-1/3"
    >
      <div className="flex flex-col justify-center">
        <h1 className="mb-5 text-lg text-center">
          Make an offer they can't refuse!
        </h1>
        <form className="w-full mb-5">
          <select className="w-full border border-zinc-300 p-2 rounded-lg mb-2">
            <option>Select from your posts...</option>
            {loggedUserPosts.map((post) => (
              <option key={post.id}>{post.title}</option>
            ))}
          </select>
          <textarea
            placeholder="Leave a message - barter!"
            className="w-full border border-zinc-300 p-2 rounded-lg h-90"
          ></textarea>
        </form>
        <div className="flex justify-evenly">
          <button className="p-5 bg-zinc-800 hover:bg-zinc-500 text-white w-40">
            Make Offer
          </button>
          <button
            className="p-5 bg-red-500 hover:bg-red-800 text-white w-40"
            onClick={() => setActive(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeOfferModal;