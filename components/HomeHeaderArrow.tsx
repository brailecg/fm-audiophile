"use client";
import { AppButton } from "./AppButton";
import ArrowDownIcon from "@heroicons/react/24/outline/ArrowDownIcon";

const HomeHeaderArrow = () => {
  const handleScollFromTop = () => {
    return;
  };
  return (
    <div className="py-10 flex justify-center items-start ">
      <AppButton
        onClick={handleScollFromTop}
        className=" animate-bounce border border-main-orange rounded-full size-16 p-2">
        <ArrowDownIcon className="text-main-orange stroke-1 " />
      </AppButton>
    </div>
  );
};

export default HomeHeaderArrow;
