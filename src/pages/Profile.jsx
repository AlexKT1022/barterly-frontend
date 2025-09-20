import ProfileCard from "../components/Profile/ProfileCard";
import ProfileStats from "../components/Profile/ProfileStats";
import ProfileOverview from "../components/Profile/ProfileOverview";

import { useLoaderData } from "react-router";

const Profile = () => {
  const profileData = useLoaderData() || [];
  return (
    <>
      {/* Profile */}
      <ProfileCard meProfileData={profileData} />

      {/* Stats */}
      <ProfileStats profileStats={profileData} />

      {/* Overview*/}
      <ProfileOverview profileData={profileData} />
    </>
  );
};

export default Profile;
