// src/components/ProductImageGallery.js
import React from 'react';

const ProductGallery = ({ images }) => {
    return (
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Product view ${index + 1}`}
                    className="rounded-lg border max-w-full h-auto object-contain bg-gray-100"
                />
            ))}
        </div>
    );
};

export default ProductGallery;
