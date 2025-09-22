import { useLoaderData } from "react-router";

import UserProfileCard from "../components/User/UserProfileCard";
import UserProfileStats from "../components/User/UserProfileStats";
import UserProductsList from "../components/User/UserProductsList";

const UserProfile = () => {
  const userData = useLoaderData() || [];
  const userPosts = userData.userPosts;
  return (
    <>
      <UserProfileCard data={userData} />
      <UserProfileStats data={userPosts} />
      <UserProductsList data={userPosts} />
    </>
  );
};

export default UserProfile;
