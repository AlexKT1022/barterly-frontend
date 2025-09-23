const deletePost = async (id) => {
  const token = sessionStorage.getItem("token");
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.status === 204) return true;
    if (!res.ok) throw new Error((await res.text()) || "Delete failed");

    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const EditPostModal = ({ setActive, data }) => {
  console.log(data);
  return (
    <>
      <div
        id="post-modal"
        className="mx-auto bg-white border border-zinc-300 shadow-xl rounded-lg fixed p-5 inset-x-5 inset-y-25 lg:inset-x-1/3"
      >
        <h1>We are modal</h1>
        <div>
          <input default={data.name}></input>
        </div>
        <div>
          <button
            className="p-5 bg-zinc-800 text-white"
            onClick={() => deletePost(data.id)}
          >
            Delete Post
          </button>
          <button
            className="p-5 bg-zinc-800 text-white"
            onClick={() => setActive(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default EditPostModal;
