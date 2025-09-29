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
  const items = data.items;

  return (
    <>
      <div
        id="post-modal"
        className="mx-auto bg-white border border-zinc-300 shadow-xl rounded-lg fixed p-5 inset-x-5 inset-y-25 lg:inset-x-1/3"
      >
        <h1 className="text-center mb-2">Edit Post</h1>
        <form>
          <div className="flex flex-col justify-evenly gap-3 mb-5">
            <input
              defaultValue={data.title}
              className="w-full border border-zinc-300 p-2 rounded-md"
            ></input>
            <input
              defaultValue={data.description}
              className="w-full border border-zinc-300 p-2 rounded-md"
            ></input>
            <select className="w-full p-2 rounded-md border border-zinc-300">
              <option value="">{data.status}</option>
              <option value="closed">closed</option>
            </select>
          </div>
          <p className="text-center bg-zinc-800 text-white p-1 mb-3">
            Items Listed
          </p>
          <ul className="max-h-96 mb-5">
            {items.map((item, index) => {
              return (
                <>
                  <li
                    key={item.id}
                    className="flex justify-between items-center p-2 border border-zinc-500 rounded-md"
                  >
                    {index + 1}: {item.name} <div>qty:{item.quantity}</div>
                  </li>
                </>
              );
            })}
          </ul>
          <div className="flex justify-center gap-5 mb-5">
            <button className="w-32 p-3 bg-green-600 hover:bg-green-500 text-white rounded-md">
              Save
            </button>
            <button
              className="w-32 p-3 bg-zinc-800 hover:bg-zinc-500 text-white rounded-md"
              type="button"
              onClick={() => setActive(false)}
            >
              Cancel
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <button
            className="p-5 bg-red-700 hover:bg-red-600 text-white"
            onClick={() => setShowDelete(true)}
          >
            <FaTrash />
          </button>
        </div>

        {showDelete && (
          <>
            <div
              id="delete-modal"
              className="mx-auto bg-white border border-zinc-300 shadow-xl rounded-lg relative bottom-30 p-5"
            >
              <p className="text-center text-xs">deleting is permanent</p>
              <p className="text-center text-red-600 font-semibold">
                Are you sure you want to delete?!
              </p>

              <div className="flex justify-evenly mt-2">
                <button
                  className="w-32 p-3 bg-green-600 hover:bg-green-500 text-white rounded-md"
                  type="button"
                  onClick={() => deletePost(data.id)}
                >
                  Yes
                </button>
                <button
                  className="w-32 p-3 bg-zinc-800 hover:bg-zinc-500 text-white rounded-md"
                  type="button"
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
