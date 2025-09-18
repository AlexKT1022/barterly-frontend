import React from "react";

const faqs = [
    {
        q: "How do I know if a trader is trustworthy?",
        a: "Check their profile rating, read reviews from previous items, and look for verification badges. Our platform also provides trader verification and dispute resolution services.",
    },
    {
        q: "How do shipping and returns work?",
        a: "Traders handle shipping arrangements. We provide tracking integration and trader protection. Returns depend on trader policies, but we offer dispute resolution for problems.",
    },
    {
        q: "Are there any fees for using the platform?",
        a: "Basic listings are free. We charge a small transaction fee ($5.00 USD) only when items trade successfully.",
    },
];

const FAQSection = () => (
    <section className="my-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
            Frequently Asked Questions
        </h2>
        <div className="space-y-6">
            {faqs.map((f, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-sm">
                    <h4 className="font-semibold">{f.q}</h4>
                    <p className="text-gray-600 mt-2">{f.a}</p>
                </div>
            ))}
        </div>
    </section>
);

export default FAQSection;
