import { useState } from "react";

const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(
    images
      ? images[0]?.imageUrl
      : "https://t4.ftcdn.net/jpg/16/71/95/79/360_F_1671957940_D2dYs3RXTsWEOeS7xY20y6RStabYt6DV.jpg"
  );

  const imgFail = (event) => {
    event.target.src =
      "https://t4.ftcdn.net/jpg/16/71/95/79/360_F_1671957940_D2dYs3RXTsWEOeS7xY20y6RStabYt6DV.jpg";
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4">
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/4 flex justify-center items-center">
        <div className="w-full sm:w-4/5 md:w-full h-96 sm:h-[500px] bg-gray-100 border rounded-lg flex justify-center items-center">
          <img
            src={
              mainImage ||
              "https://t4.ftcdn.net/jpg/16/71/95/79/360_F_1671957940_D2dYs3RXTsWEOeS7xY20y6RStabYt6DV.jpg"
            }
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
            onError={imgFail}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
