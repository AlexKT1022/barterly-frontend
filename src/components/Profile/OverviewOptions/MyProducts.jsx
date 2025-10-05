// My Products: a view that shows all your posts

import ProductCard from "./ProductCard";
import { Navigate } from "react-router";

const MyProducts = ({ products, categories }) => {
  const postData = products?.posts;

  const token = sessionStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;

  return (
    <>
      <div className="mx-auto flex justify-evenly mt-5 mb-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {postData.map((post) => {
            return (
              <ProductCard key={post.id} post={post} categories={categories} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyProducts;
