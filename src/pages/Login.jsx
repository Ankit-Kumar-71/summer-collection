import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-orange-40 via-orange-10 to-white pt-[100px] px-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md
                      sm:max-w-lg md:max-w-md lg:max-w-sm
                      transition-shadow duration-300 hover:shadow-xl">
        <h2 className="text-3xl font-extrabold text-orange-600 mb-8 text-center">
          Welcome Back
        </h2>

        <form className="space-y-6">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border border-gray-300 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-orange-400
                       transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 border border-gray-300 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-orange-400
                       transition"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-4 rounded-xl
                       font-semibold text-lg hover:bg-orange-600
                       transition-colors duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-gray-500 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-orange-600 hover:underline font-medium">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
