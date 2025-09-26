import { Link, useLoaderData } from "react-router";

import ProductGallery from "../components/Products/ProductGallery";
import ProductInformation from "../components/Products/ProductInformation";
import ProductOverview from "../components/Products/ProductOverview";

const ProductDetails = () => {
  const postData = useLoaderData() || [];

  const images = postData.items;

  // const product = products.find((p) => p.id === Number(id));

  // if (!product) {
  //   return (
  //     <div className="text-center p-8">
  //       <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
  //       <Link to="/categories" className="text-blue-600 hover:underline">
  //         Go back to Categories
  //       </Link>
  //     </div>
  //   );
  // }

  return (
    <div className=" p-6 max-w-6xl mx-auto text-gray-800">
      <Link
        to={`/categories`}
        className="bg-gray-200 text-black transition-colors duration-300 hover:bg-zinc-300 px-6 py-2 rounded shadow-sm"
      >
        ← Back to Products
      </Link>
      <div className="flex flex-col xl:flex-row p-6 gap-10 mt-10">
        <ProductGallery images={images} />
        <div className="flex flex-col gap-6 w-full xl:w-2/3">
          <ProductInformation product={postData} />
        </div>
        {/* <SimilarProducts similar={postData} /> */}
      </div>
      <div className="px-6">
        <ProductOverview product={postData} />
      </div>
    </div>
  );
};

export default ProductDetails;
