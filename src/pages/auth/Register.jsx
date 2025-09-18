import { Link, useNavigate } from "react-router";
import { useAuth } from "/src/context/AuthContext.jsx";
import states from "./usStates.js";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async (FormData) => {
    const username = FormData.get("username");
    const password = FormData.get("password");

    const credentials = { username, password };

    await register(credentials);

    navigate("/profile");
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
            <input
              type="text"
              name="username"
              placeholder="username"
              className="border rounded-lg p-2 border-zinc-300 mb-3 mr-3"
              required
            ></input>
            <input
              type="text"
              name="password"
              placeholder="password"
              className="border rounded-lg p-2 border-zinc-300 mb-3"
              required
            ></input>
            <select
              name="state"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="state"
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
            <button className="bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
