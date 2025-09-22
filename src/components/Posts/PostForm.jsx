const PostForm = ({ onAddPost, searchText, setSearchText,
  filterCategory, setFilterCategory, sortBy, setSortBy }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newPost = {
      author: "New User",
      time: "Just now",
      title: form.title.value,
      content: form.content.value,
      tags: form.tags.value.split(",").map((t) => t.trim()),
      likes: 0,
      replies: 0,
      badge: form.category.value,
    };
    onAddPost(newPost);
    form.reset();
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <h1 className="font-bold text-xl mb-3 text-center">What’s on your mind?</h1>

        <input
          name="title"
          type="text"
          placeholder="Post title..."
          className="w-full border rounded p-2"
        />
        <textarea
          name="content"
          placeholder="Share your thoughts..."
          className="w-full border rounded p-2"
        />

        <div className="flex flex-col sm:flex-row gap-2">
          <select name="category" className="border rounded p-2 w-full sm:w-auto">
            <option value="">Select Category</option>
            <option value="Request">Request</option>
            <option value="Guide">Guide</option>
            <option value="Announcement">Announcement</option>
            <option value="Question">Question</option>
          </select>
          <input
            name="tags"
            type="text"
            placeholder="Tags (comma separated)"
            className="flex-1 border rounded p-2"
          />
        </div>

        <button type="submit" className="mt-3 px-4 py-2 text-black font-semibold  rounded border trans durati-300">
          Post
        </button>
      </form>

      <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
        <input
          type="text"
          placeholder="Search posts..."
          className="border rounded p-2 flex-1"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border rounded p-2 w-full sm:w-auto"
        >
          <option value="">Filter by category</option>
          <option value="Request">Request</option>
          <option value="Guide">Guide</option>
          <option value="Announcement">Announcement</option>
          <option value="Question">Question</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded p-2 w-full sm:w-auto"
        >
          <option value="">Sort by</option>
          <option value="likes">Likes</option>
          <option value="replies">Replies</option>
          <option value="time">Time</option>
        </select>
      </div>
    </div>
  );
};
export default PostForm;
