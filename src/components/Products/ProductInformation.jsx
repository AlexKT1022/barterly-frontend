
import { useState } from "react";
import { Link, useParams } from "react-router";
import { useAuth } from "../../context/AuthContext.jsx";
import { jwtDecode } from "jwt-decode";

import MakeOfferModal from "./MakeOfferModal.jsx";
import ProductHeader from "./ProductInformationComponents/ProductHeader.jsx";
import UserResponses from "./ProductInformationComponents/UserResponses.jsx";


const status = {
  open: 'bg-green-100 text-green-600',
  pending: 'bg-yellow-100 text-yellow-600',
  traded: 'bg-red-100 text-red-600',
};

// grabs the current logged in users id. can I make this a useState?
let currentUserId = null;
try {
  // page loads undefined after token expires
  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("token") : null;
  if (token) {
    const payload = jwtDecode(token);
    currentUserId = payload?.id ?? null;
  }
} catch (err) {
  console.warn("Invalid token:", err);
}

const ProductInformation = ({ product }) => {
  const [active, setActive] = useState(false);
  const { token } = useAuth();
  const { id } = useParams();

  return (
    <>
      <div className='w-full lg:w-2/3 space-y-6'>
        {active && <MakeOfferModal setActive={setActive} />}
        {/* Product Title and Labels */}

        <ProductHeader
          product={product}
          currentUserId={currentUserId}
          status={status}
        />

        {!token ? (
          <>
            <div className='flex items-center'>
              <p className='mr-3 font-semibold italic'>
                Want to make an offer?
              </p>
              <Link to='/login'>
                <button className='bg-zinc-800 text-white px-5 py-2 rounded-md hover:bg-zinc-500'>
                  Login
                </button>
              </Link>
            </div>
          </>
        ) : (
          // <>{isTrade()}</>
          <>
            <UserResponses
              product={product}
              token={token}
              currentUserId={currentUserId}
            />
          </>
        )}


        {/* Product Dates */}
        <div className="text-sm text-gray-600 space-y-1">

          <p>
            <strong>Posted:</strong> {Date(product.createdAt).slice(0, 10)}
          </p>

          <p>
            <strong>Updated: </strong>
            {product.updatedAt === null
              ? " No updates"
              : Date(product.updatedAt).slice(0, 10)}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductInformation;
