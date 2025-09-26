import { Link } from "react-router";
const ResponseCard = ({ data }) => {
  const tradeActivities = data.userActivities.items;
  const filteredActivities = tradeActivities.filter(
    (activity) => activity.type === "response_on_my_post"
  );

  console.log(filteredActivities);
  return (
    <>
      {filteredActivities.map((activity) => {
        return (
          <>
            <p>
              {activity.from} would like to trade their items for{" "}
              {activity.post_title}
            </p>
            <Link to={`/product/${activity.child_post_id}`}>
              <button className="p-2 bg-zinc-800 text-white">View Trade</button>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default ResponseCard;
