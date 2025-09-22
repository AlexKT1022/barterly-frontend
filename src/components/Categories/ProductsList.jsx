import ProductCard from "./ProductCard";

const ProductsList = ({ posts }) => {
  return (
    <>
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => {
          return <ProductCard key={post.id} post={post} />;
        })}
      </div>
    </>
  );
};

export default ProductsList;
