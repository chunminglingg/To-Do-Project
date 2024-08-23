import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  colorScheme?:
    | "default"
    | "Primary"
    | "Secondary"
    | "Warning"
    | "Success"
    | "Danger"
    | "Infor";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean
  rounded?:
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "full";
  onClick?: () => void
}
const Button: React.FC<ButtonProps> = ({
  children,
  className="",
  size = "md",
  colorScheme = "default",
  rounded = "lg",
  isDisabled = false,
  onClick,
 
}) => {

  const buttonSize = (size: string) => {
    switch (size) {
        case "sm":
          return "px-5 py-2 text-sm font-medium ";
        case "md":
          return "px-6 py-3 text-sm font-medium";
        case "lg":
          return "px-10 py-3 text-sm font-medium";
        default:
          return "px-8 py-3 text-sm font-medium";
    }
  }
  const buttonRounded = (rounded: string) => {
    switch (rounded) {
        case "none":
          return "";
        case "sm":
          return "rounded-sm";
        case "md":
          return "rounded";
        case "lg":
          return "rounded-lg";
        case "full":
          return "rounded-full";
        default:
          return "rounded-lg";
    }
  }

  const buttonColor = (colorScheme: string) => {
    switch (colorScheme) {
       
        case "Primary":
          return "bg-indigo-600 hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-700 text-white shadow-md shadow-indigo-200";
        case "Secondary":
          return "text-indiago-600 border border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white focus:ring-4 focus:ring-indigo-700 shadow-md shadow-indigo-100";
        case "Warning":
          return "bg-yellow-500 text-white border border-yellow-500 hover:bg-yellow-600 hover:text-white";
        case "Success":
          return "bg-green-500 text-white border border-green-500 hover:bg-green-600 hover:text-white";
        case "Danger":
            return "bg-red-500 text-white border border-red-500 hover:bg-red-600 hover:text-white"
        case "Infor":
            return "bg-blue-500 text-white borer boder-blue-500 hover:bg-blue-600 hover:text-white"
        default:
            return "bg-indigo-600 hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-700 text-white shadow-md shadow-indigo-200";
  
  }
}

  const buttonDisabled = isDisabled? "opacity-50 cursor-not-allowed" : "";
  const buttonSizeStyles = buttonSize(size)
  const buttonRoundedStyles = buttonRounded(rounded)
  const buttonColorStyles = buttonColor(colorScheme)


  return (
    <>
        <button onClick={onClick} className={`flex justify-center items-center cursor-pointer  ${buttonColorStyles} ${buttonSizeStyles} ${buttonRoundedStyles} ${className} ${buttonDisabled}`}>{children}</button>
    </>
  )
  
};

export default Button;
