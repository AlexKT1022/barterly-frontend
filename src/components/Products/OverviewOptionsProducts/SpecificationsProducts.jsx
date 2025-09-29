const SpecificationsProducts = ({ product }) => {
  if (!product) return null;

  const items = product.items;

  const specifications = {
    Storage: product.storage,
    Color: product.color,
    Network: product.network,
    "Battery Health": product.batteryHealth,
    Status: product.status,
  };

  return (
    <div className="p-6 md:p-8 bg-gray-50 mb-6">
      <h2 className="text-xl font-semibold mb-4">Included Items</h2>
      <table className="w-full text-left border-collapse">
        <thead className="font-semibold mb-1">
          <td>Name</td> <td>Condition</td> <td>Quantity</td>
        </thead>
        <tbody>
          {/* {Object.entries(specifications).map(([specs, index]) => (
            <tr className="border-b">
              <td className="py-2 pr-4 font-medium ">{specs}:</td>
              <td className="py-2 text-gray-700">{index}</td>
            </tr>
          ))} */}
          <tr className="border-b">
            {items.map((item) => {
              return (
                <>
                  <td>{item.name}</td>
                  <td>{item.condition}</td>
                  <td>{item.quantity}</td>
                </>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationsProducts;
