import UserCard from "./UserCard";

const UsersList = ({ data, search }) => {
  const userdata = data.users;
  const userPosts = data.allPosts;

  const userSearch = search.trim().toLowerCase();
  const filteredUsers = userSearch
    ? userdata.filter((user) =>
        (user?.username || "").toLowerCase().includes(userSearch)
      )
    : userdata;

  return (
    <>
      <div className="mt-5 grid grid-cols-3 gap-5">
        {filteredUsers.map((user) => {
          return <UserCard key={user.id} user={user} posts={userPosts} />;
        })}
      </div>
    </>
  );
};

export default UsersList;
