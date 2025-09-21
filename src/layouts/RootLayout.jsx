import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header>
          <div className="max-w-7xl mx-auto px-4">
            <Navbar />
          </div>
        </header>

        <main className="max-w-7xl mx-auto flex-1 px-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
