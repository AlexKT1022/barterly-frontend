import UserProductCard from "./UserProductCard";

const UserProductsList = ({ data, categories }) => {
  const posts = data.posts;
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => {
          return (
            <UserProductCard id={post.id} data={post} categories={categories} />
          );
        })}
      </div>
    </>
  );
};

export default UserProductsList;
