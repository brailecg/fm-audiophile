"use client";
import React from "react";
import {
  BallTriangle,
  Bars,
  Circles,
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  SpinningCircles,
  TailSpin,
  ThreeDots,
} from "react-loading-icons";

const AppLoadingIcon = () => {
  return (
    <div className=" py-8 ">
      <TailSpin className="mx-auto" stroke="hsl(22, 65%, 57%)" />
    </div>
  );
};

export default AppLoadingIcon;
