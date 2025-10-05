import { useParams, Link } from "react-router";
import { IoIosAlert } from "react-icons/io";
import { useState } from "react";
import MakeOfferModal from "../MakeOfferModal";

const UserResponses = ({ product, token, currentUserId }) => {
  const [active, setActive] = useState(false);
  const { id } = useParams();

  // filtering for the the response that matches the page for the offer id
  const responseId =
    (product.loggedUserData?.items || []).find(
      (item) =>
        item.type === "response_on_my_post" && +id === item.child_post_id
    )?.response_id ?? null;


  // User accepts trade
  const handleAcceptTrade = async () => {
    const offer_id = id;
    const acting_user_id = product.authorId;
    const payload = { offer_id, acting_user_id };

    const token = sessionStorage.getItem("token");
    try {
      const res = await fetch(
        `https://barterly-backend.onrender.com/api/offers/${responseId}/accept`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Submission failed");
      }
      await res.json();
      window.location.reload();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  // User declines trade
  const handleDeclineTrade = async () => {
    const offer_id = id;
    const acting_user_id = product.authorId;
    const payload = { offer_id, acting_user_id };

    const token = sessionStorage.getItem("token");
    try {
      const res = await fetch(
        `https://barterly-backend.onrender.com/api/offers/${responseId}/reject`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Submission failed");
      }
      await res.json();
      window.location.reload();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  // grab the child post id from the current logged in user
  const loggedUserData =
    product.loggedUserData.items
      .filter(
        (response) =>
          response.type === "response_on_my_post" &&
          response.child_post_id === +id
      )
      .find((p) => p.child_post_id)?.child_post_id ?? null;

  if (token && currentUserId === product.authorId) {
    return (
      <>
        <div>
          <Link to="/profile">
            <button className="bg-black text-white px-6 py-2 rounded w-full sm:w-auto hover:bg-zinc-500">
              Edit Post
            </button>
          </Link>
        </div>
      </>
    );
  }

  // current logged in user has rejected post already
  if (
    token &&
    +id === loggedUserData &&
    product.linked_offers[0].status === "rejected"
  ) {
    return (
      <>
        <div>
          <p>
            <strong>Status:</strong> {product.linked_offers[0].status}
          </p>
        </div>
      </>
    );
  }

  if (token && +id === loggedUserData && product.status === "open") {
    return (
      <>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            className="bg-black text-white px-6 py-2 rounded w-full sm:w-auto hover:bg-zinc-500"
            onClick={() => handleAcceptTrade()}
          >
            Accept
          </button>

          <button
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded w-full sm:w-auto"
            onClick={() => handleDeclineTrade()}
          >
            Decline
          </button>
        </div>
      </>
    );
  } else if (product.status === "traded") {
    // if the post item has been traded
    return (
      <>
        <div className="flex items-center">
          <IoIosAlert className="w-14 h-14 text-red-400" />
          <p>This has been traded and is no longer available</p>
        </div>
      </>
    );
  } else {
    // if current user is interested in trading
    return (
      <>
        {active && <MakeOfferModal setActive={setActive} />}
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-black text-white px-6 py-2 rounded w-full sm:w-auto">
            Contact Seller
          </button>

          <button
            className="bg-blue-600 text-white px-6 py-2 rounded w-full sm:w-auto"
            onClick={() => setActive(true)}
          >
            Make Offer
          </button>
        </div>
      </>
    );
  }
};

export default UserResponses;
