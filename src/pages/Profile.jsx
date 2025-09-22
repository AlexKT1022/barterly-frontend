import ProfileCard from "../components/Profile/ProfileCard";
import ProfileStats from "../components/Profile/ProfileStats";
import ProfileOverview from "../components/Profile/ProfileOverview";

import { useLoaderData } from "react-router";

const Profile = () => {
  const profileData = useLoaderData() || [];
  return (
    <>
      <div className="max-auto max-w-6xl">
        {/* Profile */}
        <ProfileCard meProfileData={profileData} />

        {/* Stats */}
        <ProfileStats profileStats={profileData} />

        {/* Overview*/}
        <ProfileOverview profileData={profileData} />
      </div>
    </>
  );
};

export default Profile;
