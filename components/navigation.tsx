"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-[#2d2d2d] rounded-full py-5 z-10">
      <ul className="flex justify-center gap-8 md:gap-12">
        <li className="list-none transition-transform duration-100 ease-in-out hover:scale-105">
          <Link href="/" className="text-white hover:text-gray-300">
            Home {path === "/" && <span className="ml-1">😊</span>}
          </Link>
        </li>
        <li className="list-none transition-transform duration-100 ease-in-out hover:scale-105">
          <Link href="/about-us" className="text-white hover:text-gray-300">
            About Us {path === "/about-us" && <span className="ml-1">😊</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
