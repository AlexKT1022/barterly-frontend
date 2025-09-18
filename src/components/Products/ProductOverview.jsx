// src/components/Products/ProductOverview.js
import { useState } from 'react';
import DescriptionProducts from './OverviewOptionsProducts/DescriptionProducts';
import ReviewsProducts from './OverviewOptionsProducts/ReviewsProducts';
import SpecificationsProducts from './OverviewOptionsProducts/SpecificationsProducts';

const ProductOverview = ({ product }) => {
  const [active, setActive] = useState('DescriptionProducts');

  return (
    <>
      {/* Tab Buttons */}
      <div className='bg-zinc-200 w-full h-8 rounded-full mt-5 flex justify-between pt-1 pb-1 pl-1 pr-1'>
        <button
          onClick={() => setActive('DescriptionProducts')}
          className={`text-sm rounded-full w-60 font-semibold cursor-pointer transition-all duration-500 ${
            active === 'DescriptionProducts'
              ? 'bg-white'
              : 'bg-transparent hover:bg-zinc-400 hover:text-white'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActive('SpecificationsProducts')}
          className={`text-sm rounded-full w-60 font-semibold cursor-pointer transition-all duration-500 ${
            active === 'SpecificationsProducts'
              ? 'bg-white'
              : 'bg-transparent hover:bg-zinc-400 hover:text-white'
          }`}
        >
          Specifications
        </button>
        <button
          onClick={() => setActive('ReviewsProducts')}
          className={`text-sm rounded-full w-60 font-semibold cursor-pointer transition-all duration-500 ${
            active === 'ReviewsProducts'
              ? 'bg-white'
              : 'bg-transparent hover:bg-zinc-400 hover:text-white'
          }`}
        >
          Reviews
        </button>
      </div>

      {/* Active Tab Label */}
      <div className='mt-5 flex justify-between items-center'>
        <p className='font-semibold text-lg'>
          {active === 'DescriptionProducts'}
          {active === 'SpecificationsProducts'}
          {active === 'ReviewsProducts'}
        </p>
      </div>

      {/* Active Tab Content */}
      <div className='mt-4'>
        {active === 'DescriptionProducts' && (
          <DescriptionProducts product={product} />
        )}
        {active === 'SpecificationsProducts' && (
          <SpecificationsProducts product={product} />
        )}
        {active === 'ReviewsProducts' && <ReviewsProducts product={product} />}
      </div>
    </>
  );
};

export default ProductOverview;
