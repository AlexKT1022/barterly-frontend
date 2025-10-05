// Recent Activities: Logs kept on the users account. Kind of like a recipe for every action taken. 

import ActivitiesCard from "./ActivitiesCard";

const RecentActivities = ({ activities }) => {
  const activitiesData = activities.items;
  return (
    <>
      <div className="mx-auto flex flex-col mt-5 gap-5">
        {activitiesData.map((activity) => {
          return <ActivitiesCard key={activity.id} activity={activity} />;
        })}
      </div>
    </>
  );
};

export default RecentActivities;
