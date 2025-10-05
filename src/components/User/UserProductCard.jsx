import { Link } from "react-router";

const UserProductCard = ({ data, categories }) => {
  const status = {
    open: "bg-green-100 text-green-600",
    pending: "bg-yellow-100 text-yellow-600",
    traded: "bg-red-100 text-red-600",
  };

  const category = categories.find(
    (cat) => Number(cat.id) === Number(data.categoryId)
  );
  const categoryName = category ? category.name : "Unknown";

  const imgFail = (event) => {
    event.target.src =
      "https://t4.ftcdn.net/jpg/16/71/95/79/360_F_1671957940_D2dYs3RXTsWEOeS7xY20y6RStabYt6DV.jpg";
  };

  return (
    <div className="flex flex-col rounded-lg border border-zinc-300 w-80 h-80 p-5 hover:shadow-md transition-shadow">
      <img
        src={data.items[0]?.imageUrl}
        alt=""
        className="w-full h-full bg-black rounded-lg mb-1 object-cover object-top"
        onError={imgFail}
      />
      <p className="font-semibold">{data.title}</p>
      <div className="flex gap-2 items-center">
        <p className="text-xs inline-block px-2 py-1 bg-zinc-200 rounded">
          {categoryName}
        </p>
        <p
          className={`text-xs inline-block px-2 py-1 rounded ${
            status[data.status]
          }`}
        >
          {data.status}
        </p>
      </div>
      <div className="flex justify-around">
        <Link to={`/product/${data.id}`}>
          <button className="w-32 bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserProductCard;
