import { useLoaderData } from "react-router";

import { useState } from "react";

import UsersStats from "../components/Users/UsersStats";
import UsersList from "../components/Users/UsersList";

const Users = () => {
  const usersData = useLoaderData() || [];
  const [search, setSearch] = useState("");

  return (
    <>
      {/* Users Stats */}
      <UsersStats stats={usersData} className="max-auto max-w-6xl" />
      <div className="mx-auto max-w-6xl mt-5">
        <form
          className="w-full flex flex-col sm:flex-row items-stretch gap-3"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            className="flex w-full h-10 rounded-md border border-zinc-400 px-3"
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

      {/* Users */}
      <UsersList
        data={usersData}
        search={search}
        className="max-auto max-w-6xl"
      />
    </>
  );
};

export default Users;
