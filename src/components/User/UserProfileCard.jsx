import { useState } from "react";
import { Link } from "react-router";

const UserProfileCard = ({ data }) => {
  const [toggleMessage, setToggleMessage] = useState(false);
  return (
    <>
      <div
        className="mx-auto mt-5 max-w-6xl px-4 border rounded-lg border-zinc-300 
                 gap-5 p-5
                 md:flex md:flex-col lg:grid lg:grid-cols-[96px_minmax(0,1fr)_120px]"
      >
        <div
          className="w-24 h-24 rounded-full bg-zinc-800 
                  overflow-hidden shrink-0 place-self-center md:place-self-start"
        >
          <img src={data.profile_image_url} alt="" className="rounded-full" />
        </div>

        <div className="user-details flex flex-col justify-center">
          <p className="text-lg font-semibold">{data.username}</p>

          <div className="flex text-xs items-center mb-2">
            <p>{data.location}</p>
          </div>
          <p className="text-zinc-600 mb-2 italic">
            Member Since {data.created_at.slice(0, 4)}
          </p>
          <div>{data.bio}</div>
        </div>
        <button
          className="bg-black text-white h-10 rounded-lg text-sm relative top-1 transition-colors duration-300 hover:bg-zinc-500"
          onClick={() => setToggleMessage(true)}
        >
          Message
        </button>
        {toggleMessage && (
          <>
            <div className="mx-auto w-80 h-60 top-50 absolute inset-0 bg-white border border-zinc-300 shadow-xl rounded-lg p-5">
              <div className="flex flex-col justify-center items-center">
                🤯
                <p className="text-center mb-5">
                  Hey! You found an upcoming feature. Check out our{" "}
                  {
                    <Link to="/about" className="underline hover:text-zinc-500">
                      about page
                    </Link>
                  }{" "}
                  to find out about more of our features. Thanks for being
                  patient!
                </p>
                <button
                  type="button"
                  className="px-4 h-10 w-32 rounded-md bg-zinc-800 text-white transition-colors duration-300 hover:bg-zinc-500"
                  onClick={() => setToggleMessage(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserProfileCard;
