import { useState } from "react";
import { useLoaderData } from "react-router";
import NewProductForm from "./NewProductForm";
import ProductsList from "../components/Categories/ProductsList";

import {
  FaTv,
  FaTshirt,
  FaBook,
  FaHome,
  FaFootballBall,
  FaCar,
  FaGamepad,
  FaRegGem,
  FaPencilRuler,
  FaCat,
  FaBabyCarriage,
  FaGuitar,
  FaPaintBrush,
  FaWrench,
  FaCouch,
  FaPeopleCarry,
} from "react-icons/fa";

const Categories = () => {
  const categories = [
    { name: "Electronics", icon: <FaTv /> },
    { name: "Clothing", icon: <FaTshirt /> },
    { name: "Books", icon: <FaBook /> },
    { name: "Home & Garden", icon: <FaHome /> },
    { name: "Sports", icon: <FaFootballBall /> },
    { name: "Automotive", icon: <FaCar /> },
    { name: "Toys & Games", icon: <FaGamepad /> },
    { name: "Jewelry & Accessories", icon: <FaRegGem /> },
    { name: "Office Supplies", icon: <FaPencilRuler /> },
    { name: "Pet Supplies", icon: <FaCat /> },
    { name: "Baby Products", icon: <FaBabyCarriage /> },
    { name: "Music & Instruments", icon: <FaGuitar /> },
    { name: "Art & Craft Supplies", icon: <FaPaintBrush /> },
    { name: "Tools & Hardware", icon: <FaWrench /> },
    { name: "Furniture", icon: <FaCouch /> },
    { name: "Services", icon: <FaPeopleCarry /> },
  ];

  const [searchProducts, setSearchProducts] = useState("");
  const [showForm, setShowForm] = useState(false);
  const postData = useLoaderData() || [];

  // Get token from sessionStorage to determine if user is logged in
  const token = sessionStorage.getItem("token");
  const isLoggedIn = !!token; // true if token exists

  const onAdd = (item) => {
    postData.push({ ...item, username: "test" });
    setShowForm(false); 
  };

  return (
    <div className="mx-auto md:max-w-3xl lg:max-w-6xl text-gray-800">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-lg font-semibold">Trading Marketplace</h2>

        {/* Only show button if user is logged in */}
        {isLoggedIn && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
          >
            + New Post
          </button>
        )}
      </div>

      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 border rounded px-3 py-2"
          value={searchProducts}
          onChange={(e) => setSearchProducts(e.target.value)}
        />
      </div>

      {/* Products */}
      <div>
        <h3 className="font-semibold mb-4">Recent Products</h3>
        <ProductsList posts={postData} search={searchProducts} />
      </div>

      {/* Modal with form */}
      {showForm && (
        <div className="fixed mx-auto inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Create New Post to Trade</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            </div>
            <NewProductForm onAdd={onAdd} token={token} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
