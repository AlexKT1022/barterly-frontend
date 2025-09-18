import React from "react";

const steps = [
    {
        step: "01",
        title: "Sign Up & Verify",
        color: "bg-blue-50",
        points: [
            "Quick registration with email and password",
            "Upload ID for trader verification",
            "Complete your profile for better trust",
        ],
    },
    {
        step: "02",
        title: "List Your Items",
        color: "bg-green-50",
        points: [
            "Take high-quality photos of your items",
            "Write detailed descriptions",
            "Choose categories and tags",
        ],
    },
    {
        step: "03",
        title: "Connect & Negotiate",
        color: "bg-purple-50",
        points: [
            "Receive messages from interested traders",
            "Answer questions about your items",
            "Negotiate terms",
            "Schedule meetups or shipping",
        ],
    },
    {
        step: "04",
        title: "Complete the Trade",
        color: "bg-orange-50",
        points: [
            "Track delivery and confirm receipt",
            "Package items carefully for shipping",
            "Leave reviews and build reputation",
        ],
    },
];

const StepsSection = () => (
    <section>
        <h2 className='text-center font-bold mt-15 mb-10 text-2xl'>Getting Started in 4 Simple Steps </h2>
        <div className="space-y-8">
            {steps.map((s, idx) => (
                <div key={idx} className={`p-6 rounded-lg ${s.color}`}>
                    <h3 className="font-bold text-lg mb-2">
                        Step {s.step}: {s.title}
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700">
                        {s.points.map((p, i) => (
                            <li key={i}>{p}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
);

export default StepsSection;
