import { useEffect, useState } from "react";
import { Link } from "react-router";

const fetchItemsByPostId = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

const ProductCard = ({ post }) => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const loadData = async () => {
      const data = await fetchItemsByPostId(post.id);
      setPostData(data);
    };
    try {
      loadData();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const status = {
    open: "bg-green-100 text-green-600",
    pending: "bg-yellow-100 text-yellow-600",
    closed: "bg-red-100 text-red-600",
  };

  if (loading) return <p>loading</p>;

  return (
    <div className="flex flex-col rounded-lg border border-zinc-300 w-80 min-h-80 p-5 hover:shadow-md transition-shadow">
      <img
        src={postData.items?.[0].imageUrl}
        alt=""
        className="w-full bg-black rounded-lg mb-1 h-40 object-cover object-top"
      />
      <div className="flex">
        <p
          className={`text-xs inline-block px-2 py-1 rounded ${
            status[post.status]
          }`}
        >
          {post.status}
        </p>
      </div>
      <p className="font-semibold mt-1">{post.title}</p>
      {/* <p className="text-xs text-zinc-500 mb-1">{post.username}</p> */}
      <p>{post.description}</p>
      <div className="flex justify-around">
        <Link to={`/product/${post.id}`}>
          <button
            to={`/product/${post.id}`}
            className="w-32 bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
