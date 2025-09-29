import { useState, useEffect } from "react";

const NewProductForm = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImage] = useState("");
    const [status, setStatus] = useState("open");
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [quantity, setQuantity] = useState("");
    const [condition, setCondition] = useState("");
    const [category_id, setCategory] = useState("");
    const [categoriesList, setCategoriesList] = useState([]);
    const [author, setAuthor] = useState("");

    // Fetch categories from the API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/categories");
                if (!res.ok) throw new Error("Failed to fetch categories");
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
            const token = sessionStorage.getItem("token");
            if (!token) throw new Error("No authentication token found");

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
                        name: name || title || "Unnamed Item",
                        description,
                        image_url: imageURL,
                        quantity: 1,
                        authorId:1,
                    },
                ],
            };

            const res = await fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });

            if (!res.ok) throw new Error("Failed to create product");

            const newPost = await res.json();
            onAdd(newPost);

            // Reset form
            setTitle("");
            setDescription("");
            setImage("");
            setStatus("open");
            setName("");
            setQuantity("");
            setCondition("");
            setCategory("");
            setAuthor("");
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
            className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200"
        >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Product</h3>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 p-3 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />

            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 p-3 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="border border-gray-300 p-3 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            >
                <option value="">Select Condition</option>
                <option value="New">New</option>
                <option value="Like New">Like New</option>
                <option value="Used - Excellent">Used - Excellent</option>
                <option value="Used - Good">Used - Good</option>
            </select>

            <input
                type="text"
                placeholder="Image URL"
                value={imageURL}
                onChange={(e) => setImage(e.target.value)}
                className="border border-gray-300 p-3 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-300 p-3 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            >
                <option value="">Select Quantity</option>
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
                className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            >
                <option value="">Select Category</option>
                {categoriesList.map((c) => (
                    <option key={c.id} value={c.id}>
                        {c.name}
                    </option>
                ))}
            </select>

            <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-green-500 transition-colors disabled:opacity-50"
                disabled={loading}
            >
                {loading ? "Saving..." : "Add Product"}
            </button>
        </form>
    );
};

export default NewProductForm;
