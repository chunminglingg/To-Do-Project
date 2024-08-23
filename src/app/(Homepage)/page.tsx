import { Button } from "@/components";
import { NavBar } from "@/components/nav-bar";
import React from "react";

const page = () => {
  return (
    <div className="grid h-screen w-screen bg-gradient-to-bl from-white to-indigo-300 ">
      <nav className="">
        <NavBar />
      </nav>
      <main>
        <div className="w-[80%] m-auto pt-25 flex flex-col justify-center items-center gap-4">
          <p className="font-medium text-xl text-center">
            Build the habits that{" "}
            <span className="text-indigo-600">Matter!</span>
          </p>
          <p className="text-gray-600 text-center w-[70%] sm:w-[50%]">
            Feeling overwhelmed? Our easy-to-use Habits tracker help you to
            control of your day and achieve your goals.
          </p>
          <Button colorScheme="Primary" size="lg">Let&apos;s get started!</Button>
        </div>
      </main>
    </div>
  );
};

export default page;
