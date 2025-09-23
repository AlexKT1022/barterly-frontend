import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router";
import { useLoaderData } from "react-router";

import Pagination from "../components/Pagination";
import ProductsList from "../components/Categories/ProductsList";
import CategorySelection from "../components/Categories/CategorySelection";

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

  // Filters
  const [searchProducts, setSearchProducts] = useState("");
  const postData = useLoaderData() || [];

  return (
    <div className="mx-auto md:max-w-3xl lg:max-w-6xl text-gray-800">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-lg font-semibold">Trading Marketplace</h2>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 border rounded px-3 py-2"
          value={searchProducts}
          onChange={(e) => setSearchProducts(e.target.value)}
        />
      </div>

      {/* Category Options */}
      <div className="mb-8 hidden md:block">
        {/* <h3 className="font-semibold mb-4">Browse Categories</h3> */}
      </div>
      {/* Product Grid + Pagination */}
      <div>
        <h3 className="font-semibold mb-4">Recent Products</h3>
        <ProductsList posts={postData} search={searchProducts} />
      </div>
    </div>
  );
};
export default Categories;
