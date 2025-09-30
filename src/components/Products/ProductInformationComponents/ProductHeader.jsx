import { Link } from "react-router";
const ProductHeader = ({ token, product, currentUserId, status }) => {
  return (
    <>
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">{product.title}</h1>
        <p>
          <strong>Created by: &nbsp;</strong>
          <Link
            to={
              token && currentUserId === product.authorId
                ? "/profile"
                : `/user/${product.authorId}`
            }
            className="underline"
          >
            {product.author.username}
          </Link>
        </p>
        <div className="flex flex-wrap gap-2 mt-2 text-sm">
          <span className={`px-2 py-1 rounded ${status[product.status]}`}>
            {product.status}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductHeader;
