import React from "react";
import { Link } from "react-router";

const GetStartedSection = () => (

    <section className="text-center py-12 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
            Join thousands of users who are already exchanging products safely on our platform.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/register" className="px-6 py-2 bg-black text-white rounded-lg">
                Create Account
            </Link>
            <Link to="/login" className="px-6 py-2 bg-black text-white border rounded-lg">
                Login
            </Link>
            <Link to="/categories" className="px-6 py-2 border rounded-lg">
                Browse Products
            </Link>
        </div>
    </section>
);

export default GetStartedSection;
