import { useLoaderData } from "react-router";

import { useState } from "react";

import UsersStats from "../components/Users/UsersStats";
import UsersList from "../components/Users/UsersList";

const Users = () => {
  const usersData = useLoaderData() || [];
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="mt-5">
        <form
          className="flex justify-between"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            className="w-3xl h-10 p-5 rounded-md border-1 border-zinc-400 mx-auto"
            placeholder="Search for members..."
            id="user-search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          ></input>

          {/* Removing buttons until we an work out what to do with these */}
          {/* <button className="w-32 h-10 border-1 rounded-lg border-zinc-300 transition-colors duration-300 hover:bg-zinc-500 hover:text-white hover:border-transparent">
            Filter by Role
          </button>
          <button className="w-32 h-10 border-1 rounded-lg border-zinc-300 transition-colors duration-300 hover:bg-zinc-500 hover:text-white hover:border-transparent">
            Sort by Rating
          </button> */}
        </form>
      </div>
      {/* Users Stats */}
      <UsersStats stats={usersData} />
      {/* Users */}
      <UsersList data={usersData} search={search} />
    </>
  );
};

export default Users;
