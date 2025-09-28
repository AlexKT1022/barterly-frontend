import ActivitiesCard from "./ActivitiesCard";

const RecentActivities = ({ activities }) => {
  const activitiesData = activities.items;
  return (
    <>
      <div className="mx-auto md:w-2xl lg:w-6xl flex flex-col mt-5 gap-5">
        {activitiesData.map((activity) => {
          return <ActivitiesCard key={activity.id} activity={activity} />;
        })}
      </div>
    </>
  );
};

export default RecentActivities;
