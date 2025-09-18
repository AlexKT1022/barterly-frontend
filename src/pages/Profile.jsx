import { Link } from 'react-router';
import ProfileCard from '../components/Profile/ProfileCard';
import ProfileStats from '../components/Profile/ProfileStats';
import ProfileOverview from '../components/Profile/ProfileOverview';

const Profile = () => {
  return (
    <>
      {/* Profile */}
      <ProfileCard />

      {/* Stats */}
      <ProfileStats />

      {/* Overview*/}
      <ProfileOverview />
    </>
  );
};

export default Profile;
