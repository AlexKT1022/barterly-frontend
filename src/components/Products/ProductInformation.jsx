import { useState } from "react";
import { Link, useParams } from "react-router";
import { useAuth } from "../../context/AuthContext.jsx";

import MakeOfferModal from "./MakeOfferModal.jsx";

const status = {
  open: "bg-green-100 text-green-600",
  pending: "bg-yellow-100 text-yellow-600",
  closed: "bg-red-100 text-red-600",
};

const ProductInformation = ({ product }) => {
  const [active, setActive] = useState(false);
  const { token } = useAuth();
  const { id } = useParams();

  // check if the child_post_id === page id
  // if true return different buttons
  // else show contact seller / make offer

  const isTrade = () => {
    const loggedUserData = product.loggedUserData.items.filter(
      (response) => response.type === "response_on_my_post"
    );
    if (token && +id === loggedUserData[0].child_post_id) {
      return (
        <>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-black text-white px-6 py-2 rounded w-full sm:w-auto">
              Commit Trade
            </button>
            {/* <button className='bg-gray-200 px-6 py-2 rounded w-full sm:w-auto'>
          ❤️ Add to Wishlist
        </button> */}
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded w-full sm:w-auto"
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
            {/* <button className='bg-gray-200 px-6 py-2 rounded w-full sm:w-auto'>
          ❤️ Add to Wishlist
        </button> */}
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

  // console.log(typeof id);

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

            {/* Categories */}
            {/* <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {product.condition}
          </span> */}
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
          {/* <p>
          <strong>Views:</strong> {product.views}
        </p> */}
          {/* <p>
          <strong>Watchers:</strong> {product.watchers}
        </p> */}
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
