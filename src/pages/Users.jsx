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
