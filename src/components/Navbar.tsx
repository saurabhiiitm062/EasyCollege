"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Colleges", href: "/colleges" },
  { label: "Predictors", href: "/predictors" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-[#01024D] shadow-sm sticky top-0 z-50 border-b border-gray-400">
      <nav className="max-w-full h-20 mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          EasyCollege
        </Link>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
