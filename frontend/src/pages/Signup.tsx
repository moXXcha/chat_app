import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-4/5 mx-auto mt-40">
      <h1 className="text-2xl mb-10">siginup</h1>
      <input
        className="block border w-full h-10 mb-2 rounded-md p-2"
        type="text"
        placeholder="email"
      />
      <input
        className="block border w-full h-10 mb-2 rounded-md p-2"
        type="text"
        placeholder="password"
      />
      <div className="w-full flex flex-col items-center">
        <Link className="w-full text-center" to="/user/create">
          <button className="border w-1/3 rounded-md h-10 btn btn-primary">
            signup
          </button>
        </Link>
        <Link className="underline" to="/login">
          login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
