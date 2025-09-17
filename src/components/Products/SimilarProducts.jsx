// src/components/SimilarProducts.js
import React from 'react';
import { Link } from 'react-router';

const SimilarProducts = ({ similar }) => {
    return (
        <div className="hidden xl:block w-1/4">
            <h3 className="text-lg font-semibold mb-3">Similar Products</h3>
            <div className="space-y-4">
                {similar.map((product) => (
                    <Link
                        to={`/product/${product.id}`}
                        key={product.id}
                        className="flex gap-3 items-center hover:bg-gray-100 p-2 rounded"
                    >
                        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                        <div>
                            <p className="font-medium">{product.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SimilarProducts;
