import { useEffect, useState } from "react";
import { Link } from "react-router";

const ProductCard = ({ post }) => {
  const [postData, setPostData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [postRes, categoriesRes] = await Promise.all([
          fetch(
            `https://barterly-backend.onrender.com/api/posts/${post.id}`
          ).then((res) => res.json()),
          fetch("https://barterly-backend.onrender.com/api/categories").then(
            (res) => res.json()
          ),
        ]);

        setPostData(postRes);
        setCategories(categoriesRes?.categories || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [post.id]);

  const statusColors = {
    open: "bg-green-100 text-green-600",
    pending: "bg-yellow-100 text-yellow-600",
    traded: "bg-red-100 text-red-600",
  };

  const conditionColors = {
    New: "bg-green-100 text-green-600",
    "Like New": "bg-yellow-100 text-yellow-600",
    "Used - Excellent": "bg-blue-100 text-blue-600",
    "Used - Good": "bg-gray-100 text-gray-600",
  };

  if (loading) return <p>Loading...</p>;
  if (!postData) return <p className="text-red-500">Failed to load product.</p>;
  const item = postData?.items?.[0] ?? {};

  const category = categories.find(
    (cat) => Number(cat.id) === Number(post.categoryId)
  );
  const categoryName = category ? category.name : "Unknown";

  const imgFail = (event) => {
    event.target.src =
      "https://t4.ftcdn.net/jpg/16/71/95/79/360_F_1671957940_D2dYs3RXTsWEOeS7xY20y6RStabYt6DV.jpg";
  };

  return (
    <div className="flex flex-col rounded-lg border border-zinc-300 w-80 min-h-80 p-5 hover:shadow-md transition-shadow">
      <img
        //just  changed item.image_url to .imageUrl
        src={
          item.imageUrl ||
          "https://t4.ftcdn.net/jpg/16/71/95/79/360_F_1671957940_D2dYs3RXTsWEOeS7xY20y6RStabYt6DV.jpg"
        }
        alt={item.name || post.title}
        className="w-full bg-black rounded-lg mb-1 h-40 object-cover object-top"
        onError={imgFail}
      />

      <div className="flex gap-2 mb-2">
        {post.status && (
          <p
            className={`text-xs inline-block px-2 py-1 rounded ${
              statusColors[post.status] || "bg-gray-100 text-gray-600"
            }`}
          >
            {post.status}
          </p>
        )}

        {item.condition && (
          <p
            className={`text-xs inline-block px-2 py-1 rounded ${
              conditionColors[item.condition] || "bg-gray-100 text-gray-600"
            }`}
          >
            {item.condition}
          </p>
        )}
        <p className="text-sm text-gray-500 bg-red-100 text-red-600">
          {categoryName}
        </p>
        <p className="text-sm text-gray-500 bg-orange-100 text-orange-600 ">
          Qty:{item.quantity}
        </p>
      </div>

      <p className="font-semibold mt-1">{post.title}</p>
      <p className="text-gray-700 text-sm">{post.description}</p>

      <div className="flex justify-around mt-4">
        <Link to={`/product/${post.id}`}>
          <button className="w-32 bg-zinc-800 text-white p-3 rounded-lg hover:bg-zinc-500 duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
