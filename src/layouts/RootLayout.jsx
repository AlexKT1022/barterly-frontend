import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <div className="min-h-screen">
        <header>
          <div className="max-w-7xl mx-auto px-4">
            <Navbar />
          </div>
        </header>

        <main className="px-4 py-8">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
