import React from "react";
import { AllHabitsTopBar } from "./Components/AllHabitsTopBar";
import { RightSide } from "./Components/AllHabitsRightSide";
import HabitsContainer from "./Components/HabitsContainer";
import HabitCompleted from "./Components/HabitsCompleted";

export function AllHabit() {
  return (
    <>
      <div className="w-full flex">
        <div className="w-[80%] m-5">
          <AllHabitsTopBar />
          <HabitsContainer />
          <HabitCompleted />
        </div>

        <RightSide />
      </div>
    </>
  );
}
