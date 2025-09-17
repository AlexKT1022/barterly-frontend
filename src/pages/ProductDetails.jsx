// src/pages/ProductDetails.js
import React from 'react';
import { useParams, Link } from 'react-router';

import ProductGallery from '../components/Products/ProductGallery';
import ProductInformation from '../components/Products/ProductInformation';
import SimilarProducts from '../components/Products/SimilarProducts';
import ProductOverview from '../components/Products/ProductOverview';

const products = [
    {
        id: 1,
        title: 'iPhone 13 Pro Max',
        price: 899,
        originalPrice: 1099,
        category: 'Electronics',
        status: 'Available',
        condition: 'Like New',
        storage: '256GB',
        color: "Blue",
        network: "Unlocked",
        batteryHealth: '94%',
        warranty: "None",
        description:
            'Excellent condition iPhone 13 Pro Max with 256GB storage. Includes original box, charger, and unused EarPods. Battery health at 94%. No scratches or dents. Perfect for someone looking for a premium phone at a great price.',
        features: [
            '6.7-inch Super Retina XDR display',
            'A15 Bionic chip with 6-core CPU',
            'Pro camera system with telephoto lens',
            '256GB storage capacity',
            'Face ID for secure authentication',
            '5G connectivity',
        ],
        views: 234,
        watchers: 12,
        posted: '3 days ago',
        updated: '1 day ago',
        seller: {
            name: 'Sarah Johnson',
            rating: 4.9,
            reviews: 87,
            responseTime: 'Within 2 hours',
            memberSince: '2022',
            location: 'New York, NY',
        },
        images: [
            'https://m.media-amazon.com/images/I/51UuPZLMaCL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/61dX5FZ6WNL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/81RHHN4grXL._AC_SX679_.jpg'
        ],
        similarProducts: [
            { id: 2, name: 'iPhone 13', price: 699, image: 'https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_SX679_.jpg' },
            { id: 3, name: 'iPhone 12 Pro', price: 649, image: 'https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_SX679_.jpg' },
            { id: 4, name: 'Samsung Galaxy S23', price: 749, image: 'https://m.media-amazon.com/images/I/71Sa3dqTqzL._AC_SX679_.jpg' }
        ]
    }
];

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div className="text-center p-8">
                <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
                <Link to="/" className="text-blue-600 hover:underline">Go back to homepage</Link>
            </div>
        );
    }

    return (
        <div className="space-y-10 mt-10">
            <Link
                to={`/categories`}
                className="bg-gray-200 text-blacktransition-colors duration-300 hover:bg-zinc-300 px-6 py-2 rounded shadow-sm"
            >
                ← Back to Products
            </Link>
            <div className="flex flex-col xl:flex-row p-6 gap-10 mt-10">
                <ProductGallery images={product.images} />
                <div className="flex flex-col gap-6 w-full xl:w-2/3">
                    <ProductInformation product={product} />
                </div>
                <SimilarProducts similar={product.similarProducts} />
            </div>
            <div className="px-6">
                <ProductOverview product={product} />
            </div>
        </div>
    );
};

export default ProductDetails;
