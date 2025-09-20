const ActivitiesCard = ({ activity }) => {
  return (
    <div className="w-full h-24 border border-zinc-300 rounded-lg p-5 ">
      <div className="flex justify-between">
        <p>{activity.type}</p>
        <p className="text-zinc-500">{activity.at}</p>
      </div>
      <p className="text-zinc-500">{activity.title}</p>
    </div>
  );
};

export default ActivitiesCard;
