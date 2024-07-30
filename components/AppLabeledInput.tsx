import React from "react";
import { AppInput } from "./AppInput";
import { cn } from "@/lib/utils";

type AppLabeledInputType = {
  className?: string;
  label: string;
  placeholder: string;
  inputId: string;
};

const AppLabeledInput = ({
  className,
  label,
  placeholder,
  inputId,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & AppLabeledInputType) => {
  return (
    <div className={cn(" flex flex-col gap-1 w-full", className)}>
      <label htmlFor="name" className=" text-xs font-semibold">
        {label}
      </label>
      <AppInput
        {...props}
        placeholder={placeholder}
        className=" h-14 border border-gray-200 rounded-lg focus:border-gray-200 px-6 py-4 w-full"
        id={inputId}
      />
    </div>
  );
};

export default AppLabeledInput;
