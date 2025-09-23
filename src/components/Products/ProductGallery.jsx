// src/components/ProductImageGallery.js
import { useState } from "react";

const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0].imageUrl);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4">
      {/* Main Image */}
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/4 flex justify-center items-center">
        <div className="w-full sm:w-4/5 md:w-full h-96 sm:h-[500px] bg-gray-100 rounded-lg border flex justify-center items-center">
          <img
            src={mainImage}
            alt="Main product"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-2 lg:w-1/4 overflow-x-auto lg:overflow-visible">
        {images.map((src, index) => (
          <img
            key={index}
            src={src.imageUrl}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setMainImage(src.imageUrl)}
            className="rounded-lg border cursor-pointer w-20 h-20 object-cover flex-shrink-0 hover:ring-2 hover:ring-blue-500 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
