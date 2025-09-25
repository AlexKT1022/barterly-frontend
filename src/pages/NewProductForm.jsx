import { useState, useEffect } from "react";



const NewProductForm = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImage] = useState("");
    const [status, setStatus] = useState("open");
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [quantity, setQuantity] = useState("")

    useEffect(() => {
        if (submitted) {
            window.location.reload();
        }
    }, [submitted]);

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true);

        try {
            const token = sessionStorage.getItem("token");
            const body = {
                title,
                description,
                status,
                imageURL,
                userId: 1,
                quantity,
                items: [
                    {
                        name: name || title || "Unnamed Item",
                        description,
                        image_url: imageURL,
                        quantity: 1,
                    },
                ],
            };
            const res = await fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
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
            setName("")
            setQuantity("")

            setSubmitted(true);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const maxQuantity = Math.min(10);
    const quantityOptions = [];

    for (let i = 1; i <= maxQuantity; i++) {
        quantityOptions.push(i);
    }

    return (
        <form onSubmit={handleSubmit} className="border p-4 rounded mb-6">
            <h3 className="font-semibold mb-2">Add New Product</h3>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full mb-2 rounded"
                required
            />

            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 w-full mb-2 rounded"
            />

            <input
                type="text"
                placeholder="Image URL"
                value={imageURL}
                onChange={(e) => setImage(e.target.value)}
                className="border p-2 w-full mb-2 rounded"
            />

            <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border p-2 w-full mb-2 rounded"
            >
                <option value="">Select quantity</option>
                {quantityOptions.map((quantity) => (
                    <option key={quantity} value={quantity}>
                        {quantity}
                    </option>
                ))}
            </select>


            <button
                type="submit"
                className="bg-green-600 text-black border px-4 py-2 rounded hover:bg-green-500"
                disabled={loading}
            >
                {loading ? "Saving..." : "Add Product"}
            </button>
        </form>
    );
};

export default NewProductForm;
