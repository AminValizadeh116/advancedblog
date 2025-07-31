'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname()
  const navbarList = [
    {
      href: "/",
      title: "home",
    },
    {
      href: "/blogs",
      title: "articles",
    },
    {
      href: "/news",
      title: "news",
    },
    {
      href: "/create",
      title: "create",
    },
  ];
  return (
      <nav className="flex justify-between bg-amber-50 rounded-t-lg max-sm:text-sm">
        {navbarList.map((item) => (
          <Link className={`px-7 py-2 ${item.href === pathname? 'bg-amber-950 text-white rounded-t-lg' : ''}`} key={item.href} href={item.href}>
            {item.title}
          </Link>
        ))}
      </nav>
  );
}

export default Navbar;
