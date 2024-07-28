import React, { HTMLInputTypeAttribute } from "react";
import { cn } from "@/lib/utils";
export const AppInput = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
}) => {
  return (
    <input
      {...props}
      className={cn(
        "appearance-none w-full border border-transparent bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none",
        className
      )}
    />
  );
};
