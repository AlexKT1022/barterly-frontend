const ActivitiesCard = ({ activity }) => {
  const normalizeActivity = (act) => {
    if (activity.type === "post_created") {
      return "Post Created";
    } else if (activity.type === "trade") {
      return "Trade";
    } else if (activity.type === "response_on_my_post") {
      return "User Response";
    } else if (activity.type === "my_response") {
      return "Offered";
    }
  };

  const normalizeDate = (date) => {
    const dateChange = new Date(date).toDateString();
    return dateChange;
  };

  const normalizeTime = (time) => {
    const timeChange = new Date(time).toLocaleTimeString();
    return timeChange;
  };

  console.log(activity);

  return (
    <div className="w-full h-24 border border-zinc-300 rounded-lg p-5 ">
      <div className="flex justify-between">
        <p>{normalizeActivity(activity)}</p>
        <p className="text-zinc-500">{normalizeDate(activity.at)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-zinc-500">{activity.title || activity.post_title}</p>
        <p className="text-zinc-500">{normalizeTime(activity.at)}</p>
      </div>
    </div>
  );
};

export default ActivitiesCard;
