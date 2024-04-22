import React from "react";

const Login = () => {
  return (
    <div className="w-full h-[72vh] flex justify-center items-center">
      <div className="text-center border rounded-md p-5">
        <h1 className=" text-2xl pb-4 font-semibold">
          <span className="text-[#22c55e]">Login</span>
        </h1>
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#22c55e] sm:text-sm sm:leading-6"
            placeholder="Name.."
          ></input>
          <input
            type="text"
            name="password"
            id="password"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#22c55e] sm:text-sm sm:leading-6"
            placeholder="Password"
          ></input>
          <button className="bg-[#22c55e] hover:bg-[#22c55e] text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
