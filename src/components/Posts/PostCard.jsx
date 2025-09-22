import { Link } from "react-router";

export default function PostCard({ post }) {
  return (
    <section className="bg-white rounded-xl shadow p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <img
            src=""
            alt={post.author}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-zinc-800"
          />
          <div>
            <p className="font-semibold">{post.author}</p>
            <p className="text-sm text-gray-500">{post.time}</p>
          </div>
        </div>
        {post.badge && (
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              post.badge === "Request"
                ? "bg-red-100 text-red-600"
                : post.badge === "Guide"
                ? "bg-blue-100 text-blue-600"
                : post.badge === "Announcement"
                ? "bg-green-100 text-green-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {post.badge}
          </span>
        )}
      </div>

      <h2 className="font-bold text-lg">{post.title}</h2>
      <p className="text-gray-700 line-clamp-3">{post.content}</p>

      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag, idx) => (
          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-600 gap-2">
        <div className="flex gap-4">
          <span>👍 {post.likes}</span>
          <span>💬 {post.replies} replies</span>
          <span className="cursor-pointer">Share</span>
        </div>
        <Link to={`/posts/${post.id}`} className="text-blue-500 hover:underline">
          Read More
        </Link>
      </div>
    </section>
  );
}
