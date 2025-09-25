import ActivitiesCard from "./ActivitiesCard";

const RecentActivities = ({ activities }) => {
  const activitiesData = activities.items;
  return (
    <>
      <div className="flex flex-col mt-5 gap-5">
        {activitiesData.map((activity) => {
          return <ActivitiesCard key={activity.id} activity={activity} />;
        })}
      </div>
    </>
  );
};

export default RecentActivities;
