'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathname = usePathname();

  const NavItems = [
    { name: "Features", path: "/features" },
    { name: "Customers", path: "/customers" },
    { name: "Integrations", path: "/integrations" },
  ];

  const MenuItems = [
    { name: "Profile", path: "/profile" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Activity", path: "/activity" },
    { name: "Analytics", path: "/analytics" },
    { name: "System", path: "/system" },
    { name: "Deployments", path: "/deployments" },
    { name: "Settings", path: "/settings" },
    { name: "Team Settings", path: "/team-settings" },
    { name: "Help", path: "/help" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="flex items-center">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 mr-2"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
            ACME
          </span>
        </Link>
      </div>

      {/* 데스크톱 내비게이션 */}
      <div className="hidden md:flex space-x-4">
        {NavItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`hover:text-blue-500 ${
              pathname === item.path ? "text-blue-500 font-bold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* 모바일 내비게이션 */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {MenuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block px-2 py-1 text-lg ${
                    pathname === item.path ? "text-blue-500 font-bold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/logout"
                className="block px-2 py-1 text-lg text-red-500"
              >
                Logout
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <Button className="bg-blue-500 hover:bg-blue-600">가입하기</Button>
    </nav>
  );
};

export default Navbar;
