import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const NewPostModal = ({ setActive, categories }) => {
    const [itemModal, setItemModal] = useState(false);
    const [category_id, setCategory] = useState("");
    const [items, setItems] = useState([]);


    const handlePostSubmit = async (event) => {
        event.preventDefault();
        const newFormData = new FormData(event.currentTarget);

        const title = newFormData.get("title");
        const description = newFormData.get("postDesc");
        const category_id = newFormData.get("category");
        const formData = { title, description, category_id, items };
        const token = sessionStorage.getItem('token');

        try {
            const res = await fetch(
                'https://barterly-backend.onrender.com/api/posts',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (res.status === 201) {
                window.location.reload();
                return;
            }

            if (!res.ok) {
                throw new Error((await res.text()) || 'Submission failed');
            }

            await res.json();
            window.location.reload();
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    // Form for items
    const handleSaveItems = (event) => {
        event.preventDefault();
        const newFormData = new FormData(event.currentTarget);

        const itemsObj = {
            name: newFormData.get('name'),
            description: newFormData.get('itemDesc'),
            condition: newFormData.get('condition'),
            image_url: newFormData.get('imgUrl'),
            quantity: Number(newFormData.get('qty')),
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
                id='post-modal'
                className='mx-auto bg-white border border-zinc-300 shadow-xl rounded-lg fixed p-5 inset-x-5 inset-y-25 lg:inset-x-1/3'
            >
                {/* Items Section */}
                <div className='mb-2'>
                    {items.length === 0 ? (
                        <p className='text-center'>
                            Please add items to your post before submitting
                        </p>
                    ) : (
                        <>
                            <p className='text-center mb-1 w-full bg-zinc-800 text-white p-1'>
                                Listed Items
                            </p>
                            <ul>
                                {items.map((item, index) => (
                                    <li
                                        key={index}
                                        className='flex justify-between items-center p-1'
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
                <div className='flex justify-center mt-3'>
                    <button
                        className='w-32 p-2 bg-red-700 hover:bg-red-600 text-white mb-5 rounded-sm'
                        onClick={() => setItemModal(true)}
                    >
                        + Add Item
                    </button>
                </div>

                {/* Post form  */}
                <p className='text-center mb-1 w-full bg-zinc-800 text-white p-1'>
                    Post Form
                </p>
                <form
                    className='flex flex-col gap-5 mt-5 mb-5'
                    onSubmit={handlePostSubmit}
                >
                    <input
                        name='title'
                        className='w-full p-2 rounded-md border border-zinc-300'
                        placeholder='Title'
                        required
                    ></input>
                    <select
                        name="category"
                        onChange={(e) => setCategory(Number(e.target.value))}
                        className="w-full p-2 rounded-md border border-zinc-300"
                        value={category_id}
                        required
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat) => {
                            return (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            );
                        })}
                    </select>
                    <textarea
                        name='postDesc'
                        className='w-full p-2 rounded-md border border-zinc-300'
                        placeholder='Description'
                        required
                    ></textarea>

                    <div className='flex gap-5 justify-center'>
                        <button
                            className='p-3 w-32 bg-green-600 hover:bg-green-500 text-white rounded-md'
                            type='submit'
                        >
                            Submit
                        </button>
                        <button
                            className='p-3 w-32 bg-zinc-800 hover:bg-zinc-500 text-white rounded-md'
                            type='button'
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
                        id='item-modal'
                        className='mx-auto bg-white border border-zinc-300 shadow-xl rounded-lg fixed p-5 inset-x-5 inset-y-25 lg:inset-x-1/3'
                    >
                        <h1 className='text-center mb-5'>Add Item</h1>
                        <form className='flex flex-col gap-5' onSubmit={handleSaveItems}>
                            <input
                                name='name'
                                className='w-full p-2 rounded-md border border-zinc-300'
                                placeholder='Item Name'
                                required
                            ></input>
                            <input
                                name='itemDesc'
                                className='w-full p-2 rounded-md border border-zinc-300'
                                placeholder='Item Description'
                                required
                            ></input>
                            <select
                                className='w-full p-2 rounded-md border border-zinc-300'
                                name='condition'
                            >
                                <option value=''>Select Condition</option>
                                <option>New</option>
                                <option>Like New</option>
                                <option>Used - Good</option>
                                <option>Used - Okay</option>
                                <option>Broken</option>
                            </select>
                            <input
                                name='imgUrl'
                                type='text' // change to url for live
                                className='w-full p-2 rounded-md border border-zinc-300'
                                placeholder='Item Image Url'
                                required
                            ></input>
                            <input
                                name='qty'
                                type='number'
                                className='w-full p-2 rounded-md border border-zinc-300'
                                placeholder='Quantity'
                                defaultValue='1'
                                required
                            ></input>
                            <div className='gap-5 flex justify-center'>
                                <button className='w-32 p-3 bg-green-600 hover:bg-green-500 text-white rounded-md'>
                                    Save
                                </button>
                                <button
                                    className='w-32 p-3 bg-zinc-800 hover:bg-zinc-500 text-white rounded-md'
                                    type='button'
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
=======
import { useState, useEffect } from 'react';

const NewProductForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImage] = useState('');
  const [status, setStatus] = useState('open');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [condition, setCondition] = useState('');
  const [category_id, setCategory] = useState('');
  const [categoriesList, setCategoriesList] = useState([]);
  const [author, setAuthor] = useState('');

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          'https://barterly-backend.onrender.com/api/categories'
        );
        if (!res.ok) throw new Error('Failed to fetch categories');
        const data = await res.json();
        setCategoriesList(data.categories);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);
  // Reload page after submission
  useEffect(() => {
    if (submitted) window.location.reload();
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = sessionStorage.getItem('token');
      if (!token) throw new Error('No authentication token found');

      const body = {
        author,
        title,
        description,
        status,
        imageURL,
        userId: 1,
        quantity,
        condition,
        category_id,
        items: [
          {
            name: name || title || 'Unnamed Item',
            description,
            image_url: imageURL,
            quantity: 1,
            authorId: 1,
          },
        ],
      };

      const res = await fetch(
        'https://barterly-backend.onrender.com/api/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        }
      );

      if (!res.ok) throw new Error('Failed to create product');

      const newPost = await res.json();
      onAdd(newPost);

      // Reset form
      setTitle('');
      setDescription('');
      setImage('');
      setStatus('open');
      setName('');
      setQuantity('');
      setCondition('');
      setCategory('');
      setAuthor('');
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Quantity options 1–10
  const quantityOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200'
    >
      <h3 className='text-xl font-semibold text-gray-800 mb-4'>
        Add New Product
      </h3>

      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='border border-gray-300 p-3 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
        required
      />

      <textarea
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='border border-gray-300 p-3 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
      />

      <select
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        className='border border-gray-300 p-3 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
        required
      >
        <option value=''>Select Condition</option>
        <option value='New'>New</option>
        <option value='Like New'>Like New</option>
        <option value='Used - Excellent'>Used - Excellent</option>
        <option value='Used - Good'>Used - Good</option>
      </select>

      <input
        type='text'
        placeholder='Image URL'
        value={imageURL}
        onChange={(e) => setImage(e.target.value)}
        className='border border-gray-300 p-3 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
      />

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className='border border-gray-300 p-3 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
        required
      >
        <option value=''>Select Quantity</option>
        {quantityOptions.map((q) => (
          <option key={q} value={q}>
            {q}
          </option>
        ))}
      </select>

      {/* Category dropdown */}
      <select
        value={category_id}
        onChange={(e) => setCategory(Number(e.target.value))}
        className='border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
        required
      >
        <option value=''>Select Category</option>
        {categoriesList.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      <button
        type='submit'
        className='w-full bg-green-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-green-500 transition-colors disabled:opacity-50'
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Add Product'}
      </button>
    </form>
  );
};

export default NewPostModal;