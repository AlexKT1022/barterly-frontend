import UserProductCard from "./UserProductCard";

const UserProductsList = ({ data }) => {
  const posts = data.posts;
  return (
    <>
      {posts.map((post) => {
        return <UserProductCard id={post.id} data={post} />;
      })}
    </>
  );
};

export default UserProductsList;
