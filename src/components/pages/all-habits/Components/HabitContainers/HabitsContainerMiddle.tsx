import { Checkbox, IconButton } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
import { defaultColor } from "@/utils/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function HabitsConatinerMiddle() {
  return (
    <div className="p-3">
      <HabitCard />
    </div>
  );
}

function HabitCard() {
  return (
    <>
      {/* // Element the habit Card */}
      <div className="flex p-3 items-center justify-between ">
        {/* Round CheckBox */}
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          sx={{
            color: defaultColor.default,
            "&.Mui-checked": {
              color: defaultColor.default,
            },
          }}
        />

        <div className="flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50 ">
            <div className=" w-full">
                {/* div of icon and the name of the habit  */}
                <div className="flex gap-2 justify-between">
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon
                            className="p-3 rounded-full w-4 h-4 bg-[#4f46e5] text-white"
                            height={20}
                            width={20}
                            icon={faCode}
                        />
                        <span>Coding</span>
                    </div>
                </div>
                {/* div for Areas */}
                <div className="flex gap-2 mt-2 ">
                    <div
                    style={{backgroundColor: defaultColor[100]}} 
                    className="p-1 text-white text-[12px] rounded-md px-2">
                        <span className="text-[#4f46e5]">Area 1</span>
                    </div>
                    <div
                    style={{backgroundColor: defaultColor[100]}} 
                    className="p-1 text-white text-[12px] rounded-md px-2">
                        <span className="text-[#4f46e5]">Area 2</span>
                    </div>
                </div>
            </div>
                {/* div for 3 dots button */}
                <div className="w-10 flex items-center justify-center">
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
        </div>
      </div>
    </>
  );
}
