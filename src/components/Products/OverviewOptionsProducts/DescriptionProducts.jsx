// src/components/Products/DescriptionProducts.js
import React from 'react';

const DescriptionProducts = ({ product }) => {
    return (
        <>
        <div className="p-5 md:p-8 bg-gray-50 mb-6  ">
        <div>
                <h3 className="text-2xl font-semibold mb-1 bg-gray-50">Product Description</h3>
                <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Features */}
            <div className="mt-6 mb-6">
                <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-gray-700">
                    {product.features.map((feature, index) => (
                        <li>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
            
        </>
    );
};

export default DescriptionProducts;
