import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

const ProductsList = ({ posts, search, category, categories }) => {
  const postSearch = search.trim().toLowerCase();

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = (post?.title || "").toLowerCase().includes(postSearch);
    // Get the category name of this post
    const postCategory = categories.find(
      (c) => Number(c.id) === Number(post.categoryId)
    )?.name;
    const matchesCategory = category ? postCategory === category : true;

    return matchesSearch && matchesCategory;
  });

  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const [postsRes, categoriesRes] = await Promise.all([
  //         fetch("http://localhost:3000/api/posts").then(res => res.json()),
  //         fetch("http://localhost:3000/api/categories").then(res => res.json()),
  //       ]);

  //       setPosts(postsRes || []);
  //       setCategories(categoriesRes.categories || []);
  //     } catch (err) {
  //       console.error("Error fetching data:", err);
  //     }
  //   };
  //   loadData();
  // }, []);

  return (
    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredPosts.map((post) => (
        <ProductCard key={post.id} post={post} categories={categories} />
      ))}
    </div>
  );
};

export default ProductsList;
