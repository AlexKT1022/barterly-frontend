const MakeOfferModal = ({ setActive }) => {
  return (
    <div
      id="offer-modal"
      class="mx-auto bg-white border border-zinc-300 shadow-xl rounded-lg fixed p-5 inset-x-5 inset-y-25 lg:inset-x-1/3"
    >
      <div className="flex flex-col justify-center">
        <h1 className="mb-1 text-lg text-center">
          Make an offer they can't refuse!
        </h1>
        <form className="w-full mb-5">
          <select className="w-full border border-zinc-300 p-2 rounded-lg">
            <option>Select from your posts...</option>
          </select>
          <textarea
            placeholder="Leave a message - barter!"
            className="w-full border border-zinc-300 p-2 rounded-lg"
          ></textarea>
        </form>
        <div className="flex flex-col justify-between h-40">
          <button className="p-5 bg-zinc-800 text-white">Make Offer</button>
          <button
            className="p-5 bg-zinc-800 text-white"
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
