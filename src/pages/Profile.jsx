import ProfileCard from "../components/Profile/ProfileCard";
import ProfileStats from "../components/Profile/ProfileStats";
import ProfileOverview from "../components/Profile/ProfileOverview";

import { useLoaderData } from "react-router";

const Profile = () => {
  const profileData = useLoaderData() || [];
  // console.log(profileData.userActivities);
  return (
    <>
      {/* Profile */}
      <ProfileCard />

      {/* Stats */}
      <ProfileStats profileStats={profileData.userPosts} />

      {/* Overview*/}
      <ProfileOverview profileData={profileData} />
    </>
  );
};

export default Profile;
