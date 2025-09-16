import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <div className="min-h-screen">
        <header>
          <div className="container px-4">
            <Navbar />
          </div>
        </header>

        <main className="container px-4 py-8">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
