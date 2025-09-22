import { useState } from 'react';
import { Link } from 'react-router';

const Categories = () => {
  const categories = [
    { name: 'Electronics' },
    { name: 'Clothing' },
    { name: 'Books' },
    { name: 'Home & Garden' },
    { name: 'Sports' },
    { name: 'Automotive' },
    { name: 'Toys & Games' },
    { name: 'Jewelry & Accessories' },
    { name: 'Office Supplies' },
    { name: 'Pet Supplies' },
    { name: 'Baby Products' },
    { name: 'Groceries' },
    { name: 'Music & Instruments' },
    { name: 'Art & Craft Supplies' },
    { name: 'Tools & Hardware' },
    { name: 'Furniture' },
  ];

  const products = [
    {
      id: 1,
      name: 'iPhone 13',
      category: 'Electronics',
      status: 'Available',
      description:
        'iPhone 13 in excellent condition. 128GB storage, unlocked, and includes original packaging and charger.',
      image: 'https://m.media-amazon.com/images/I/51UuPZLMaCL._AC_SX679_.jpg',
    },
    {
      id: 2,
      name: 'Vintage Jacket',
      category: 'Clothing',
      status: 'Sold',
      description:
        'Retro-style leather jacket from the 80s. Well-preserved with minimal wear. Size M.',
      image:
        'https://images.unsplash.com/photo-1618354691373-21b62e5c1ebd?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      name: 'Programming Book',
      category: 'Books',
      status: 'Available',
      description:
        'Learn modern JavaScript with this comprehensive guide. Great for beginners and intermediate developers.',
      image:
        'https://images.unsplash.com/photo-1581090700227-1e8a0f345aa8?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      name: 'Garden Tools',
      category: 'Home & Garden',
      status: 'Pending',
      description:
        'Complete garden tool set including shovel, rake, gloves, and pruning shears. Lightly used.',
      image:
        'https://images.unsplash.com/photo-1586864387780-838cf36d9b8f?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 5,
      name: 'Wireless Headphones',
      category: 'Electronics',
      status: 'Available',
      description:
        'Noise-cancelling over-ear Bluetooth headphones with 20-hour battery life. Includes charging cable and case.',
      image:
        'https://images.unsplash.com/photo-1589384562126-4c53c3e2ba2c?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 6,
      name: 'Leather Boots',
      category: 'Clothing',
      status: 'Available',
      description:
        'Premium leather boots in dark brown. Durable and stylish—perfect for casual or semi-formal wear. Size 10.',
      image:
        'https://images.unsplash.com/photo-1616628182506-989d896b6103?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 7,
      name: 'Cookbook',
      category: 'Books',
      status: 'Sold',
      description:
        'Hardcover cookbook with 100+ easy and healthy recipes. Excellent condition with no markings or damage.',
      image:
        'https://images.unsplash.com/photo-1613145993481-5b11c5c7df8b?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 8,
      name: 'Desk Lamp',
      category: 'Home & Garden',
      status: 'Available',
      description:
        'Adjustable LED desk lamp with touch controls and brightness settings. Sleek design, perfect for study or office.',
      image:
        'https://images.unsplash.com/photo-1601933471667-593dcf3e1fc3?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 9,
      name: 'Smart Watch',
      category: 'Electronics',
      status: 'Pending',
      description:
        'Fitness-focused smart watch with heart rate monitor, sleep tracking, and mobile notifications. Water-resistant.',
      image:
        'https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 10,
      name: 'Winter Coat',
      category: 'Clothing',
      status: 'Available',
      description:
        'Warm and insulated winter coat with hood and zipper. Perfect for cold weather. Size L.',
      image:
        'https://images.unsplash.com/photo-1602810316636-fd3cba6004a4?auto=format&fit=crop&w=500&q=60',
    },
  ];

  // Filter States
  const [searchProducts, setSearchProducts] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchProducts.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesStatus = selectedStatus ? product.status === selectedStatus : true;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory((prev) => (prev === categoryName ? '' : categoryName));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto text-gray-800">
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
          {categories.map((c, index) => (
            <option key={index} value={c.name}>
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

      {/* Category Cards */}
<div className="mb-8 hidden md:block">
  <h3 className="font-semibold mb-4">Browse Categories</h3>
  
  {/* Scrollable container with snap */}
  <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-2">
    {categories.map((c, index) => (
      <div
        key={index}
        onClick={() => handleCategoryClick(c.name)}
        className={`flex-shrink-0 w-24 border rounded flex flex-col items-center justify-center p-4 cursor-pointer transition hover:bg-gray-100 snap-start
          ${selectedCategory === c.name ? 'bg-sky-100 border-sky-400' : ''}`}
      >
        <img
          src="src/assets/electronics.png"
          alt={c.name}
          className="w-12 h-12 object-contain mb-2"
        />
        <span className="text-sm text-center">{c.name}</span>
      </div>
    ))}
  </div>
</div>


      {/* Product Grid */}
      <div>
        <h3 className="font-semibold mb-4">Recent Products</h3>
        {filteredProducts.length === 0 ? (
          <div className="text-gray-500">No products match your filters.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="border rounded-lg p-4 flex flex-col justify-center"
              >
                <div className='grid place-items-center'>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-30 w-50% object-cover rounded mb-3 bg-gray-100"
                  />
                  <h4 className="font-semibold">{p.name}</h4>
                  <div className="text-sm text-gray-500">{p.category}</div>
                  <div
                    className={`mt-1 text-xs inline-block px-2 py-1 rounded 
                      ${
                        p.status === 'Available'
                          ? 'bg-green-100 text-green-600'
                          : p.status === 'Sold'
                          ? 'bg-red-100 text-red-600'
                          : 'bg-yellow-100 text-yellow-600'
                      }`}
                  >
                    {p.status}
                  </div>
                </div>
                <Link
                  to={`/product/${p.id}`}
                  className="block mt-4 text-center px-4 h-10 rounded-md bg-sky-500/75 text-white transition-colors duration-300 hover:bg-sky-700 shadow-sm"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;