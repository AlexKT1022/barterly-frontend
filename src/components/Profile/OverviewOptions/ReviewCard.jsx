const ReviewCard = () => {
  return (
    <>
      <div className="w-full p-5 md:h-32 border border-zinc-300 rounded-lg grid md:grid-cols-[80px_minmax(900px,_1fr)] content-center">
        <img
          src=""
          className="bg-black w-12 h-12 rounded-full justify-self-center"
        ></img>
        <div>
          <div>
            <p>User 1</p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
          <p className="text-zinc-500">
            Great seller! Thanks for the boxset of Gray's Anatomy!
          </p>
          <p className="text-zinc-500 text-xs">2 weeks ago</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
