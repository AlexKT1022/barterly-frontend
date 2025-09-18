// src/pages/HowItWorks.jsx
import React from "react";
import StepsSection from "../components/HowItWorks/StepsSection";
import JourneySection from "../components/HowItWorks/JourneySection";
import FAQSection from "../components/HowItWorks/FAQSection";
import GetStartedSection from "../components/HowItWorks/GetStartedSection";

const HowItWorks = () => {
    return (
        <div className="p-8 max-w-6xl mx-auto text-gray-800">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold">How Product Exchange Works</h1>
                <p className="text-gray-600 mt-2">
                    Learn how to exchange products safely and easily on our platform.
                    Follow our simple step-by-step guide to get started today.
                </p>
            </div>

            {/* Sections */}
            <StepsSection />
            <JourneySection />
            <FAQSection />
            <GetStartedSection />
        </div>
    );
};

export default HowItWorks;
