import { useState } from "react";

import MakeOfferModal from "../Users/MakeOfferModal";

const status = {
  open: "bg-green-100 text-green-600",
  pending: "bg-yellow-100 text-yellow-600",
  closed: "bg-red-100 text-red-600",
};

const ProductInformation = ({ product }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="w-full lg:w-2/3 space-y-6">
        {active && <MakeOfferModal setActive={setActive} />}
        {/* Product Title and Labels */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{product.title}</h1>
          <div className="flex flex-wrap gap-2 mt-2 text-sm">
            {/* <span className='bg-gray-200 px-2 py-1 rounded'>{product.category}</span> */}
            <span className={`px-2 py-1 rounded ${status[product.status]}`}>
              {product.status}
            </span>

            {/* Categories */}
            {/* <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {product.condition}
          </span> */}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-black text-white px-6 py-2 rounded w-full sm:w-auto">
            Contact Seller
          </button>
          {/* <button className='bg-gray-200 px-6 py-2 rounded w-full sm:w-auto'>
          ❤️ Add to Wishlist
        </button> */}
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded w-full sm:w-auto"
            onClick={() => setActive(true)}
          >
            Make Offer
          </button>
        </div>

        {/* Product Stats */}
        <div className="text-sm text-gray-600 space-y-1">
          {/* <p>
          <strong>Views:</strong> {product.views}
        </p> */}
          {/* <p>
          <strong>Watchers:</strong> {product.watchers}
        </p> */}
          <p>
            <strong>Posted:</strong> {product.createdAt.slice(0, 10)}
          </p>
          <p>
            <strong>Updated:</strong>
            {product.updatedAt === null ? " No updates" : product.updateAt}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductInformation;
