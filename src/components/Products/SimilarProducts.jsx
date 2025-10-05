// Work in progress (used for feature updates): This will essentially be linked to other items sharing the same category. 

const SimilarProducts = ({ similar }) => {
  return (
    <div className="w-full lg:w-1/4 mt-6 lg:mt-0">
      <h3 className="text-lg font-semibold mb-3">Similar Products</h3>

      {/* Mobile: horizontal scroll */}
      <div className="flex lg:hidden overflow-x-auto gap-4"></div>

      {/* Large screens: vertical list */}
      <div className="hidden lg:block space-y-4"></div>
    </div>
  );
};

export default SimilarProducts;
