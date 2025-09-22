import { useLoaderData } from "react-router";

import UserProfileCard from "../components/User/UserProfileCard";
import UserProfileStats from "../components/User/UserProfileStats";
import UserProductCard from "../components/User/UserProductCard";

const UserProfile = () => {
  const userData = useLoaderData() || [];
  console.log(userData);
  return (
    <>
      <UserProfileCard data={userData} />
      <UserProfileStats />
      <UserProductCard />
    </>
  );
};

export default UserProfile;
