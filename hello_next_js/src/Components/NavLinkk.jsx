import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinkK = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${pathname.startsWith(href) && "bg-sky-700 py-2 px-3"}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLinkK;
