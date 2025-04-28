import React from "react";
import { Logo, NavItems } from "../shared";

export const Footer = () => {
  return (
    <footer className="mb-10 mt-20">
      <div className="flex flex-col items-center gap-y-6">
        <Logo />
        <NavItems />
      </div>
    </footer>
  );
};
