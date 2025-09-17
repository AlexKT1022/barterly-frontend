import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
// import {useAuth} from '../../context/AuthContext';

const Login = () => {
  const [step, setStep] = useState("username");
  const navigate = useNavigate();
  // const {login} = useAuth();

  const handleLogin = async (FormData) => {
    const username = FormData.get("username");
    const password = FormData.get("password");
    const credentials = {
      username,
      password,
    };

    await login(credentials);

    navigate("/profile");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto h-200">
        <h2>Sign in to your account</h2>
        <p>
          New to Barterly? &nbsp;
          <Link to="/register" className="underline">
            Create Account
          </Link>
        </p>
        <form action={handleLogin} className="flex flex-col mt-5">
          {step === "username" && (
            <>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="border rounded-lg p-2 border-zinc-300"
              />
              <button
                onClick={() => setStep("password")}
                className="bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300"
              >
                Continue
              </button>
            </>
          )}

          {step === "password" && (
            <>
              <div>
                <button
                  onClick={() => setStep("username")}
                  className="cursor-pointer mr-2"
                >
                  <FaArrowLeft />
                </button>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border rounded-lg p-2 border-zinc-300"
                />
              </div>

              <button
                type="submit"
                className="bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300"
              >
                Login
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
