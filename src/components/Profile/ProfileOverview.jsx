import { useState } from "react";
import MyProducts from "./OverviewOptions/MyProducts";
import RecentActivities from "./OverviewOptions/RecentActivities";
import Reviews from "./OverviewOptions/Reviews";
import Settings from "./OverviewOptions/Reviews copy";

const ProfileOverview = () => {
  const [active, setActive] = useState("myProducts");

  return (
    <>
      <div className="bg-zinc-200 w-full h-8 rounded-full mt-5 flex justify-between pt-1 pb-1 pl-1 pr-1">
        <button
          onClick={() => setActive("myProducts")}
          className={`text-sm rounded-full w-60 font-semibold cursor-pointer transition-all duration-500 ${
            active === "myProducts"
              ? "bg-white"
              : "bg-transparent hover:bg-zinc-400 hover:text-white"
          }`}
        >
          My Products
        </button>
        <button
          onClick={() => setActive("recentActivities")}
          className={`text-sm rounded-full w-60 font-semibold cursor-pointer transition-all duration-500 ${
            active === "recentActivities"
              ? "bg-white"
              : "bg-transparent hover:bg-zinc-400 hover:text-white"
          }`}
        >
          Recent Activity
        </button>
        <button
          onClick={() => setActive("reviews")}
          className={`text-sm rounded-full w-60 font-semibold cursor-pointer transition-all duration-500 ${
            active === "reviews"
              ? "bg-white"
              : "bg-transparent hover:bg-zinc-400 hover:text-white"
          }`}
        >
          Reviews
        </button>
        <button
          onClick={() => setActive("settings")}
          className={`text-sm rounded-full w-60 font-semibold cursor-pointer transition-all duration-500 ${
            active === "settings"
              ? "bg-white"
              : "bg-transparent hover:bg-zinc-400 hover:text-white"
          }`}
        >
          Settings
        </button>
      </div>
      <div className="mt-5 flex justify-between items-center">
        <p className="font-semibold">
          {active === "myProducts" && "My Products"}
          {active === "recentActivities" && "Recent Activities"}
          {active === "reviews" && "Reviews"}
          {active === "settings" && "Settings"}
        </p>
        <button className="bg-black text-white h-10 rounded-lg text-sm pl-2 pr-2 cursor-pointer">
          Add New Product
        </button>
      </div>
      <div>{active === "myProducts" && <MyProducts />}</div>
      <div>{active === "recentActivities" && <RecentActivities />}</div>
      <div>{active === "reviews" && <Reviews />}</div>
      <div>{active === "settings" && <Settings />}</div>
    </>
  );
};

export default ProfileOverview;
