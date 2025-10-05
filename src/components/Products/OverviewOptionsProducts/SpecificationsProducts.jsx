const SpecificationsProducts = ({ product }) => {
  if (!product) return null;

  const items = product.items;

  return (
    <div className="p-6 md:p-8 bg-gray-50 mb-6">
      <h2 className="text-xl font-semibold mb-4">Included Items</h2>
      <table className="w-full text-left border-collapse">
        <thead className="font-semibold mb-1">
          <td>Name</td> <td>Condition</td> <td>Quantity</td>
        </thead>
        <tbody>
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
