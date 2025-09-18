import React from 'react';

const ReviewsProducts = () => {
  const reviewData = [
    {
      name: 'Mike Chen',
      rating: 5,
      timeAgo: '2 weeks ago',
      comment:
        'Amazing seller! Phone was exactly as described and shipped super fast.',
    },
    {
      name: 'Emma Davis',
      rating: 3,
      timeAgo: '1 month ago',
      comment:
        'Great communication and the item was in perfect condition. Highly recommend!',
    },
  ];

  return (
    <div className='p-6 md:p-8 bg-gray-50 mb-6'>
      <h2 className='text-2xl font-semibold mb-6'>
        Reviews ({reviewData.length})
      </h2>
      <div className='space-y-6'>
        {reviewData.map((review, index) => (
          <div className='bg-white border border-gray-200 rounded-lg p-4 shadow-sm'>
            <div className='flex items-center mb-2'>
              <h3 className='text-lg font-medium mr-2'>{review.name}</h3>
              <span className='text-yellow-500 text-sm mr-2'>
                {'⭐'.repeat(review.rating)}
              </span>
              <span className='bg-gray-200 text-xs font-semibold px-2 py-1 rounded'>
                Verified
              </span>
            </div>
            <p className='text-gray-700 mb-2'>{review.comment}</p>
            <small className='text-gray-500'>{review.timeAgo}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsProducts;
