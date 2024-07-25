import { NavBar } from "@/components/nav-bar";
import React from "react";

const page = () => {
  return (
    <div className="grid">
      <nav>
        <NavBar />
      </nav>
      <main>
        <div className="w-[80%] m-auto pt-16 flex flex-col justify-center items-center gap-4">
          <p className="font-medium text-xl text-center">
            Build the habits that{" "}
            <span className="text-indigo-600">Matter!</span>
          </p>
          <p className="text-gray-600 text-center w-[70%] sm:w-[50%]">
            Feeling overwhelmed? Our easy-to-use Habits tracker help you to
            control of your day and achieve your goals.
          </p>
          <button className="px-4 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-400 focus:ring-2 focus:ring-indigo-700 shadow-md shadow-indigo-200">Let's get started!</button>
        </div>
      </main>
    </div>
  );
};

export default page;
