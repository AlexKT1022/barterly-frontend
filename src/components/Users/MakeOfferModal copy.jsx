import { jwtDecode } from "jwt-decode";
const token = sessionStorage.getItem("token");
const { id } = jwtDecode(token);

const fetchPostsByUserId = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}/posts`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

// const createOffer = () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/offers")
//   } catch (error) {

//   }
// }

const loggedUser = await fetchPostsByUserId(id);
const loggedUserPosts = loggedUser.posts;

const MakeOfferModal = ({ setActive }) => {
  return (
    <div
      id="offer-modal"
      className="mx-auto bg-white border border-zinc-300 shadow-xl rounded-lg fixed p-5 inset-x-5 inset-y-25 lg:inset-x-1/3"
    >
      <div className="flex flex-col justify-center">
        <h1 className="mb-5 text-lg text-center">
          Make an offer they can't refuse!
        </h1>
        <form className="w-full mb-5">
          <select className="w-full border border-zinc-300 p-2 rounded-lg mb-2">
            <option>Select from your posts...</option>
            {loggedUserPosts.map((post) => {
              return <option>{post.title}</option>;
            })}
          </select>
          <textarea
            placeholder="Leave a message - barter!"
            className="w-full border border-zinc-300 p-2 rounded-lg h-90"
          ></textarea>
        </form>
        <div className="flex justify-evenly">
          <button className="p-5 bg-zinc-800 hover:bg-zinc-500 text-white w-40">
            Make Offer
          </button>
          <button
            className="p-5 bg-red-500 hover:bg-red-800 text-white w-40"
            onClick={() => setActive(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeOfferModal;
