import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router";
import { useLoaderData } from "react-router";

import Pagination from "../components/Pagination";
import ProductsList from "../components/Categories/ProductsList";
import ProductCard from "../components/Categories/ProductCard";
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
  const products = [
    {
      id: 1,
      name: "iPhone 13",
      category: "Electronics",
      status: "Available",
      description:
        "iPhone 13 in excellent condition. 128GB storage, unlocked, and includes original packaging and charger.",
      image: "https://m.media-amazon.com/images/I/51UuPZLMaCL._AC_SX679_.jpg",
    },
    {
      id: 2,
      name: "Vintage Jacket",
      category: "Clothing",
      status: "Sold",
      description:
        "Retro-style leather jacket from the 80s. Well-preserved with minimal wear. Size M.",
      image:
        "https://images.unsplash.com/photo-1618354691373-21b62e5c1ebd?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Programming Book",
      category: "Books",
      status: "Available",
      description:
        "Learn modern JavaScript with this comprehensive guide. Great for beginners and intermediate developers.",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e8a0f345aa8?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Garden Tools",
      category: "Home & Garden",
      status: "Pending",
      description:
        "Complete garden tool set including shovel, rake, gloves, and pruning shears. Lightly used.",
      image:
        "https://images.unsplash.com/photo-1586864387780-838cf36d9b8f?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "Wireless Headphones",
      category: "Electronics",
      status: "Available",
      description:
        "Noise-cancelling over-ear Bluetooth headphones with 20-hour battery life. Includes charging cable and case.",
      image:
        "https://images.unsplash.com/photo-1589384562126-4c53c3e2ba2c?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      name: "Leather Boots",
      category: "Clothing",
      status: "Available",
      description:
        "Premium leather boots in dark brown. Durable and stylish—perfect for casual or semi-formal wear. Size 10.",
      image:
        "https://images.unsplash.com/photo-1616628182506-989d896b6103?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      name: "Cookbook",
      category: "Books",
      status: "Sold",
      description:
        "Hardcover cookbook with 100+ easy and healthy recipes. Excellent condition with no markings or damage.",
      image:
        "https://images.unsplash.com/photo-1613145993481-5b11c5c7df8b?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      name: "Desk Lamp",
      category: "Home & Garden",
      status: "Available",
      description:
        "Adjustable LED desk lamp with touch controls and brightness settings. Sleek design, perfect for study or office.",
      image:
        "https://images.unsplash.com/photo-1601933471667-593dcf3e1fc3?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 9,
      name: "Smart Watch",
      category: "Electronics",
      status: "Pending",
      description:
        "Fitness-focused smart watch with heart rate monitor, sleep tracking, and mobile notifications. Water-resistant.",
      image:
        "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 10,
      name: "Winter Coat",
      category: "Clothing",
      status: "Available",
      description:
        "Warm and insulated winter coat with hood and zipper. Perfect for cold weather. Size L.",
      image:
        "https://images.unsplash.com/photo-1602810316636-fd3cba6004a4?auto=format&fit=crop&w=500&q=60",
    },
  ];
  // Filters
  const [searchProducts, setSearchProducts] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  // Pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  // Filtered list
  const filteredProducts = useMemo(() => {
    const q = searchProducts.toLowerCase();
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(q);
      const matchesCategory = selectedCategory
        ? p.category === selectedCategory
        : true;
      const matchesStatus = selectedStatus ? p.status === selectedStatus : true;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [products, searchProducts, selectedCategory, selectedStatus]);
  // Reset to page 1 if filters/pageSize change
  useEffect(() => {
    setPage(1);
  }, [searchProducts, selectedCategory, selectedStatus, pageSize]);
  // Slice for current page
  const total = filteredProducts.length;
  const start = (page - 1) * pageSize;
  const pageItems = filteredProducts.slice(start, start + pageSize);
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory((prev) => (prev === categoryName ? "" : categoryName));
  };

  const postData = useLoaderData() || [];

  return (
    <div className="mx-auto md:max-w-3xl lg:max-w-6xl text-gray-800">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-lg font-semibold">Product Marketplace</h2>
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
        <select
          className="border rounded px-3 py-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select category</option>
          {categories.map((c, i) => (
            <option key={i} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
        <select
          className="border rounded px-3 py-2"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">Status</option>
          <option value="Available">Available</option>
          <option value="Sold">Sold</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Category Options */}
      <div className="mb-8 hidden md:block">
        <h3 className="font-semibold mb-4">Browse Categories</h3>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-2">
          {categories.map((c, i) => (
            <div
              key={i}
              onClick={() => handleCategoryClick(c.name)}
              className={`flex-shrink-0 w-24 border rounded flex flex-col items-center justify-center p-4 cursor-pointer transition hover:bg-gray-100 snap-start
                ${
                  selectedCategory === c.name ? "bg-sky-100 border-sky-400" : ""
                }`}
            >
              {c.icon}

              <span className="text-sm text-center">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Product Grid + Pagination */}
      <div>
        <h3 className="font-semibold mb-4">Recent Products</h3>
        {pageItems.length === 0 ? (
          <div className="text-gray-500">No products match your filters.</div>
        ) : (
          <>
            <ProductsList posts={postData} search={searchProducts} />

            {/* Reusable Pagination */}
            <Pagination
              className="mt-6"
              page={page}
              pageSize={pageSize}
              total={total}
              onPageChange={setPage}
              onPageSizeChange={(n) => {
                setPageSize(n);
                setPage(1);
              }}
              /* pageSizeOptions omitted to use component default [4,8,12,16] */
              siblingCount={1}
              showSummary
              showPageSize
            />
          </>
        )}
      </div>
    </div>
  );
};
export default Categories;
