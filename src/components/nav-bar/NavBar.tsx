"use client"
import React from "react";
import { Button } from "../button";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

const NavBar = () => {
  const { userId } = useAuth();
  return (
    <div className="flex flex-row justify-between w-[90%] m-auto pt-4 items-center text-xl">
      {/* Logo & Name */}
      {/* ..................................................................... */}
      <div>
        <p className="font-semibold">
          To do <span className="text-[#4f46e5]">List</span>
        </p>
      </div>

      {/* Sign up / Login Button */}
      {/* ..................................................................... */}

      <div>
        {userId ? (
          <Link href={"/dashboard"}>
            <Button colorScheme="Primary">Dashboard</Button>
          </Link>
        ) : (
          <div className="flex gap-2">
            <Link href={"/sign-in"}>
              <Button>Sign In</Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button colorScheme="Secondary">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
