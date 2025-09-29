import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const NewPostModal = ({ setActive }) => {
  const [itemModal, setItemModal] = useState(false);
  const [items, setItems] = useState([]);

  const handlePostSubmit = async (event) => {
    event.preventDefault();
    const newFormData = new FormData(event.currentTarget);

    const title = newFormData.get("title");
    const description = newFormData.get("postDesc");

    const formData = { title, description, items };

    const token = sessionStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 201) {
        window.location.reload();
        return;
      }

      if (!res.ok) {
        throw new Error((await res.text()) || "Submission failed");
      }

      await res.json();
      window.location.reload();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  //   Form for items
  const handleSaveItems = (event) => {
    event.preventDefault();
    const newFormData = new FormData(event.currentTarget);

    const itemsObj = {
      name: newFormData.get("name"),
      description: newFormData.get("itemDesc"),
      condition: newFormData.get("condition"),
      image_url: newFormData.get("imgUrl"),
      quantity: Number(newFormData.get("qty")),
    };

    // append itemsObj to items[]
    const arr = [...items, itemsObj];

    setItems(arr);
    setItemModal(false);
  };

  const onDeleteItem = (itemIndex) => {
    setItems(items.filter((__, index) => index !== itemIndex));
    return setItems;
  };

  return (
    <>
      <div
        id="post-modal"
        className="mx-auto bg-white border border-zinc-300 shadow-xl rounded-lg fixed p-5 inset-x-5 inset-y-25 lg:inset-x-1/3"
      >
        {/* Items Section */}
        <div className="mb-2">
          {items.length === 0 ? (
            <p className="text-center">
              Please add items to your post before submitting
            </p>
          ) : (
            <>
              <p className="text-center mb-1 w-full bg-zinc-800 text-white p-1">
                Listed Items
              </p>
              <ul>
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-1"
                  >
                    {item.name}
                    <div>qty: {item.quantity}</div>
                    <FaTrash onClick={() => onDeleteItem(index)} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="flex justify-center mt-3">
          <button
            className="w-32 p-2 bg-red-700 hover:bg-red-600 text-white mb-5 rounded-sm"
            onClick={() => setItemModal(true)}
          >
            + Add Item
          </button>
        </div>

        {/* End of Items */}

        {/* Post form  */}
        <p className="text-center mb-1 w-full bg-zinc-800 text-white p-1">
          Post Form
        </p>
        <form
          className="flex flex-col gap-5 mt-5 mb-5"
          onSubmit={handlePostSubmit}
        >
          <input
            name="title"
            className="w-full p-2 rounded-md border border-zinc-300"
            placeholder="Title"
            required
          ></input>
          <textarea
            name="postDesc"
            className="w-full p-2 rounded-md border border-zinc-300"
            placeholder="Description"
            required
          ></textarea>

          <div className="flex gap-5 justify-center">
            <button
              className="p-3 w-32 bg-green-600 hover:bg-green-500 text-white rounded-md"
              type="submit"
            >
              Submit
            </button>
            <button
              className="p-3 w-32 bg-zinc-800 hover:bg-zinc-500 text-white rounded-md"
              type="button"
              onClick={() => setActive(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* post item modal */}
      {itemModal && (
        <>
          <div
            id="item-modal"
            className="mx-auto bg-white border border-zinc-300 shadow-xl rounded-lg fixed p-5 inset-x-5 inset-y-25 lg:inset-x-1/3"
          >
            <h1 className="text-center mb-5">Add Item</h1>
            <form className="flex flex-col gap-5" onSubmit={handleSaveItems}>
              <input
                name="name"
                className="w-full p-2 rounded-md border border-zinc-300"
                placeholder="Item Name"
                required
              ></input>
              <input
                name="itemDesc"
                className="w-full p-2 rounded-md border border-zinc-300"
                placeholder="Item Description"
                required
              ></input>
              <select
                className="w-full p-2 rounded-md border border-zinc-300"
                name="condition"
              >
                <option value="">Select Condition</option>
                <option>New</option>
                <option>Like New</option>
                <option>Used - Good</option>
                <option>Used - Okay</option>
                <option>Broken</option>
              </select>
              <input
                name="imgUrl"
                type="text" // change to url for live
                className="w-full p-2 rounded-md border border-zinc-300"
                placeholder="Item Image Url"
                required
              ></input>
              <input
                name="qty"
                type="number"
                className="w-full p-2 rounded-md border border-zinc-300"
                placeholder="Quantity"
                defaultValue="1"
                required
              ></input>
              <div className="gap-5 flex justify-center">
                <button className="w-32 p-3 bg-green-600 hover:bg-green-500 text-white rounded-md">
                  Save
                </button>
                <button
                  className="w-32 p-3 bg-zinc-800 hover:bg-zinc-500 text-white rounded-md"
                  type="button"
                  onClick={() => setItemModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default NewPostModal;
