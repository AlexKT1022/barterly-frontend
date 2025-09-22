const ActivitiesCard = ({ activity }) => {
  const normalizeActivity = (act) => {
    if (activity.type === "post_created") {
      return "Post Created";
    } else if (activity.type === "trade") {
      return "Trade";
    } else if (activity.type === "response_on_my_post") {
      return "User Response";
    }
  };

  // Found the below function from:
  // https://docs.budibase.com/docs/time-ago-snippet-function?utm_source=chatgpt.com
  const pastTimeString = (dateTime) => {
    const pastTime = new Date(dateTime);
    const now = new Date();
    const delta = now - pastTime;

    const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((delta % (1000 * 60)) / 1000);

    const timeStrings = [];
    if (days > 0) {
      timeStrings.push(`${days} days`);
    }

    if (days === 1) {
      timeStrings.push(`${days} day`);
    }
    // if (hours > 0) {
    //   timeStrings.push(`${hours} hours`);
    // }
    // if (minutes > 0) {
    //   timeStrings.push(`${minutes} minutes`);
    // }
    // if (seconds > 0) {
    //   timeStrings.push(`${seconds} seconds`);
    // }

    if (timeStrings.length === 0) {
      return "just now";
    } else if (timeStrings.length === 1) {
      return timeStrings[0];
    } else {
      return (
        // timeStrings.slice(0, -1).join(", ") +
        // ", and " +
        timeStrings.slice(-1) + " ago"
      );
    }
  };

  // console.log(pastTimeString(activity.at));

  return (
    <div className="w-full h-24 border border-zinc-300 rounded-lg p-5 ">
      <div className="flex justify-between">
        <p>{normalizeActivity(activity)}</p>
        <p className="text-zinc-500">{pastTimeString(activity.at)}</p>
      </div>
      <p className="text-zinc-500">{activity.title || activity.post_title}</p>
    </div>
  );
};

export default ActivitiesCard;
