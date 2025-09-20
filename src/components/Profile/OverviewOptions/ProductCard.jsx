const ProductCard = ({ post }) => {
  const status = {
    open: "bg-green-100 text-green-600",
    pending: "bg-yellow-100 text-yellow-600",
    closed: "bg-red-100 text-red-600",
  };

  return (
    <div className="flex flex-col rounded-lg border border-zinc-300 w-80 h-80 p-5 hover:shadow-md transition-shadow">
      <img
        src={post.items[0]?.imageUrl}
        alt=""
        className="w-full h-full bg-black rounded-lg mb-1 object-cover object-top"
      />
      <p className="font-semibold">{post.title}</p>
      <div>
        <p className="text-md mb-1">Category</p>
        <p
          className={`text-xs inline-block px-2 py-1 rounded ${
            status[post.status]
          }`}
        >
          {post.status}
        </p>
      </div>
      <div className="flex justify-around">
        <button className="w-32 bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300">
          Edit
        </button>
        <button className="w-32 bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
