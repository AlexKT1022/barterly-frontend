import ProductCard from "./ProductCard";

const ProductsList = ({ posts, search }) => {
  const postSearch = search.trim().toLowerCase();
  const filteredPosts = postSearch
    ? posts.filter((post) =>
        (post?.title || "").toLowerCase().includes(postSearch)
      )
    : posts;
  return (
    <>
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPosts.map((post) => {
          return <ProductCard key={post.id} post={post} />;
        })}
      </div>
    </>
  );
};

export default ProductsList;
