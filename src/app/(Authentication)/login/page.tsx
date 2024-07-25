import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-1 place-items-center h-screen w-screen bg-gradient-to-bl from-blue-50 to-indigo-400 ">
      <div className=" flex flex-col gap-4 items-center backdrop-blur-md bg-white/30 w-[45%] min-w-[350px] h-[60%]">
        <p className="text-xl text-gray-800 pt-4">
          <span className="font-medium bg-gradient-to-bl from-indigo-600 to-cyan-500 text-transparent bg-clip-text">
            Welcome Back!
          </span>{" "}
          Please Sign in
        </p>
        <div className="w-[60%]">
          <label
            htmlFor="first_name"
            className="inline-block mb-2 text-md font-medium "
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus block w-full p-2.5 outline-indigo-100"
            placeholder="John"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default page;
