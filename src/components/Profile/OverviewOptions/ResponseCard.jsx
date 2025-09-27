import { Link } from "react-router";
const ResponseCard = ({ data }) => {
  const tradeActivities = data.userActivities.items;
  const filteredActivities = tradeActivities.filter(
    (activity) => activity.type === "response_on_my_post"
  );

  const normalizeDate = (date) => {
    const dateChange = new Date(date).toDateString();
    return dateChange;
  };

  const normalizeTime = (time) => {
    const timeChange = new Date(time).toLocaleTimeString();
    return timeChange;
  };

  return (
    <div className="md:w-3xl lg:w-6xl md:h-24 sm:h-32 border border-zinc-300 rounded-lg p-5 mt-5">
      {filteredActivities.map((activity) => {
        console.log(activity);
        return (
          <div className="flex flex-col">
            <div className="md:flex md:justify-between md:mb-1 md:italic text-zinc-500">
              <div className="text-center">
                <p>
                  <span className="font-semibold">{activity.from}</span> would
                  like to trade their item(s) for
                  <span className="ml-1 font-semibold">
                    {activity.post_title}
                  </span>
                </p>
              </div>

              <div className="flex justify-center text-xs md:text-base mb-2 md:mb-0">
                <p className="mr-1">{normalizeDate(activity.at)}</p>
                <p>{normalizeTime(activity.at)}</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link to={`/product/${activity.child_post_id}`}>
                <button className="p-2 bg-zinc-800 text-white rounded-md">
                  View Trade
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
//<div class="grid-cols-[200px_minmax(900px,_1fr)_100px] ...">
export default ResponseCard;
