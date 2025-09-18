import AboutHeader from "../components/About/AboutHeader";
import AboutContent from "../components/About/AboutContent";
import AboutContact from "../components/About/AboutContact";

export default function About() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <AboutHeader />
            <AboutContent />
            <AboutContact />
        </div>
    );
}
