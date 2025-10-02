import { useLoaderData } from "react-router";

import UserProfileCard from "../components/User/UserProfileCard";
import UserProfileStats from "../components/User/UserProfileStats";
import UserProductsList from "../components/User/UserProductsList";

const UserProfile = () => {
  const userData = useLoaderData() || [];
  const userPosts = userData.userPosts;
  const categories = userData.categoriesList;

  return (
    <>
      <div className="max-auto max-w-6xl">
        <UserProfileCard data={userData} />
        <UserProfileStats data={userPosts} />
        <UserProductsList data={userPosts} categories={categories}/>
      </div>
    </>
  );
};

export default UserProfile;
