import { Link } from "react-router";
import { FaGrinBeamSweat } from "react-icons/fa";

const AcceptedResponseCard = ({ data }) => {
  const myId = data.id;
  const offers = data.offers.offers;

  const acceptedOffers = offers.filter(
    (offer) => offer.status === "accepted" && offer.post.author_id === myId
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
    <div className="mx-auto md:w-2xl lg:w-6xl md:h-24 sm:h-32 p-5 mt-5">
      {acceptedOffers.length > 0 ? (
        acceptedOffers.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col border border-zinc-300 rounded-lg mt-5 p-2"
          >
            <div className="md:flex md:justify-between md:mb-3 md:italic text-zinc-500">
              <div>
                <p>🎉 Congratulations - trade completed!</p>
                <p>
                  <span className="font-semibold">
                    {offer.child_post.title} {" "}
                  </span>
                  for your
                  <span className="ml-1 font-semibold">{offer.post.title}</span>
                </p>
              </div>
              <div></div>

              <div className="flex justify-center text-xs md:text-base mb-2 md:mb-0">
                <p className="mr-1">{normalizeDate(offer.created_at)}</p>
                <p>{normalizeTime(offer.created_at)}</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link to={`/product/${offer.child_post_id}`}>
                <button className="p-2 bg-zinc-800 text-white rounded-md">
                  View Trade
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center">
          <p>Nothing yet! &nbsp;</p>
          <FaGrinBeamSweat className="w-12 h-12" />
        </div>
      )}
    </div>
  );
};
//<div class="grid-cols-[200px_minmax(900px,_1fr)_100px] ...">
export default AcceptedResponseCard;
