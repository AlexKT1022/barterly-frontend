import { useState } from "react";
import PostForm from "../components/Posts/PostForm";
import PostCard from "../components/Posts/PostCard";

const PostsPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Sarah Johnson",
      time: "2 hours ago",
      title: "Looking for vintage camera equipment",
      content:
        "Hi everyone! I'm searching for vintage film cameras, especially Leica or Hasselblad models. Willing to pay good prices for well-maintained items.",
      tags: ["Camera", "Vintage", "Photography"],
      likes: 12,
      replies: 5,
      badge: "Request",
    },
    {
      id: 2,
      author: "Mike Chen",
      time: "1 day ago",
      title: "Tips for selling electronics safely",
      content:
        "After selling dozens of gadgets on this platform, here are my top tips for safe transactions...",
      tags: ["Tips", "Electronics", "Safety"],
      likes: 45,
      replies: 18,
      badge: "Guide",
    },
    {
      id: 3,
      author: "Emma Wilson",
      time: "3 days ago",
      title: "Monthly marketplace updates",
      content:
        "Here's what's new this month  New category filters  Improved search functionality  Mobile app updates...",
      tags: ["Updates", "Features"],
      likes: 23,
      replies: 8,
      badge: "Announcement",
    },
    {
      id: 4,
      author: "Alex Rodriguez",
      time: "1 week ago",
      title: "Question about shipping internationally",
      content:
        "Has anyone had experience shipping items internationally? What are the best practices for customs declarations and insurance?",
      tags: ["Shipping", "International", "Help"],
      likes: 8,
      replies: 14,
      badge: "Question",
    },
  ]);

  // Filter States
  const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  const addPost = (newPost) => {
    setPosts((prev) => [{ id: prev.length + 1, ...newPost }, ...prev]);
  };

  // Filtered posts using individual booleans
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchText.toLowerCase()) ||
      post.content.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = filterCategory ? post.badge === filterCategory : true;
    return matchesSearch && matchesCategory;
  })
    .sort((a, b) => {
      if (sortBy === "likes") return b.likes - a.likes;
      if (sortBy === "replies") return b.replies - a.replies;
      return 0; // no sorting
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Post Form */}
      <PostForm
        onAddPost={addPost}
        searchText={searchText}
        setSearchText={setSearchText}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Responsive Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredPosts.length === 0 ? (
          <div className="text-gray-500 col-span-full">No posts match your filters.</div>
        ) : (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>

      <button className="w-full mt-6 p-3 border rounded bg-gray-50 hover:bg-gray-100 transition">
        Load More Posts
      </button>
    </div>
  );
};

export default PostsPage;