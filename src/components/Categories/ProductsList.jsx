import ProductCard from "./ProductCard";


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

  return (
    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredPosts.map((post) => (
        <ProductCard key={post.id} post={post} categories={categories} />
      ))}
    </div>
  );
};

export default ProductsList;
