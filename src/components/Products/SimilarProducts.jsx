// src/components/SimilarProducts.js
import React from 'react';
import { Link } from 'react-router';

const SimilarProducts = ({ similar }) => {
  return (
    <div className='w-full lg:w-1/4 mt-6 lg:mt-0'>
      <h3 className='text-lg font-semibold mb-3'>Similar Products</h3>

      {/* Mobile: horizontal scroll */}
      <div className='flex lg:hidden overflow-x-auto gap-4'>
        {similar.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className='flex w-20 flex flex-col items-center hover:bg-gray-100 p-2 rounded transition'
          >
            <img
              src={product.image}
              alt={product.name}
              className='w-24 h-24 object-cover rounded'
            />
            <p className='font-medium text-center text-sm mt-2'>{product.name}</p>
            <p className='text-gray-600 text-sm'>${product.price}</p>
          </Link>
        ))}
      </div>

      {/* Large screens: vertical list */}
      <div className='hidden lg:block space-y-4'>
        {similar.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className='flex gap-3 items-center hover:bg-gray-100 p-2 rounded transition'
          >
            <img
              src={product.image}
              alt={product.name}
              className='w-16 h-16 object-cover rounded'
            />
            <div>
              <p className='font-medium'>{product.name}</p>
              <p className='text-gray-600 text-sm'>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
