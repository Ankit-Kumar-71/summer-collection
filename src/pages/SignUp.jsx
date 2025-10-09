import React from "react";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-orange-30 via-orange-50 to-white pt-[100px] px-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md
                      sm:max-w-lg md:max-w-md lg:max-w-sm
                      transition-shadow duration-300 hover:shadow-xl">
        <h2 className="text-3xl font-extrabold text-orange-600 mb-8 text-center">
          Create Your Account
        </h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 border border-gray-300 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-orange-400
                       transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border border-gray-300 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-orange-400
                       transition"
          />
          <input
            type="password"
            placeholder="Create Password"
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
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-gray-500 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-orange-600 hover:underline font-medium">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
