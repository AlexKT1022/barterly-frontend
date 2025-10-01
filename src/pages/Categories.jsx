import { useState, useEffect } from "react";
import NewProductForm from "./NewProductForm";
import { useLoaderData } from "react-router";
import ProductsList from "../components/Categories/ProductsList";

const Categories = () => {
  const [searchProducts, setSearchProducts] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const postData = useLoaderData() || [];

  const token = sessionStorage.getItem("token");
  const isLoggedIn = !!token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, categoriesRes] = await Promise.all([
          fetch("https://barterly-backend.onrender.com/api/posts").then((res) =>
            res.json()
          ),
          fetch("https://barterly-backend.onrender.com/api/categories").then(
            (res) => res.json()
          ),
        ]);

        setPosts(postsRes || []);
        setCategories(categoriesRes.categories || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);


  const onAdd = (item) => {
    postData.push({ ...item, username: "test" });
    setShowForm(false);
  };

  return (
    <div className="mx-auto md:max-w-3xl lg:max-w-6xl text-gray-800">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-lg font-semibold">Trading Marketplace</h2>
        {isLoggedIn && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
          >
            + New Post
          </button>
        )}
      </div>

      {/* Search & Category */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 border rounded px-3 py-2"
          value={searchProducts}
          onChange={(e) => setSearchProducts(e.target.value)}
        />
        <select
          className="border rounded px-3 py-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name} ({c.post_count})
            </option>
          ))}
        </select>
      </div>

      {/* Products List */}
      <ProductsList
        posts={posts}
        search={searchProducts}
        category={selectedCategory}
        categories={categories}
      />

      {/* Modal */}
      {showForm && (
        <NewProductForm categories={categories} onAdd={onAdd} setShowForm={setShowForm} />
      )}
    </div>
  );
};

export default Categories;
