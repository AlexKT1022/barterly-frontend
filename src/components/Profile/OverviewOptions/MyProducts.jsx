import ProductCard from "./ProductCard";

const MyProducts = ({ products }) => {
  const postData = products?.posts ?? [];
  return (
    <>
      <div className="flex justify-evenly mt-5 mb-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {postData.map((post) => {
            return <ProductCard key={post.id} post={post} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MyProducts;
