import { Link, useNavigate } from "react-router";
// import {useAuth} from '../../context/AuthContext';

const states = [
  { name: "Alabama", abbreviation: "AL" },
  { name: "Alaska", abbreviation: "AK" },
  { name: "Arizona", abbreviation: "AZ" },
  { name: "Arkansas", abbreviation: "AR" },
  { name: "California", abbreviation: "CA" },
  { name: "Colorado", abbreviation: "CO" },
  { name: "Connecticut", abbreviation: "CT" },
  { name: "Delaware", abbreviation: "DE" },
  { name: "Florida", abbreviation: "FL" },
  { name: "Georgia", abbreviation: "GA" },
  { name: "Hawaii", abbreviation: "HI" },
  { name: "Idaho", abbreviation: "ID" },
  { name: "Illinois", abbreviation: "IL" },
  { name: "Indiana", abbreviation: "IN" },
  { name: "Iowa", abbreviation: "IA" },
  { name: "Kansas", abbreviation: "KS" },
  { name: "Kentucky", abbreviation: "KY" },
  { name: "Louisiana", abbreviation: "LA" },
  { name: "Maine", abbreviation: "ME" },
  { name: "Maryland", abbreviation: "MD" },
  { name: "Massachusetts", abbreviation: "MA" },
  { name: "Michigan", abbreviation: "MI" },
  { name: "Minnesota", abbreviation: "MN" },
  { name: "Mississippi", abbreviation: "MS" },
  { name: "Missouri", abbreviation: "MO" },
  { name: "Montana", abbreviation: "MT" },
  { name: "Nebraska", abbreviation: "NE" },
  { name: "Nevada", abbreviation: "NV" },
  { name: "New Hampshire", abbreviation: "NH" },
  { name: "New Jersey", abbreviation: "NJ" },
  { name: "New Mexico", abbreviation: "NM" },
  { name: "New York", abbreviation: "NY" },
  { name: "North Carolina", abbreviation: "NC" },
  { name: "North Dakota", abbreviation: "ND" },
  { name: "Ohio", abbreviation: "OH" },
  { name: "Oklahoma", abbreviation: "OK" },
  { name: "Oregon", abbreviation: "OR" },
  { name: "Pennsylvania", abbreviation: "PA" },
  { name: "Rhode Island", abbreviation: "RI" },
  { name: "South Carolina", abbreviation: "SC" },
  { name: "South Dakota", abbreviation: "SD" },
  { name: "Tennessee", abbreviation: "TN" },
  { name: "Texas", abbreviation: "TX" },
  { name: "Utah", abbreviation: "UT" },
  { name: "Vermont", abbreviation: "VT" },
  { name: "Virginia", abbreviation: "VA" },
  { name: "Washington", abbreviation: "WA" },
  { name: "West Virginia", abbreviation: "WV" },
  { name: "Wisconsin", abbreviation: "WI" },
  { name: "Wyoming", abbreviation: "WY" },
];

states.forEach((state) => {
  console.log(state.name);
});

const Register = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto h-200">
        <div className="grid grid-cols-2 justify-center items-center">
          <img
            src="../../public/book_shelf.webp"
            className="h-200 rounded-lg object-contain "
          />
          <div className="flex flex-col justify-center items-center mx-auto">
            <h2 className="mb-5">Create an account</h2>
            <form className="">
              <input
                placeholder="username"
                className="border rounded-lg p-2 border-zinc-300 mb-3 mr-3"
              ></input>
              <input
                placeholder="password"
                className="border rounded-lg p-2 border-zinc-300 mb-3"
              ></input>
              <select
                name="state"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                {states.map((state) => {
                  return (
                    <>
                      <option value={state.name}>{state.name}</option>
                    </>
                  );
                })}
              </select>
              <button className="bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
