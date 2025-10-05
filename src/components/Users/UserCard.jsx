import { useState } from "react";
import { Link } from "react-router";
import { jwtDecode } from "jwt-decode";

const UserCard = ({ user, posts }) => {
  const [toggleMessage, setToggleMessage] = useState(false);
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

  // added default parameter for postData to avoid a crashed page
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
        <div className="mb-15">
          <p className="text-xl">{user.username}</p>
          <p className="text-zinc-500 text-md">{user.location}</p>
        </div>
      </div>

      {/* Preserved for future feature - remove mb in above element*/}
      {/* <div className="pt-10 flex justify-between">
        <p>⭐</p>
      </div> */}

      <div>
        <div className="pt-3 flex justify-between text-zinc-500">
          <p>Available Trades:</p>
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
          <button
            className="px-4 h-10 w-32 rounded-md bg-zinc-800 text-white transition-colors duration-300 hover:bg-zinc-500"
            type="button"
            onClick={() => setToggleMessage(true)}
          >
            Message
          </button>
        </div>
      </div>
{/* Upcoming feature prompt when 'message' is clicked */}
      {toggleMessage && (
        <>
          <div className="mx-auto w-80 h-60 top-50 absolute inset-0 bg-white border border-zinc-300 shadow-xl rounded-lg p-5">
            <div className="flex flex-col justify-center items-center">
              🤯
              <p className="text-center mb-5">
                Hey! You found an upcoming feature. Check out our{" "}
                {
                  <Link to="/about" className="underline hover:text-zinc-500">
                    about page
                  </Link>
                }{" "}
                to find out about more of our features. Thanks for being
                patient!
              </p>
              <button
                type="button"
                className="px-4 h-10 w-32 rounded-md bg-zinc-800 text-white transition-colors duration-300 hover:bg-zinc-500"
                onClick={() => setToggleMessage(false)}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserCard;
