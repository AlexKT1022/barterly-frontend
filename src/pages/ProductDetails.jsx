// src/pages/ProductDetails.js
import React from 'react';
import { useParams, Link } from 'react-router';

const products = [
    {
        id: 1,
        title: 'iPhone 13 Pro Max',
        name: 'iPhone 13 Pro Max',
        category: 'Electronics',
        status: 'Available',
        condition: 'Like New',
        storage: '256GB',
        batteryHealth: '94%',
        description:
            'Excellent condition iPhone 13 Pro Max with 256GB storage. Includes original box, charger, and unused EarPods.',
        features: [
            '6.7-inch Super Retina XDR display',
            'A15 Bionic chip with 6-core CPU',
            'Pro camera system with telephoto lens',
            '256GB storage capacity',
            'Face ID for secure authentication',
            '5G connectivity',
        ],
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
        ],
    },
];

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
                <Link to="/" className="text-blue-600 hover:underline">
                    Go back to homepage
                </Link>
            </div>
        );
    }

    return (
        <div className="product-page flex flex-col md:flex-row p-6 gap-8">
            <div className="image-gallery flex flex-col gap-4 md:w-1/3">
                {product.images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Product view ${index + 1}`}
                        className="flex items-center justify-center w-[400px] h-[500px] bg-gray-200"
                    />
                ))}
            </div>

            <div className="product-info md:w-2/3">
                <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                <p className="mb-4 text-gray-700">{product.description}</p>

                <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside mb-6">
                    {product.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                    ))}
                </ul>

                <div className="meta space-y-1 mb-6">
                    <p><strong>Condition:</strong> {product.condition}</p>
                    <p><strong>Battery Health:</strong> {product.batteryHealth}</p>
                    <p><strong>Storage:</strong> {product.storage}</p>
                    <p><strong>Status:</strong> {product.status}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                </div>

                <div className="seller-info border-t pt-4">
                    <h3 className="text-xl font-semibold mb-2">Seller Information</h3>
                    <p><strong>Name:</strong> {product.seller.name}</p>
                    <p>
                        <strong>Rating:</strong> {product.seller.rating} ⭐ ({product.seller.reviews} reviews)
                    </p>
                    <p><strong>Location:</strong> {product.seller.location}</p>
                    <p><strong>Response Time:</strong> {product.seller.responseTime}</p>
                    <p><strong>Member Since:</strong> {product.seller.memberSince}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
