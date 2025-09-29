import { Link } from "react-router";

import { jwtDecode } from "jwt-decode";
const token = sessionStorage.getItem("token");
const { id } = jwtDecode(token);

const UserCard = ({ user, posts }) => {
  const sortPosts = (postData) => {
    let count = 0;
    postData.map((post) => {
      if (post.authorId === user.id && post.status === "open") count++;
    });
    return count;
  };

  const joinedDate = (date) => {
    const normalize = new Date(date);
    const year = normalize.getFullYear();
    return year;
  };

  // checks if the user is currently logged in, redirects to profile if true
  const isLoggedIn = (userId) => {
    if (user.id === id) {
      return "/profile";
    } else {
      return `/user/${user.id}`;
    }
  };
  return (
    <>
      <div className="w-84 h-75 border border-zinc-300 rounded-lg p-5 hover:shadow-xl transition-all duration-300">
        <div className="flex">
          <img
            src={user.profile_image_url}
            className="w-16 h-16 rounded-full bg-black mr-2"
          ></img>
          <div>
            <p className="text-xl">{user.username}</p>
            <p className="text-zinc-500 text-md">{user.location}</p>
          </div>
        </div>
        {/* Removing below until we have more data to provide here */}
        <div className="pt-10 flex justify-between">
          {/* <p className="text-xs bg-zinc-100 py-1 px-2 rounded-lg"></p> */}
          <p>⭐ 4.8</p>
        </div>
        <div>
          <div className="pt-3 flex justify-between text-zinc-500">
            <p className="">Open Trades:</p>
            <p>{sortPosts(posts)}</p>
          </div>
          <div className="pt-3 flex justify-between text-zinc-500">
            <p className="">Joined:</p>
            <p>{joinedDate(user.created_at)}</p>
          </div>
          <div className="flex justify-evenly mt-5">
            <Link to={isLoggedIn(user.id)}>
              <button className="px-4 h-10 w-32 rounded-md border-1 border-zinc-500 transition-colors duration-300 hover:bg-zinc-500 hover:text-white hover:border-transparent">
                View Profile
              </button>
            </Link>
            <button className="px-4 h-10 w-32 rounded-md bg-zinc-800 text-white transition-colors duration-300 hover:bg-zinc-500">
              Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
