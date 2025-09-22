import { useLoaderData } from "react-router";

import UserProfileCard from "../components/User/UserProfileCard";
import UserProfileStats from "../components/User/UserProfileStats";

const UserProfile = () => {
  const userData = useLoaderData() || [];
  return (
    <>
      <UserProfileCard data={userData} />
      <UserProfileStats />
    </>
  );
};

export default UserProfile;
