import { useState } from "react";
import MyProducts from "./OverviewOptions/MyProducts";
import RecentActivities from "./OverviewOptions/RecentActivities";
import Reviews from "./OverviewOptions/Reviews";
import Responses from "./OverviewOptions/Responses";
import Settings from "./OverviewOptions/Settings";
import NewPostModal from "./OverviewOptions/NewPostModal";

const ProfileOverview = ({ profileData }) => {
  const [active, setActive] = useState("myProducts");
  const [activeNewPost, setActiveNewPost] = useState(false);
  const data = profileData;
  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly md:justify-between bg-zinc-200 md:w-1/2 lg:w-full h-32 md:h-8 rounded-lg md:rounded-full mt-5 pt-1 pb-1 pl-1 pr-1">
        <button
          onClick={() => setActive("myProducts")}
          className={`text-sm rounded-full md:w-60 font-semibold cursor-pointer transition-all duration-500 ${
            active === "myProducts"
              ? "bg-white"
              : "bg-transparent hover:bg-zinc-400 hover:text-white"
          }`}
        >
          My Products
        </button>
        <button
          onClick={() => setActive("recentActivities")}
          className={`text-sm rounded-full md:w-60 font-semibold cursor-pointer transition-all duration-500 ${
            active === "recentActivities"
              ? "bg-white"
              : "bg-transparent hover:bg-zinc-400 hover:text-white"
          }`}
        >
          Recent Activity
        </button>
        <button
          onClick={() => setActive("responses")}
          className={`text-sm rounded-full md:w-60 font-semibold cursor-pointer transition-all duration-500 ${
            active === "responses"
              ? "bg-white"
              : "bg-transparent hover:bg-zinc-400 hover:text-white"
          }`}
        >
          Trade Responses
        </button>

        {/* <button
          onClick={() => setActive("reviews")}
          className={`text-sm rounded-full md:w-60 font-semibold cursor-pointer transition-all duration-500 ${
            active === "reviews"
              ? "bg-white"
              : "bg-transparent hover:bg-zinc-400 hover:text-white"
          }`}
        >
          Reviews
        </button> */}
        <button
          onClick={() => setActive("settings")}
          className={`text-sm rounded-full md:w-60 font-semibold cursor-pointer transition-all duration-500 ${
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
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
          onClick={() => setActiveNewPost(true)}
        >
          + New Post
        </button>
      </div>
      <div>
        {active === "myProducts" && <MyProducts products={data.userPosts} />}
      </div>
      <div>
        {active === "recentActivities" && (
          <RecentActivities activities={data.userActivities} />
        )}
      </div>
      <div>{active === "reviews" && <Reviews />}</div>
      <div>{active === "responses" && <Responses data={data} />}</div>
      <div>{active === "settings" && <Settings meData={data} />}</div>
      {activeNewPost && <NewPostModal setActive={setActiveNewPost} />}
    </>
  );
};

export default ProfileOverview;
