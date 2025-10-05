// Work in progress. We currently don't have a table  for reviews.
// Logged in user can review the ratings left for them while other users can read about who they will be trading with. 

import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <>
      <div className="flex flex-col mt-5 gap-5">
        <ReviewCard />
      </div>
    </>
  );
};

export default Reviews;
