"use client";
import React, { ReactNode } from "react";
import { AppButton } from "./AppButton";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type LinkButtonType = {
  href: string;
  children: ReactNode;
};

const LinkButton = ({ href, children }: LinkButtonType) => {
  const pathname = usePathname();
  const textColor = pathname === href ? " text-main-orange" : "";
  return (
    <AppButton href={href} variant="tertiary" className={`px-0 ${textColor}`}>
      {children}
    </AppButton>
  );
};

const PageLinks = ({ className }: { className: string }) => {
  return (
    <ul className={cn("tracking-[2px] text-sm font-semibold", className)}>
      <li>
        <LinkButton href={"/"}>HOME</LinkButton>
      </li>
      <li>
        <LinkButton href={"/headphones"}>HEADPHONES</LinkButton>
      </li>
      <li>
        <LinkButton href={"/speakers"}>SPEAKERS</LinkButton>
      </li>
      <li>
        <LinkButton href={"/earphones"}>EARPHONES</LinkButton>
      </li>
    </ul>
  );
};

export default PageLinks;
