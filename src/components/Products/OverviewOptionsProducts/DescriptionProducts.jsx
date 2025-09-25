import React from "react";

const DescriptionProducts = ({ product }) => {
  const items = product.items;
  return (
    <>
      <div className="p-5 md:p-8 bg-gray-50 mb-6  ">
        <div>
          <h3 className="text-2xl font-semibold mb-1 bg-gray-50">
            Trade Details
          </h3>
          <p className="text-gray-700">{product.description}</p>
          <div className="mt-2">
            <ul>
              {items.map((item) => {
                return (
                  <li key={item.id}>
                    <span className="font-semibold">{item.name}: </span>
                    {item.description}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Features */}
        {/* <div className="mt-6 mb-6"> */}
        {/* <h3 className="text-xl font-semibold mb-2">Key Features</h3> */}
        {/* <ul className="list-disc list-inside text-gray-700"> */}
        {/* {product.features.map((feature, index) => (
              <li>{feature}</li>
            ))} */}
        {/* </ul> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default DescriptionProducts;
