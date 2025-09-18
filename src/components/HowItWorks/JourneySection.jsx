// src/components/SellerCard.js
import React from 'react';
import { useNavigate } from 'react-router';

const JourneySection = () => {
    const navigate = useNavigate();

    return (
        <section>
            <h2 className='text-center font-bold mt-15 text-2xl'>Features</h2>
            <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8 text-center mt-10">
                <div className="text-4xl mb-2">💼</div>
                <h2 className="text-2xl font-semibold mb-1">For Traders</h2>
                <p className="text-gray-500 mb-6">Find amazing deals on quality items</p>

                <ul className="text-left space-y-4 mb-6">
                    <li className="flex items-start space-x-3">
                        <span className="text-xl">🔍</span>
                        <div>
                            <p className="font-semibold">Browse & Search</p>
                            <p className="text-sm text-gray-500">Find items you want to trade</p>
                        </div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-xl">📝</span>
                        <div>
                            <p className="font-semibold">Create Listing</p>
                            <p className="text-sm text-gray-500">Upload photos and describe your item</p>
                        </div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-xl">📞</span>
                        <div>
                            <p className="font-semibold">Contact Seller</p>
                            <p className="text-sm text-gray-500">Ask questions and negotiate</p>
                        </div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="text-xl">📦</span>
                        <div>
                            <p className="font-semibold">Ship & Receive item</p>
                            <p className="text-sm text-gray-500">Complete the transaction</p>
                        </div>
                    </li>
                </ul>

                <button
                    onClick={() => navigate('/categories')}
                    className="px-4 h-10 rounded-md bg-zinc-800 text-white transition-colors duration-300 hover:bg-zinc-500 shadow-sm"
                >
                    Start Trading
                </button>
            </div>
        </section>

    );
};

export default JourneySection;
