import { useState } from 'react';
import DescriptionProducts from './OverviewOptionsProducts/DescriptionProducts';
import ReviewsProducts from './OverviewOptionsProducts/ReviewsProducts';
import SpecificationsProducts from './OverviewOptionsProducts/SpecificationsProducts';

const ProductOverview = ({ product }) => {
  const [active, setActive] = useState('DescriptionProducts');

  return (
    <div className='w-full'>
      {/* Tab Buttons */}
      <div className='bg-zinc-200 w-full rounded-full mt-5 flex flex-wrap gap-2 p-1 justify-center'>
        <button
          onClick={() => setActive('DescriptionProducts')}
          className={`text-sm flex-1 sm:flex-none sm:w-60 rounded-full font-semibold cursor-pointer transition-all duration-500 ${
            active === 'DescriptionProducts'
              ? 'bg-white'
              : 'bg-transparent hover:bg-zinc-400 hover:text-white'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActive('SpecificationsProducts')}
          className={`text-sm flex-1 sm:flex-none sm:w-60 rounded-full font-semibold cursor-pointer transition-all duration-500 ${
            active === 'SpecificationsProducts'
              ? 'bg-white'
              : 'bg-transparent hover:bg-zinc-400 hover:text-white'
          }`}
        >
          Specifications
        </button>
        <button
          onClick={() => setActive('ReviewsProducts')}
          className={`text-sm flex-1 sm:flex-none sm:w-60 rounded-full font-semibold cursor-pointer transition-all duration-500 ${
            active === 'ReviewsProducts'
              ? 'bg-white'
              : 'bg-transparent hover:bg-zinc-400 hover:text-white'
          }`}
        >
          Reviews
        </button>
      </div>

      {/* Active Tab Content */}
      <div className='mt-4 w-full'>
        {active === 'DescriptionProducts' && (
          <DescriptionProducts product={product} />
        )}
        {active === 'SpecificationsProducts' && (
          <SpecificationsProducts product={product} />
        )}
        {active === 'ReviewsProducts' && <ReviewsProducts product={product} />}
      </div>
    </div>
  );
};

export default ProductOverview;
