import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const deletePost = async (id) => {
  const token = sessionStorage.getItem("token");
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.status === 204) {
      window.location.reload();
      return;
    }

    if (!res.ok) {
      throw new Error((await res.text()) || "Delete failed");
    }

    await res.json();
    window.location.reload();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const EditPostModal = ({ setActive, data }) => {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <>
      <div
        id="post-modal"
        className="mx-auto bg-white border border-zinc-300 shadow-xl rounded-lg fixed p-5 inset-x-5 inset-y-25 lg:inset-x-1/3"
      >
        <h1 className="text-center">Edit Post</h1>
        <div className="flex justify-end">
          <button
            className="p-5 bg-red-500 text-white justify-self-end hover:bg-red-800"
            onClick={() => setShowDelete(true)}
          >
            <FaTrash />
          </button>
        </div>
        <div className="flex flex-col justify-evenly">
          <input value={data.title} className="w-full bg-zinc-300 p-2"></input>
          <input value={data.description} className="w-full bg-zinc-300 p-2"></input>
        </div>

        <button
          className="p-5 bg-zinc-800 text-white"
          onClick={() => setActive(false)}
        >
          Cancel
        </button>
        {showDelete && (
          <>
            <div
              id="delete-modal"
              className="mx-auto bg-white border border-zinc-300 shadow-xl rounded-lg relative p-5"
            >
              Are you sure you want to delete?
              <div className="flex justify-evenly mt-2">
                <button
                  className="p-3 bg-green-500 hover:bg-green-800"
                  onClick={() => deletePost(data.id)}
                >
                  Yes
                </button>
                <button
                  className="p-3 bg-red-500 hover:bg-red-800"
                  onClick={() => setShowDelete(false)}
                >
                  No
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EditPostModal;
