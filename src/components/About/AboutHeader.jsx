import { NavLink } from "react-router";

export default function AboutHeader() {
    const stats = [
        { number: "50K+", label: "Active Users", sub: "Trusted members" },
        { number: "500K+", label: "Products Listed", sub: "Items available" },
        { number: "1M+", label: "Successful Sales", sub: "Completed transactions" },
        { number: "25+", label: "States", sub: "Country reach" },
    ];

    const reasons = [
        { title: "Secure Transactions", desc: "All payments are processed securely with buyer protection." },
        { title: "Verified Sellers", desc: "Our verification process ensures trustworthy sellers." },
        { title: "Community Driven", desc: "Join a community of passionate buyers and sellers." },
        { title: "Wide Selection", desc: "Find everything from electronics to collectibles." },
    ];

    return (
        <section className="mb-16 bg-gray-50 py-12 rounded-xl">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-4">About Product Exchange</h1>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    We’re building the countries most trusted marketplace where people can exchange products with confidence.
                    Our mission is to create a community-driven platform that makes trading simple, safe, and enjoyable.
                </p>
                <div className="flex justify-center gap-4">
                    <NavLink to="https://www.facebook.com/">
                        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                            Join Our Community
                        </button>
                    </NavLink>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
                {stats.map((stat, index) => (
                    <div key={index} className="p-6 border rounded-xl shadow-sm bg-white">
                        <h2 className="text-2xl font-bold">{stat.number}</h2>
                        <p className="font-medium">{stat.label}</p>
                        <p className="text-gray-500 text-sm">{stat.sub}</p>
                    </div>
                ))}
            </div>

            {/* Why Choose Us */}
            <h2 className="text-center text-xl font-bold mb-8">Why Choose Us?</h2>
            <div className="grid md:grid-cols-4 gap-6">
                {reasons.map((reasons, index) => (
                    <div key={index} className="p-6 border rounded-xl shadow-sm bg-white text-center">
                        <h3 className="font-semibold mb-2">{reasons.title}</h3>
                        <p className="text-gray-600 text-sm">{reasons.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
