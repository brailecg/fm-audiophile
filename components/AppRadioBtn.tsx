import React from "react";

const AppRadioBtn = ({
  label,
  id,
  name,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
}) => {
  return (
    <div className=" flex items-center border border-gray-200 rounded-lg h-14 px-6">
      <input
        {...props}
        name={name}
        id={id}
        type="radio"
        className="size-4 border-gray-300 text-transparent ring-1 ring-gray-300 border"
      />
      <label
        htmlFor={id}
        className=" text-sm font-semibold ml-3 block leading-6 text-gray-900 ">
        {label}
      </label>
    </div>
  );
};

export default AppRadioBtn;
