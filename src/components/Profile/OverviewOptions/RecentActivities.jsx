import ActivitiesCard from "./ActivitiesCard";

const RecentActivities = ({ activities }) => {
  const activitiesData = activities.items;
  // console.log(activitiesData);
  return (
    <>
      <div className="flex flex-col mt-5 gap-5">
        {activitiesData.map((activity) => {
          return <ActivitiesCard key={activity.post_id} activity={activity} />;
        })}
      </div>
    </>
  );
};

export default RecentActivities;
