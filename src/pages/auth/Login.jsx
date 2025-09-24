import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "/src/context/AuthContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState(null);

  const handleLogin = async (FormData) => {
    const username = FormData.get("username");
    const password = FormData.get("password");
    const credentials = {
      username,
      password,
    };
    try {
      await login(credentials);
      navigate(-1);
    } catch (error) {
      setError(error.message);
    }
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
          <input
            required
            type="text"
            name="username"
            placeholder="Username"
            className="border rounded-lg p-2 border-zinc-300 mb-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border rounded-lg p-2 border-zinc-300"
            required
          />
          <button
            type="submit"
            className="bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300"
          >
            Login
          </button>
          {error && <output>{error}</output>}
        </form>
      </div>
    </>
  );
};

export default Login;
