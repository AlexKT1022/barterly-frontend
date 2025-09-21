import { useLoaderData } from "react-router";
import UsersStats from "../components/Users/UsersStats";

const Users = () => {
  const usersData = useLoaderData() || [];

  return (
    <>
      <div className="mt-5 ">
        <form className="flex justify-between">
          <input
            className="w-3xl h-10 rounded-md border-1 border-zinc-400 mr-3"
            placeholder="Search for members..."
            id="home-search"
          ></input>
          <button className="w-32 h-10 border-1 rounded-lg border-zinc-300 transition-colors duration-300 hover:bg-zinc-500 hover:text-white hover:border-transparent">
            Filter by Role
          </button>
          <button className="w-32 h-10 border-1 rounded-lg border-zinc-300 transition-colors duration-300 hover:bg-zinc-500 hover:text-white hover:border-transparent">
            Sort by Rating
          </button>
        </form>
      </div>
      {/* Users Stats */}
      <UsersStats stats={usersData} />
      {/* Users */}
      <div className="mt-5 grid grid-cols-3 gap-5">
        <div className="w-84 h-75 border border-zinc-300 rounded-lg p-5">
          <div className="flex">
            <img src="" className="w-16 h-16 rounded-full bg-black mr-2"></img>
            <div>
              <p className="text-xl">John Doe</p>
              <p className="text-zinc-500 text-md">john@example</p>
            </div>
          </div>
          <div className="pt-10 flex justify-between">
            <p className="text-xs bg-zinc-100 py-1 px-2 rounded-lg">Seller</p>
            <p>⭐ 4.8</p>
          </div>
          <div className="pt-3 flex justify-between text-zinc-500">
            <p className="">Products:</p>
            <p>12</p>
          </div>
          <div className="pt-3 flex justify-between text-zinc-500">
            <p className="">Joined:</p>
            <p>2024</p>
          </div>
          <div className="flex justify-evenly mt-5">
            <button className="px-4 h-10 w-32 rounded-md border-1 border-zinc-500 transition-colors duration-300 hover:bg-zinc-500 hover:text-white hover:border-transparent">
              View Profile
            </button>
            <button className="px-4 h-10 w-32 rounded-md bg-zinc-800 text-white transition-colors duration-300 hover:bg-zinc-500">
              Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
