"use client";

import NavLink from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLinkK from "./NavLinkk";

const Header = () => {
  const pathName = usePathname();

  if (pathName.startsWith("/dashboard")) return <></>;

  return (
    <header className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center flex-wrap">
      <NavLink href="/" className="text-lg font-semibold">
        Dev-Story
      </NavLink>

      <nav className="space-x-5">
        <NavLinkK href="/about">About</NavLinkK>
        <NavLinkK href="/stories">Stories</NavLinkK>
        <NavLinkK href="/tutorials">Tutorials</NavLinkK>
        <NavLinkK href="/login">Login</NavLinkK>
        <NavLinkK href="/register">Register</NavLinkK>
      </nav>
    </header>
  );
};

export default Header;
