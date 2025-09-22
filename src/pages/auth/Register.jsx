import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "/src/context/AuthContext.jsx";
import states from "./usStates.js";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [error, setError] = useState(null);

  const handleRegister = async (FormData) => {
    const first_name = FormData.get("firstname");
    const last_name = FormData.get("lastname");
    const username = FormData.get("username");
    const password = FormData.get("password");
    const location = FormData.get("location");

    const credentials = { first_name, last_name, username, password, location };

    try {
      await register(credentials);
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto h-200">
        <div className="flex flex-col justify-center items-center mx-auto">
          <h2>Create an account. Start trading!</h2>
          <Link to="/login" className="mb-5 underline">
            Already have an account?
          </Link>
          <form action={handleRegister}>
            <div className="flex mx-auto gap-2">
              <input
                type="text"
                name="firstname"
                placeholder="first name"
                className="border rounded-lg p-2 border-zinc-300 mb-3 w-full md:w-1/2"
                required
              ></input>
              <input
                type="text"
                name="lastname"
                placeholder="last name"
                className="border rounded-lg p-2 border-zinc-300 mb-3 w-full md:w-1/2"
                required
              ></input>
            </div>
            <div>
              <input
                type="text"
                name="username"
                placeholder="username"
                className="border rounded-lg p-2 border-zinc-300 mb-3 mr-3 w-full"
                required
              ></input>
            </div>
            <div>
              {" "}
              <input
                type="text"
                name="password"
                placeholder="password"
                className="border rounded-lg p-2 border-zinc-300 mb-3 w-full"
                required
              ></input>
            </div>

            <select
              name="location"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="location"
              required
            >
              <option value="" selected disabled hidden>
                🇺🇸 Select you state
              </option>
              {states.map((state) => {
                return (
                  <>
                    <option value={state.name}>{state.name}</option>
                  </>
                );
              })}
            </select>
            <button
              type="submit"
              className="bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300"
            >
              Register
            </button>
            {error && <output>{error}</output>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
