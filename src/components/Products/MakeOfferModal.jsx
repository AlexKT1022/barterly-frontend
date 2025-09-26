import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { jwtDecode } from "jwt-decode";

const MakeOfferModal = ({ setActive }) => {
  const [loggedUserPosts, setLoggedUserPosts] = useState([]);
  const [selectedTrade, setSelectedTrade] = useState(null); // start as null
  const { id } = useParams();
  const handleSelectedTrade = (postId) => {
    // ensure number (helpful if you pass strings from UI)
    setSelectedTrade(postId ? Number(postId) : null);
  };
  const handleOfferSubmit = async (event) => {
    event.preventDefault();
    const newFormData = new FormData(event.currentTarget);
    const post_id = Number(id); // parent post id
    const message = newFormData.get("message") || ""; // optional
    // Build payload. Only include child_post_id if user picked one.
    const payload = { post_id, message };
    if (Number.isFinite(selectedTrade) && selectedTrade > 0) {
      payload.child_post_id = selectedTrade; // <-- IMPORTANT: correct key name
    }
    const token = sessionStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:3000/api/offers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Submission failed");
      }
      await res.json();
      window.location.reload();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

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
        <form className="w-full mb-5" onSubmit={handleOfferSubmit}>
          <select
            className="w-full border border-zinc-300 p-2 rounded-lg mb-2"
            name="responseItem"
            onChange={(event) => handleSelectedTrade(event.target.value)}
          >
            <option>Select from your posts...</option>
            {loggedUserPosts.map((post) => (
              <option key={post.id} value={post.id}>
                {post.title}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            placeholder="Leave a message - barter!"
            className="w-full border border-zinc-300 p-2 rounded-lg h-90"
          ></textarea>
          <div className="flex justify-evenly">
            <button
              className="p-5 bg-zinc-800 hover:bg-zinc-500 text-white w-40"
              type="submit"
            >
              Make Offer
            </button>
            <button
              type="button"
              className="p-5 bg-red-500 hover:bg-red-800 text-white w-40"
              onClick={() => setActive(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeOfferModal;
