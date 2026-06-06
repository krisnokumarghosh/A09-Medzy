"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ href, children, className }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? "bg-[#00655C] font-semibold text-white rounded-full px-4 py-1 transition-all duration-250" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default Navlink;