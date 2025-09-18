import { NavLink } from "react-router";

export default function AboutContact() {
    return (
        <section className="text-center bg-gray-50 border rounded-xl shadow-sm p-10">
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
                Have questions or suggestions? We'd love to hear from you!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
                <button className="px-5 py-2 border border-black rounded-lg hover:bg-gray-100">
                    Contact Support
                </button>
                <NavLink to="https://www.instagram.com/">
                        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                            Follow US
                        </button>
                </NavLink>
            </div>
        </section>
    );
}
