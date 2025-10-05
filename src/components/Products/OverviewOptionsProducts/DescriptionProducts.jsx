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
      </div>
    </>
  );
};

export default DescriptionProducts;
