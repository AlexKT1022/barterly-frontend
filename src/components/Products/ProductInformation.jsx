// src/components/ProductInfo.js
import React from 'react';

const ProductInformation = ({ product }) => {
    return (
        <div className="w-full lg:w-1/2 space-y-6">
            <div>
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <div className="flex gap-2 mt-2 text-sm">
                    <label className="bg-gray-200 px-2 py-1 rounded">{product.category}</label>
                    <label className="bg-green-100 text-green-700 px-2 py-1 rounded">{product.condition}</label>
                    <label className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{product.status}</label>
                </div>
            </div>

            <div className="grid flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-6 py-2 rounded">Contact Seller</button>
                <button className="bg-gray-200 px-6 py-2 rounded">❤️ Add to Wishlist</button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded">Make Offer</button>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Views:</strong> {product.views}</p>
                <p><strong>Watchers:</strong> {product.watchers}</p>
                <p><strong>Posted:</strong> {product.posted}</p>
                <p><strong>Updated:</strong> {product.updated}</p>
            </div>
        </div>
    );
};

export default ProductInformation;
