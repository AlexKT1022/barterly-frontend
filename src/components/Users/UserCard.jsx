import { Link } from "react-router";
import { jwtDecode } from "jwt-decode";

const UserCard = ({ user, posts }) => {
  // safely decode the token once per render
  let currentUserId = null;
  try {
    const token =
      typeof window !== "undefined" ? sessionStorage.getItem("token") : null;
    if (token) {
      const payload = jwtDecode(token);
      currentUserId = payload?.id ?? null;
    }
  } catch (err) {
    console.warn("Invalid token:", err);
  }

  const sortPosts = (postData = []) => {
    let count = 0;
    postData.forEach((post) => {
      if (post.authorId === user.id && post.status === "open") count++;
    });
    return count;
  };

  const joinedDate = (date) => {
    const normalize = new Date(date);
    return normalize.getFullYear();
  };

  // if logged in as this user, go to /profile, otherwise go to /user/:id
  const profileHref =
    currentUserId && user.id === currentUserId
      ? "/profile"
      : `/user/${user.id}`;

  return (
    <div className="w-84 h-75 border border-zinc-300 rounded-lg p-5 hover:shadow-xl transition-all duration-300">
      <div className="flex">
        <img
          src={user.profile_image_url}
          className="w-16 h-16 rounded-full bg-black mr-2"
          alt=""
        />
        <div>
          <p className="text-xl">{user.username}</p>
          <p className="text-zinc-500 text-md">{user.location}</p>
        </div>
      </div>

      <div className="pt-10 flex justify-between">
        <p>⭐ 4.8</p>
      </div>

      <div>
        <div className="pt-3 flex justify-between text-zinc-500">
          <p>Open Trades:</p>
          <p>{sortPosts(posts)}</p>
        </div>
        <div className="pt-3 flex justify-between text-zinc-500">
          <p>Joined:</p>
          <p>{joinedDate(user.created_at)}</p>
        </div>
        <div className="flex justify-evenly mt-5">
          <Link to={profileHref}>
            <button className="px-4 h-10 w-32 rounded-md border border-zinc-500 transition-colors duration-300 hover:bg-zinc-500 hover:text-white hover:border-transparent">
              View Profile
            </button>
          </Link>
          <button className="px-4 h-10 w-32 rounded-md bg-zinc-800 text-white transition-colors duration-300 hover:bg-zinc-500">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
