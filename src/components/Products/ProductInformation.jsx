import { useState } from "react";
import { Link, useParams } from "react-router";
import { useAuth } from "../../context/AuthContext.jsx";

import MakeOfferModal from "./MakeOfferModal.jsx";

const status = {
  open: "bg-green-100 text-green-600",
  pending: "bg-yellow-100 text-yellow-600",
  traded: "bg-red-100 text-red-600",
};

const ProductInformation = ({ product }) => {
  const [active, setActive] = useState(false);
  const { token } = useAuth();
  const { id } = useParams();

  const pageId = id;

  const responseId =
    product.loggedUserData.items.find(
      (item) =>
        item.type === "response_on_my_post" && +pageId === item.child_post_id
    )?.response_id ?? null;


  // User accepts trade
  const handleAcceptTrade = async () => {
    const offer_id = id;
    const acting_user_id = product.authorId;
    const payload = { offer_id, acting_user_id };

    const token = sessionStorage.getItem("token");
    try {
      const res = await fetch(
        `http://localhost:3000/api/offers/${responseId}/accept`,
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

  const handleDeclineTrade = async () => {
    const offer_id = id;
    const acting_user_id = product.authorId;
    const payload = { offer_id, acting_user_id };

    const token = sessionStorage.getItem("token");
    try {
      const res = await fetch(
        `http://localhost:3000/api/offers/${responseId}/reject`,
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

  const isTrade = () => {
    const loggedUserData = product.loggedUserData.items.filter(
      (response) => response.type === "response_on_my_post"
    );
    if (token && +id === loggedUserData[0].child_post_id) {
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
              onClick={() => setActive(true)}
            >
              Decline
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
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

  return (
    <>
      <div className="w-full lg:w-2/3 space-y-6">
        {active && <MakeOfferModal setActive={setActive} />}
        {/* Product Title and Labels */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{product.title}</h1>
          <div className="flex flex-wrap gap-2 mt-2 text-sm">
            {/* <span className='bg-gray-200 px-2 py-1 rounded'>{product.category}</span> */}
            <span className={`px-2 py-1 rounded ${status[product.status]}`}>
              {product.status}
            </span>
          </div>
        </div>
        {!token ? (
          <>
            <div className="flex items-center">
              <p className="mr-3 font-semibold italic">
                Want to make an offer?
              </p>
              <Link to="/login">
                <button className="bg-zinc-800 text-white px-5 py-2 rounded-md hover:bg-zinc-500">
                  Login
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>{isTrade()}</>
        )}

        {/* Product Stats */}
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <strong>Posted:</strong> {product.createdAt.slice(0, 10)}
          </p>
          <p>
            <strong>Updated:</strong>
            {product.updatedAt === null ? " No updates" : product.updateAt}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductInformation;
