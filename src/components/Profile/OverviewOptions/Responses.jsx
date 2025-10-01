import { useState } from "react";

import PendingResponseCard from "./PendingResponseCard";
import AcceptedResponseCard from "./AcceptedResponseCard";

const Responses = ({ data }) => {
  const [toggle, setToggle] = useState("pending");
  return (
    <>
      <div className="w-full md:w-64 mx-auto flex flex-col md:flex-row justify-evenly md:justify-between bg-zinc-200 h-32 md:h-8 rounded-lg md:rounded-full mt-5 pt-1 pb-1 pl-1 pr-1">
        <button
          onClick={() => setToggle("pending")}
          className={`text-sm rounded-full md:w-60 font-semibold cursor-pointer transition-all duration-500 ${
            toggle === "pending"
              ? "bg-white"
              : "bg-transparent hover:bg-zinc-400 hover:text-white"
          }`}
        >
          Pending Offers
        </button>
        <button
          onClick={() => setToggle("accepted")}
          className={`text-sm rounded-full md:w-60 font-semibold cursor-pointer transition-all duration-500 ${
            toggle === "accepted"
              ? "bg-white"
              : "bg-transparent hover:bg-zinc-400 hover:text-white"
          }`}
        >
          Accepted Offers
        </button>
      </div>
      <div>{toggle === "pending" && <PendingResponseCard data={data} />}</div>
      <div>{toggle === "accepted" && <AcceptedResponseCard data={data} />}</div>
    </>
  );
};

export default Responses;
